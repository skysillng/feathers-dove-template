"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipmentQueryResolver = exports.shipmentQueryValidator = exports.shipmentQuerySchema = exports.shipmentQueryProperties = exports.shipmentPayResolver = exports.shipmentPayValidator = exports.shipmentPay = exports.shipmentEstimateResolver = exports.shipmentEstimateValidator = exports.shipmentEstimateSchema = exports.shipmentPatchResolver = exports.shipmentPatchValidator = exports.shipmentPatchSchema = exports.shipmentDataResolver = exports.shipmentDataValidator = exports.shipmentDataSchema = exports.shipmentExternalResolver = exports.shipmentResolver = exports.shipmentValidator = exports.shipmentSchema = exports.ShipmentStatus = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
const transaction_schema_1 = require("../transaction/transaction.schema");
const shipment_shared_1 = require("./shipment.shared");
exports.ShipmentStatus = {
    ACTIVE: 'ACTIVE',
    NOT_ASSIGNED: 'NOT_ASSIGNED',
    NOT_ACCEPTED: 'NOT_ACCEPTED',
    NOT_STARTED_YET: 'NOT_STARTED_YET',
    STARTED: 'STARTED',
    PICKED_UP: 'PICKED_UP',
    READY_TO_DELIVER: 'READY_TO_DELIVER',
    ALREADY_DELIVERED: 'ALREADY_DELIVERED',
    FAILED_DELIVERY: 'FAILED_DELIVERY',
    INCOMPLETE: 'INCOMPLETE'
};
const geopointSchema = typebox_1.Type.Object({
    lat: typebox_1.Type.Number(),
    lng: typebox_1.Type.Number()
});
const locationSchema = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    phone: typebox_1.Type.String(),
    email: typebox_1.Type.Optional(typebox_1.Type.String()),
    address: typebox_1.Type.String(),
    city: typebox_1.Type.String(),
    state: typebox_1.Type.String(),
    postalCode: typebox_1.Type.String(),
    geopoint: geopointSchema
});
const carrierId = typebox_1.Type.String();
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
// Main data model schema
exports.shipmentSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String({ maxLength: 16 }),
    userId: typebox_1.Type.String({ maxLength: 16 }),
    status: typebox_1.Type.Optional((0, typebox_1.StringEnum)(Object.values(exports.ShipmentStatus))),
    pickup: typebox_1.Type.Object({
        ...locationSchema.properties,
        date: typebox_1.Type.String(),
        instruction: typebox_1.Type.String()
    }),
    delivery: locationSchema,
    category: typebox_1.Type.String(),
    other: typebox_1.Type.Optional(typebox_1.Type.String()),
    size: (0, typebox_1.StringEnum)(Object.values(shipment_shared_1.ShipmentItemSize)),
    items: typebox_1.Type.Optional(typebox_1.Type.Array(typebox_1.Type.Object({
        detail: typebox_1.Type.String(),
        quantity: typebox_1.Type.Union([typebox_1.Type.String({ format: 'int32' }), typebox_1.Type.Integer()])
    }))),
    etaTime: typebox_1.Type.String({ format: 'time' }),
    deliveryFee: typebox_1.Type.Union([typebox_1.Type.String({ format: 'double' }), typebox_1.Type.Number()]),
    tax: typebox_1.Type.Union([typebox_1.Type.String({ format: 'double' }), typebox_1.Type.Number()]),
    tip: typebox_1.Type.Union([typebox_1.Type.String({ format: 'double' }), typebox_1.Type.Number()]),
    total: typebox_1.Type.String(),
    createdAt: typebox_1.Type.String({ format: 'date-time' }),
    updatedAt: typebox_1.Type.String({ format: 'date-time' }),
    transactionId: typebox_1.Type.Optional(typebox_1.Type.String()),
    transaction: typebox_1.Type.Optional(typebox_1.Type.Object({ ...transaction_schema_1.transactionSchema.properties })),
    carrierId: typebox_1.Type.Optional(carrierId),
    carrier: typebox_1.Type.Optional(assignedCarrierSchema)
}, { $id: 'Shipment', additionalProperties: false });
exports.shipmentValidator = (0, typebox_1.getValidator)(exports.shipmentSchema, validators_1.dataValidator);
exports.shipmentResolver = (0, schema_1.resolve)({
    pickup: async (value) => (typeof value === 'string' ? JSON.parse(value) : value),
    delivery: async (value) => (typeof value === 'string' ? JSON.parse(value) : value),
    total: (0, schema_1.virtual)(async (shipment, context) => (shipment.deliveryFee + shipment.tax + shipment.tip).toString()),
    transaction: (0, schema_1.virtual)(async (shipment, context) => {
        return shipment.transactionId
            ? context.app.service('transaction')._get(shipment.transactionId)
            : undefined;
    })
});
exports.shipmentExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.shipmentDataSchema = typebox_1.Type.Pick(exports.shipmentSchema, ['pickup', 'delivery', 'category', 'other', 'items', 'size', 'tip'], {
    $id: 'ShipmentData'
});
exports.shipmentDataValidator = (0, typebox_1.getValidator)(exports.shipmentDataSchema, validators_1.dataValidator);
exports.shipmentDataResolver = (0, schema_1.resolve)({
    id: async () => {
        const { customAlphabet } = require('nanoid');
        const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const nanoid = customAlphabet(alphabet, 10);
        return 'TS_' + nanoid();
    },
    userId: async (value, shipment, context) => {
        if (!value && context.params.user)
            return context.params.user.id;
        return value;
    }
});
// Schema for updating existing entries
exports.shipmentPatchSchema = typebox_1.Type.Partial(typebox_1.Type.Omit(exports.shipmentSchema, ['id', 'items']), {
    $id: 'ShipmentPatch'
});
exports.shipmentPatchValidator = (0, typebox_1.getValidator)(exports.shipmentPatchSchema, validators_1.dataValidator);
exports.shipmentPatchResolver = (0, schema_1.resolve)({});
// Schema for estimating shipment distance and price
exports.shipmentEstimateSchema = typebox_1.Type.Object({
    origin: geopointSchema,
    destination: geopointSchema,
    size: typebox_1.Type.String(),
    orderCount: typebox_1.Type.Optional(typebox_1.Type.Number()),
    userId: typebox_1.Type.Optional(typebox_1.Type.String())
}, { $id: 'ShipmentEstimate', additionalProperties: false });
exports.shipmentEstimateValidator = (0, typebox_1.getValidator)(exports.shipmentEstimateSchema, validators_1.dataValidator);
exports.shipmentEstimateResolver = (0, schema_1.resolve)({
    userId: async (value, shipment, context) => {
        if (!value && context.params.user)
            return context.params.user.id;
        return value;
    }
});
// Schema initiating shipment payment
exports.shipmentPay = typebox_1.Type.Object({ shipmentId: typebox_1.Type.String(), redirect_url: typebox_1.Type.String() }, { $id: 'ShipmentPay', additionalProperties: false });
exports.shipmentPayValidator = (0, typebox_1.getValidator)(exports.shipmentPay, validators_1.dataValidator);
exports.shipmentPayResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.shipmentQueryProperties = typebox_1.Type.Omit(exports.shipmentSchema, []);
exports.shipmentQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.shipmentQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({})
], { additionalProperties: false });
exports.shipmentQueryValidator = (0, typebox_1.getValidator)(exports.shipmentQuerySchema, validators_1.queryValidator);
exports.shipmentQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=shipment.schema.js.map