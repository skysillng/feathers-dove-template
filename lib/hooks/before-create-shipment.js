"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beforeCreateShipment = void 0;
const beforeCreateShipment = async (context) => {
    console.log(`Running hook before create shipment on ${context.path}.${context.method}`);
    const data = context.data;
    var pickup = data.pickup;
    var delivery = data.delivery;
    const location = await context.service.estimate({
        origin: pickup.geopoint,
        destination: delivery.geopoint,
        size: data.size
    });
    if (location) {
        data.deliveryFee = Math.ceil(location.deliveryFee * 100) / 100;
        data.tax = Math.ceil(7.5 * data.deliveryFee) / 100;
        data.etaTime = location.etaTime;
        context.data = data;
    }
};
exports.beforeCreateShipment = beforeCreateShipment;
//# sourceMappingURL=before-create-shipment.js.map