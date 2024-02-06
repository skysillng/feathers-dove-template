"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceQueryResolver = exports.invoiceQueryValidator = exports.invoiceQuerySchema = exports.invoiceQueryProperties = exports.invoicePatchResolver = exports.invoicePatchValidator = exports.invoicePatchSchema = exports.invoiceDataResolver = exports.invoiceDataValidator = exports.invoiceDataSchema = exports.invoiceExternalResolver = exports.invoiceResolver = exports.invoiceValidator = exports.invoiceSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.invoiceSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String()
}, { $id: 'Invoice', additionalProperties: false });
exports.invoiceValidator = (0, typebox_1.getValidator)(exports.invoiceSchema, validators_1.dataValidator);
exports.invoiceResolver = (0, schema_1.resolve)({});
exports.invoiceExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.invoiceDataSchema = typebox_1.Type.Pick(exports.invoiceSchema, ['text'], {
    $id: 'InvoiceData'
});
exports.invoiceDataValidator = (0, typebox_1.getValidator)(exports.invoiceDataSchema, validators_1.dataValidator);
exports.invoiceDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.invoicePatchSchema = typebox_1.Type.Partial(exports.invoiceSchema, {
    $id: 'InvoicePatch'
});
exports.invoicePatchValidator = (0, typebox_1.getValidator)(exports.invoicePatchSchema, validators_1.dataValidator);
exports.invoicePatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.invoiceQueryProperties = typebox_1.Type.Pick(exports.invoiceSchema, ['id', 'text']);
exports.invoiceQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.invoiceQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.invoiceQueryValidator = (0, typebox_1.getValidator)(exports.invoiceQuerySchema, validators_1.queryValidator);
exports.invoiceQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=invoice.schema.js.map