"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessQueryResolver = exports.businessQueryValidator = exports.businessQuerySchema = exports.businessQueryProperties = exports.businessPatchResolver = exports.businessPatchValidator = exports.businessPatchSchema = exports.businessIncomingDataValidator = exports.businessIncomingDataSchema = exports.businessDataResolver = exports.businessDataValidator = exports.businessDataSchema = exports.businessExternalResolver = exports.businessResolver = exports.businessValidator = exports.businessSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
const business_shared_1 = require("./business.shared");
const user_schema_1 = require("../user/user.schema");
// Main data model schema
exports.businessSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String({ maxLength: 16 }),
    userId: typebox_1.Type.String({ maxLength: 16 }),
    name: typebox_1.Type.String(),
    // description: Type.String(),
    // address: Type.Any(),
    size: (0, typebox_1.StringEnum)(Object.values(business_shared_1.BusinessSize))
    // employeeSize: StringEnum(Object.values(BusinessSize))
}, { $id: 'Business', additionalProperties: false });
exports.businessValidator = (0, typebox_1.getValidator)(exports.businessSchema, validators_1.dataValidator);
exports.businessResolver = (0, schema_1.resolve)({});
exports.businessExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.businessDataSchema = typebox_1.Type.Omit(exports.businessSchema, ['id'], { $id: 'BusinessData' });
exports.businessDataValidator = (0, typebox_1.getValidator)(exports.businessDataSchema, validators_1.dataValidator);
exports.businessDataResolver = (0, schema_1.resolve)({
    id: async () => {
        const { customAlphabet } = require('nanoid');
        const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const nanoid = customAlphabet(alphabet, 10);
        return 'TB_' + nanoid(); //=> "vIwfeHzOkIA6O"
    }
});
exports.businessIncomingDataSchema = typebox_1.Type.Intersect([typebox_1.Type.Omit(exports.businessSchema, ['id', 'userId']), user_schema_1.userDataSchema], {
    $id: 'BusinessIncomingData'
});
exports.businessIncomingDataValidator = (0, typebox_1.getValidator)(exports.businessIncomingDataSchema, validators_1.dataValidator);
// Schema for updating existing entries
exports.businessPatchSchema = typebox_1.Type.Partial(exports.businessSchema, {
    $id: 'BusinessPatch'
});
exports.businessPatchValidator = (0, typebox_1.getValidator)(exports.businessPatchSchema, validators_1.dataValidator);
exports.businessPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.businessQueryProperties = typebox_1.Type.Omit(exports.businessSchema, []);
exports.businessQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.businessQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.businessQueryValidator = (0, typebox_1.getValidator)(exports.businessQuerySchema, validators_1.queryValidator);
exports.businessQueryResolver = (0, schema_1.resolve)({
    userId: async (value, business, context) => {
        if (context.params.user) {
            return context.params.user.id;
        }
        return value;
    }
});
//# sourceMappingURL=business.schema.js.map