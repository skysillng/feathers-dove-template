"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flutterwaveQueryResolver = exports.flutterwaveQueryValidator = exports.flutterwaveQuerySchema = exports.flutterwaveVerifyResolver = exports.flutterwaveVerifyValidator = exports.flutterwaveVerifySchema = exports.flutterwavePaymentLinkResolver = exports.flutterwavePaymentLinkValidator = exports.flutterwavePaymentLinkSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
const transaction_schema_1 = require("../transaction/transaction.schema");
// Schema to get payment link from flutterwave
exports.flutterwavePaymentLinkSchema = typebox_1.Type.Object({
    tx_ref: typebox_1.Type.String(),
    amount: typebox_1.Type.String(),
    currency: (0, typebox_1.StringEnum)(['NGN']),
    redirect_url: typebox_1.Type.Optional(typebox_1.Type.String()),
    meta: typebox_1.Type.Optional(typebox_1.Type.Any()),
    customer: typebox_1.Type.Object({
        name: typebox_1.Type.String(),
        email: typebox_1.Type.String(),
        phonenumber: typebox_1.Type.String()
    }),
    customizations: typebox_1.Type.Optional(typebox_1.Type.Object({
        title: typebox_1.Type.String(),
        logo: typebox_1.Type.String()
    }))
}, { $id: 'FlutterwavePaymentLink', additionalProperties: false });
exports.flutterwavePaymentLinkValidator = (0, typebox_1.getValidator)(exports.flutterwavePaymentLinkSchema, validators_1.dataValidator);
exports.flutterwavePaymentLinkResolver = (0, schema_1.resolve)({});
// Schema to verify flutterwave payment
exports.flutterwaveVerifySchema = typebox_1.Type.Object({
    tx_ref: typebox_1.Type.String(),
    status: typebox_1.Type.Optional((0, typebox_1.StringEnum)(Object.values(transaction_schema_1.TransactionState)))
}, { $id: 'FlutterwaveVerify', additionalProperties: false });
exports.flutterwaveVerifyValidator = (0, typebox_1.getValidator)(exports.flutterwaveVerifySchema, validators_1.dataValidator);
exports.flutterwaveVerifyResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.flutterwaveQuerySchema = typebox_1.Type.Object({}, { additionalProperties: false });
exports.flutterwaveQueryValidator = (0, typebox_1.getValidator)(exports.flutterwaveQuerySchema, validators_1.queryValidator);
exports.flutterwaveQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=flutterwave.schema.js.map