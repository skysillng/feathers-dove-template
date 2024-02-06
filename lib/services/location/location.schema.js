"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationQueryResolver = exports.locationQueryValidator = exports.locationQuerySchema = exports.locationQueryProperties = exports.locationPatchResolver = exports.locationPatchValidator = exports.locationPatchSchema = exports.locationDataResolver = exports.locationDataValidator = exports.locationDataSchema = exports.locationExternalResolver = exports.locationResolver = exports.locationValidator = exports.locationSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.locationSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    origin: typebox_1.Type.String(),
    destination: typebox_1.Type.String(),
    distance: typebox_1.Type.Number(),
    etaTime: typebox_1.Type.String()
}, { $id: 'Location', additionalProperties: false });
exports.locationValidator = (0, typebox_1.getValidator)(exports.locationSchema, validators_1.dataValidator);
exports.locationResolver = (0, schema_1.resolve)({});
exports.locationExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.locationDataSchema = typebox_1.Type.Omit(exports.locationSchema, ['id'], {
    $id: 'LocationData'
});
exports.locationDataValidator = (0, typebox_1.getValidator)(exports.locationDataSchema, validators_1.dataValidator);
exports.locationDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.locationPatchSchema = typebox_1.Type.Partial(exports.locationSchema, {
    $id: 'LocationPatch'
});
exports.locationPatchValidator = (0, typebox_1.getValidator)(exports.locationPatchSchema, validators_1.dataValidator);
exports.locationPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.locationQueryProperties = typebox_1.Type.Omit(exports.locationSchema, ['id']);
exports.locationQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.locationQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.locationQueryValidator = (0, typebox_1.getValidator)(exports.locationQuerySchema, validators_1.queryValidator);
exports.locationQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=location.schema.js.map