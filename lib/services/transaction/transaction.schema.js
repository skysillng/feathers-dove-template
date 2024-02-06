"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionQueryResolver = exports.transactionQueryValidator = exports.transactionQuerySchema = exports.transactionQueryProperties = exports.transactionVerifyResolver = exports.transactionVerifyValidator = exports.transactionVerifySchema = exports.transactionInitResolver = exports.transactionInitValidator = exports.transactionInitSchema = exports.transactionPatchResolver = exports.transactionPatchValidator = exports.transactionPatchSchema = exports.transactionDataResolver = exports.transactionDataValidator = exports.transactionDataSchema = exports.transactionExternalResolver = exports.transactionResolver = exports.transactionValidator = exports.transactionSchema = exports.TransactionState = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
const nanoid_1 = require("nanoid");
exports.TransactionState = {
    pending: 'pending',
    successful: 'successful',
    failed: 'failed'
};
// Main data model schema
exports.transactionSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    objectId: typebox_1.Type.String(),
    objectType: typebox_1.Type.String(),
    amount: typebox_1.Type.Number(),
    currency: typebox_1.Type.String(),
    status: typebox_1.Type.Optional((0, typebox_1.StringEnum)(Object.values(exports.TransactionState)))
}, { $id: 'Transaction', additionalProperties: false });
exports.transactionValidator = (0, typebox_1.getValidator)(exports.transactionSchema, validators_1.dataValidator);
exports.transactionResolver = (0, schema_1.resolve)({});
exports.transactionExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.transactionDataSchema = typebox_1.Type.Omit(exports.transactionSchema, ['id', 'status'], {
    $id: 'TransactionData'
});
exports.transactionDataValidator = (0, typebox_1.getValidator)(exports.transactionDataSchema, validators_1.dataValidator);
exports.transactionDataResolver = (0, schema_1.resolve)({
    id: async () => (0, nanoid_1.nanoid)(32),
    status: async (value) => {
        return exports.TransactionState.pending;
    }
});
// Schema for updating existing entries
exports.transactionPatchSchema = typebox_1.Type.Partial(typebox_1.Type.Pick(exports.transactionSchema, ['status']), {
    $id: 'TransactionPatch'
});
exports.transactionPatchValidator = (0, typebox_1.getValidator)(exports.transactionPatchSchema, validators_1.dataValidator);
exports.transactionPatchResolver = (0, schema_1.resolve)({});
// Schema for verifying shipment payment
exports.transactionInitSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    amount: typebox_1.Type.Number(),
    redirect_url: typebox_1.Type.String(),
    userId: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
    email: typebox_1.Type.String(),
    phonenumber: typebox_1.Type.String()
}, { $id: 'TransactionInit', additionalProperties: false });
exports.transactionInitValidator = (0, typebox_1.getValidator)(exports.transactionInitSchema, validators_1.dataValidator);
exports.transactionInitResolver = (0, schema_1.resolve)({});
// Schema for verifying shipment payment
exports.transactionVerifySchema = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
    status: typebox_1.Type.Optional((0, typebox_1.StringEnum)(Object.values(exports.TransactionState)))
}, { $id: 'TransactionVerify', additionalProperties: false });
exports.transactionVerifyValidator = (0, typebox_1.getValidator)(exports.transactionVerifySchema, validators_1.dataValidator);
exports.transactionVerifyResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.transactionQueryProperties = typebox_1.Type.Omit(exports.transactionSchema, []);
exports.transactionQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.transactionQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.transactionQueryValidator = (0, typebox_1.getValidator)(exports.transactionQuerySchema, validators_1.queryValidator);
exports.transactionQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=transaction.schema.js.map