"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipmentClient = exports.shipmentMethods = exports.shipmentPath = exports.ShipmentItemSize = void 0;
exports.ShipmentItemSize = {
    small: 'Small', // Shoe box size
    medium: 'Medium', // Car front seat
    large: 'Large', // Car back sit
    x_large: 'Extra Large', // Car trunk
    xx_large: 'XX Large', // Hatchback/SUV trunk
    huge: 'Huge', // Pickup truck
    overweight: 'Overweight' // Trailer, Truck & Shipping Container
};
exports.shipmentPath = 'shipment';
exports.shipmentMethods = ['find', 'get', 'create', 'patch', 'estimate', 'pay'];
const shipmentClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.shipmentPath, connection.service(exports.shipmentPath), {
        methods: exports.shipmentMethods
    });
};
exports.shipmentClient = shipmentClient;
//# sourceMappingURL=shipment.shared.js.map