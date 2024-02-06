"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipdayQueryResolver = exports.shipdayQueryValidator = exports.shipdayQuerySchema = exports.shipdayQueryProperties = exports.shipdayPatchResolver = exports.shipdayPatchValidator = exports.shipdayPatchSchema = exports.shipdayDataResolver = exports.shipdayDataValidator = exports.shipdayDataSchema = exports.shipdayExternalResolver = exports.shipdayResolver = exports.shipdayValidator = exports.shipdaySchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
const OrderState = [
    'ACTIVE',
    'NOT_ASSIGNED',
    'NOT_ACCEPTED',
    'NOT_STARTED_YET',
    'STARTED',
    'PICKED_UP',
    'READY_TO_DELIVER',
    'ALREADY_DELIVERED',
    'FAILED_DELIVERY',
    'INCOMPLETE'
];
const customerSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    address: typebox_1.Type.String(),
    phoneNumber: typebox_1.Type.String(),
    emailAddress: typebox_1.Type.String(),
    latitude: typebox_1.Type.Number(),
    longitude: typebox_1.Type.Number()
});
const vendorSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    name: typebox_1.Type.String(),
    address: typebox_1.Type.String(),
    phoneNumber: typebox_1.Type.String(),
    latitude: typebox_1.Type.Number(),
    longitude: typebox_1.Type.Number()
});
const assignedCarrierSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Integer(),
    personalId: typebox_1.Type.Integer(),
    name: typebox_1.Type.String(),
    codeName: typebox_1.Type.String(),
    phoneNumber: typebox_1.Type.String(),
    companyId: typebox_1.Type.Integer(),
    areaId: typebox_1.Type.Integer(),
    isOnShift: typebox_1.Type.Boolean(),
    email: typebox_1.Type.String(),
    carrierPhoto: typebox_1.Type.String(),
    isActive: typebox_1.Type.Boolean()
});
const activityLogSchema = typebox_1.Type.Object({
    placementTime: typebox_1.Type.String({ format: 'date-time' }),
    expectedPickupTime: typebox_1.Type.String({ format: 'time' }),
    expectedDeliveryDate: typebox_1.Type.String({ format: 'date' }),
    expectedDeliveryTime: typebox_1.Type.String({ format: 'time' }),
    assignedTime: typebox_1.Type.String({ format: 'date-time' }),
    startTime: typebox_1.Type.String({ format: 'date-time' }),
    pickedUpTime: typebox_1.Type.String({ format: 'date-time' }),
    arrivedTime: typebox_1.Type.String({ format: 'date-time' }),
    deliveryTime: typebox_1.Type.String({ format: 'date-time' })
});
const costingSchema = typebox_1.Type.Object({
    totalCost: typebox_1.Type.String({ format: 'double' }),
    deliveryFee: typebox_1.Type.String({ format: 'double' }),
    tip: typebox_1.Type.String({ format: 'double' }),
    discountAmount: typebox_1.Type.String({ format: 'double' }),
    tax: typebox_1.Type.String({ format: 'double' }),
    cashTip: typebox_1.Type.String({ format: 'double' })
});
const orderItemSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    quantity: typebox_1.Type.String(),
    unitPrice: typebox_1.Type.String({ format: 'int32' }),
    addOns: typebox_1.Type.Optional(typebox_1.Type.Array(typebox_1.Type.String())),
    details: typebox_1.Type.Optional(typebox_1.Type.String())
});
const orderStatusSchema = typebox_1.Type.Object({
    imcomplete: typebox_1.Type.Boolean(),
    accepted: typebox_1.Type.Boolean(),
    orderState: (0, typebox_1.StringEnum)(Object.values(OrderState))
});
// Main data model schema
exports.shipdaySchema = typebox_1.Type.Object({
    orderId: typebox_1.Type.Number(),
    orderNumber: typebox_1.Type.String(),
    companyId: typebox_1.Type.String(),
    areaId: typebox_1.Type.String(),
    customer: customerSchema,
    restaurant: vendorSchema,
    assignedCarrier: assignedCarrierSchema,
    distance: typebox_1.Type.String({ format: 'double' }),
    activityLog: activityLogSchema,
    costing: costingSchema,
    orderItem: typebox_1.Type.Array(orderItemSchema),
    assignedCarrierId: typebox_1.Type.String({ format: 'int32' }),
    orderStatus: orderStatusSchema,
    trackingLink: typebox_1.Type.String({ format: 'uri' }),
    feedback: typebox_1.Type.String(),
    schedule: typebox_1.Type.Boolean(),
    parentId: typebox_1.Type.String({ format: 'int32' }),
    etaTime: typebox_1.Type.String({ format: 'time' }),
    deliveryInstruction: typebox_1.Type.String()
}, { $id: 'Shipday', additionalProperties: false });
exports.shipdayValidator = (0, typebox_1.getValidator)(exports.shipdaySchema, validators_1.dataValidator);
exports.shipdayResolver = (0, schema_1.resolve)({});
exports.shipdayExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.shipdayDataSchema = typebox_1.Type.Object({
    orderNumber: typebox_1.Type.String(),
    customerName: typebox_1.Type.String(),
    customerAddress: typebox_1.Type.Optional(typebox_1.Type.String()),
    customerEmail: typebox_1.Type.String(),
    customerPhoneNumber: typebox_1.Type.String(),
    restaurantName: typebox_1.Type.String(),
    restaurantAddress: typebox_1.Type.Optional(typebox_1.Type.String()),
    restaurantPhoneNumber: typebox_1.Type.String(),
    expectedDeliveryDate: typebox_1.Type.Optional(typebox_1.Type.String()),
    expectedPickupTime: typebox_1.Type.Optional(typebox_1.Type.String()),
    expectedDeliveryTime: typebox_1.Type.Optional(typebox_1.Type.String()),
    pickupLatitude: typebox_1.Type.Optional(typebox_1.Type.Number()),
    pickupLongitude: typebox_1.Type.Optional(typebox_1.Type.Number()),
    deliveryLatitude: typebox_1.Type.Optional(typebox_1.Type.Number()),
    deliveryLongitude: typebox_1.Type.Optional(typebox_1.Type.Number()),
    orderItem: typebox_1.Type.Optional(typebox_1.Type.Array(orderItemSchema)),
    tips: typebox_1.Type.Optional(typebox_1.Type.Number()),
    tax: typebox_1.Type.Optional(typebox_1.Type.Number()),
    discountAmount: typebox_1.Type.Optional(typebox_1.Type.Number()),
    deliveryFee: typebox_1.Type.Optional(typebox_1.Type.Number()),
    totalOrderCost: typebox_1.Type.Optional(typebox_1.Type.Number()),
    deliveryInstruction: typebox_1.Type.Optional(typebox_1.Type.String()),
    assignedCarrierId: typebox_1.Type.Optional(typebox_1.Type.String({ format: 'int32' })),
    assignedCarrier: typebox_1.Type.Optional(assignedCarrierSchema)
}, {
    $id: 'ShipdayData'
});
exports.shipdayDataValidator = (0, typebox_1.getValidator)(exports.shipdayDataSchema, validators_1.dataValidator);
exports.shipdayDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.shipdayPatchSchema = typebox_1.Type.Intersect([
    typebox_1.Type.Object({
        orderId: typebox_1.Type.Number()
    }),
    exports.shipdayDataSchema
], {
    $id: 'ShipdayPatch'
});
exports.shipdayPatchValidator = (0, typebox_1.getValidator)(exports.shipdayPatchSchema, validators_1.dataValidator);
exports.shipdayPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.shipdayQueryProperties = typebox_1.Type.Pick(exports.shipdaySchema, []);
exports.shipdayQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.shipdayQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.shipdayQueryValidator = (0, typebox_1.getValidator)(exports.shipdayQuerySchema, validators_1.queryValidator);
exports.shipdayQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=shipday.schema.js.map