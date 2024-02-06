"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceItemQueryResolver = exports.invoiceItemQueryValidator = exports.invoiceItemQuerySchema = exports.invoiceItemQueryProperties = exports.invoiceItemPatchResolver = exports.invoiceItemPatchValidator = exports.invoiceItemPatchSchema = exports.invoiceItemDataResolver = exports.invoiceItemDataValidator = exports.invoiceItemDataSchema = exports.invoiceItemExternalResolver = exports.invoiceItemResolver = exports.invoiceItemValidator = exports.invoiceItemSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.invoiceItemSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String()
}, { $id: 'InvoiceItem', additionalProperties: false });
exports.invoiceItemValidator = (0, typebox_1.getValidator)(exports.invoiceItemSchema, validators_1.dataValidator);
exports.invoiceItemResolver = (0, schema_1.resolve)({});
exports.invoiceItemExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.invoiceItemDataSchema = typebox_1.Type.Pick(exports.invoiceItemSchema, ['text'], {
    $id: 'InvoiceItemData'
});
exports.invoiceItemDataValidator = (0, typebox_1.getValidator)(exports.invoiceItemDataSchema, validators_1.dataValidator);
exports.invoiceItemDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.invoiceItemPatchSchema = typebox_1.Type.Partial(exports.invoiceItemSchema, {
    $id: 'InvoiceItemPatch'
});
exports.invoiceItemPatchValidator = (0, typebox_1.getValidator)(exports.invoiceItemPatchSchema, validators_1.dataValidator);
exports.invoiceItemPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.invoiceItemQueryProperties = typebox_1.Type.Pick(exports.invoiceItemSchema, ['id', 'text']);
exports.invoiceItemQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.invoiceItemQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.invoiceItemQueryValidator = (0, typebox_1.getValidator)(exports.invoiceItemQuerySchema, validators_1.queryValidator);
exports.invoiceItemQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=invoice-item.schema.js.map