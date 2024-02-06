"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipdayVerify = void 0;
const node_cron_1 = require("node-cron");
const shipment_1 = require("../services/shipment/shipment");
const shipdayVerify = (app) => {
    (0, node_cron_1.schedule)('*/5 * * * *', async () => {
        var activeShipments = await app.service('shipment').active(null, {
            query: {
                $select: ['transactionId', 'status']
            },
            paginate: false
        });
        if (activeShipments) {
            while (activeShipments.data.length > 0) {
                activeShipments.data.forEach(async (value) => {
                    const shipday = await app.service('shipday').get(value.transactionId);
                    if (!shipday || Array.isArray(shipday))
                        return;
                    var status = shipday.orderStatus.orderState;
                    if (status && status != value.status) {
                        console.log(value);
                        await app
                            .service('shipment')
                            .patch(value.id, { status: shipment_1.ShipmentStatus[`${status}`] });
                    }
                });
            }
        }
    }, {
        timezone: 'Africa/Lagos'
    });
};
exports.shipdayVerify = shipdayVerify;
//# sourceMappingURL=shipday-verify.js.map