"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.ShipmentService = void 0;
const knex_1 = require("@feathersjs/knex");
const shipment_schema_1 = require("./shipment.schema");
const axios_1 = __importDefault(require("axios"));
const ngeohash_1 = __importDefault(require("ngeohash"));
const transaction_schema_1 = require("../transaction/transaction.schema");
const lodash_1 = __importDefault(require("lodash"));
const app_1 = require("../../app");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class ShipmentService extends knex_1.KnexService {
    constructor(options, app) {
        super(options);
        this.app = app;
    }
    async estimate(data, params) {
        console.log(data);
        const origin = {
            latLng: {
                latitude: data.origin.lat,
                longitude: data.origin.lng
            }
        };
        const destination = {
            latLng: {
                latitude: data.destination.lat,
                longitude: data.destination.lng
            }
        };
        var originHash = ngeohash_1.default.encode(origin.latLng.latitude, origin.latLng.longitude, 7);
        var destinationHash = ngeohash_1.default.encode(destination.latLng.latitude, destination.latLng.longitude, 7);
        const locationService = this.app.service('location');
        const cacheResult = await locationService._find({
            transaction: params?.transaction,
            query: {
                $limit: 1,
                $or: [
                    {
                        origin: originHash,
                        destination: destinationHash
                    },
                    {
                        origin: destinationHash,
                        destination: originHash
                    }
                ]
            }
        });
        var location = {};
        if (cacheResult.data.length > 0) {
            location = cacheResult.data[0];
            console.log('from cache \n');
        }
        else {
            const res = await this.googleRoute(origin, destination);
            if (res.routes && res.routes.length > 0) {
                var routes = res.routes;
                location = await locationService._create({
                    origin: originHash,
                    destination: destinationHash,
                    distance: routes[0].distanceMeters,
                    etaTime: routes[0].duration
                }, {
                    transaction: params?.transaction
                });
                console.log('from google \n');
            }
        }
        // Estimate
        location['deliveryFee'] = (location.distance / 1000) * 110;
        return location;
    }
    async googleRoute(origin, destination) {
        const routeURL = this.app.get('google')?.routeUrl ?? '';
        const routeKey = this.app.get('google')?.routeKey ?? '';
        const body = {
            origin: {
                location: origin
            },
            destination: {
                location: destination
            },
            travelMode: 'DRIVE',
            routingPreference: 'TRAFFIC_AWARE',
            //departureTime: '2023-10-15T15:01:23.045123456Z',
            computeAlternativeRoutes: false,
            routeModifiers: {
                avoidTolls: false,
                avoidHighways: false,
                avoidFerries: false
            },
            //languageCode: 'en-US',
            units: 'METRIC'
        };
        const config = {
            url: routeURL + '/v2:computeRoutes',
            method: 'post',
            data: body,
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters',
                'X-Goog-Api-Key': routeKey
            }
        };
        const axiosResponse = await (0, axios_1.default)(config);
        if (axiosResponse.status === 200 && axiosResponse.statusText == 'OK')
            return axiosResponse.data;
        return {
            error: 'an error occurred'
        };
    }
    async _estimate(data) {
        const feeObject = this.app.get('fee');
        // Set the delivery flat fee per kilometer
        const flat = feeObject.flat;
        // Initialize the distance multiplier
        var distanceMultiplier = 0;
        // Checks shipment's delivery distance range and set appropriate multiplier
        if (data.distance >= 5 && data.distance < 10) {
            // Distance is within 5km to 10km
            distanceMultiplier = feeObject['5km'];
        }
        else if (data.distance >= 10 && data.distance < 15) {
            distanceMultiplier = feeObject['10km'];
        }
        else if (data.distance >= 15) {
            distanceMultiplier = feeObject['15km'];
        }
        // Set sizeMultiplier based on the size passed
        const sizeMultiplier = feeObject[data.size] ?? 0;
        // Set order count
        var orderCount = data.orderCount;
        // Getting the actual orderCount from the db
        if (!orderCount && data.userId) {
            const countObj = await this.find({
                query: {
                    $limit: 0,
                    userId: data.userId,
                    createdAt: { $gte: new Date().setHours(24, 0, 0, 0).toString() }
                }
            });
            orderCount = countObj.total ?? 0;
        }
        var countMultiplier = 0;
        if (orderCount) {
            if (orderCount >= 5 && orderCount <= 10) {
                countMultiplier = feeObject['5'];
            }
            if (orderCount >= 11 && orderCount <= 15) {
                countMultiplier = feeObject['11'];
            }
            if (orderCount >= 16 && orderCount <= 20) {
                countMultiplier = feeObject['16'];
            }
            if (orderCount >= 21 && orderCount <= 25) {
                countMultiplier = feeObject['21'];
            }
            if (orderCount >= 26) {
                countMultiplier = feeObject['26'];
            }
        }
    }
    async pay(data, params) {
        var shipment = await this._get(data.shipmentId);
        const transactionService = this.app.service('transaction');
        if (shipment) {
            var transaction;
            if (shipment.transactionId) {
                transaction = await transactionService.verify({ id: shipment.transactionId, status: 'successful' });
            }
            if (transaction && transaction.status == transaction_schema_1.TransactionState.successful) {
                return;
            }
            const amount = shipment.deliveryFee + shipment.tax + shipment.tip;
            transaction = await this.app.service('transaction').create({
                objectId: data.shipmentId,
                objectType: this.options.name,
                amount: Math.ceil(amount * 100) / 100,
                currency: 'NGN'
            });
            shipment = await this._patch(data.shipmentId, { transactionId: transaction.id });
            console.log(shipment);
            const user = await this.app.service('user')._get(shipment.userId);
            const paymentLinkData = {
                id: transaction.id,
                amount: transaction.amount,
                redirect_url: data.redirect_url,
                userId: shipment.userId,
                name: user.firstname + ' ' + user.lastname,
                email: user.email,
                phonenumber: user.mobile
            };
            const paymentInfo = await transactionService.initPayment(paymentLinkData);
            console.log(paymentInfo);
            return paymentInfo;
        }
    }
    async active(data, _params) {
        const statusArray = lodash_1.default.omit(shipment_schema_1.ShipmentStatus, ['ALREADY_DELIVERED', 'FAILED_DELIVERY', 'INCOMPLETE']);
        const params = _params ?? {};
        return this.find({
            query: {
                ...(params.query && { ...params.query }),
                status: {
                    $in: Object.values(statusArray)
                }
            }
        });
    }
    async proceedWithShipment(shipmentId, txnId) {
        const shipment = await this._get(shipmentId);
        console.log(shipment);
        // Check to only create a shipday order if none order had been created.
        if (shipment.status != null)
            return;
        const pickup = typeof shipment.pickup == 'string' ? JSON.parse(shipment.pickup) : shipment.pickup;
        const delivery = typeof shipment.delivery == 'string' ? JSON.parse(shipment.delivery) : shipment.pickup;
        var date = new Date(pickup.date);
        const offset = date.getTimezoneOffset();
        date = new Date(date.getTime() - offset * 60 * 1000);
        const dates = date.toISOString().split('T');
        var hours = date.getHours();
        var mins = date.getMinutes();
        var secs = date.getSeconds();
        var dHours = hours + 1;
        var hoursString = hours >= 10 ? hours : '0' + hours;
        var minsString = mins >= 10 ? mins : '0' + mins;
        var secsString = secs >= 10 ? secs : '0' + secs;
        var dHoursString = dHours >= 10 ? dHours : '0' + dHours;
        const ePickupTime = hoursString + ':' + minsString + ':' + secsString;
        const eDeliveryDate = dates[0];
        const eDeliveryTime = dHoursString + ':' + minsString + ':' + secsString;
        const shipdayData = {
            orderNumber: shipment.id,
            customerName: delivery.name,
            customerEmail: delivery.email,
            customerPhoneNumber: delivery.phone,
            customerAddress: delivery.address,
            restaurantName: pickup.name,
            restaurantPhoneNumber: pickup.phone,
            restaurantAddress: pickup.address,
            orderItem: shipment.items
                ? shipment.items.map((value) => {
                    return {
                        name: value.detail,
                        quantity: value.quantity,
                        unitPrice: '0',
                        details: `Overall shipment size is ${shipment.size}.`
                    };
                })
                : undefined,
            pickupLatitude: pickup.geopoint.lat,
            pickupLongitude: pickup.geopoint.lng,
            deliveryLatitude: delivery.geopoint.lat,
            deliveryLongitude: delivery.geopoint.lng,
            deliveryInstruction: pickup.instruction,
            expectedDeliveryDate: eDeliveryDate,
            expectedDeliveryTime: eDeliveryTime,
            expectedPickupTime: ePickupTime,
            deliveryFee: shipment.deliveryFee ?? 0,
            tips: shipment.tip ?? 0
        };
        // console.log(shipdayData)
        const shipday = await app_1.app.service('shipday').create(shipdayData);
        await this._patch(shipmentId, { status: shipment_schema_1.ShipmentStatus.NOT_ASSIGNED, transactionId: txnId });
        console.log(shipday);
    }
}
exports.ShipmentService = ShipmentService;
const getOptions = (app) => {
    return {
        id: 'id',
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'shipment',
        multi: false
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=shipment.class.js.map