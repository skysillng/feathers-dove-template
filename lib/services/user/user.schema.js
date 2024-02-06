"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userQueryResolver = exports.userQueryValidator = exports.userQuerySchema = exports.userQueryProperties = exports.userPatchResolver = exports.userPatchValidator = exports.userPatchSchema = exports.userDataResolver = exports.userDataValidator = exports.userDataSchema = exports.userExternalResolver = exports.userResolver = exports.userValidator = exports.userSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const authentication_local_1 = require("@feathersjs/authentication-local");
const validators_1 = require("../../validators");
// Main data model schema
exports.userSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String({ maxLength: 16 }),
    firstname: typebox_1.Type.String(),
    lastname: typebox_1.Type.String(),
    mobile: typebox_1.Type.String(),
    mobileVerifiedAt: typebox_1.Type.String(),
    email: typebox_1.Type.String(),
    emailVerifiedAt: typebox_1.Type.String(),
    password: typebox_1.Type.Optional(typebox_1.Type.String()),
    passphrase: typebox_1.Type.Optional(typebox_1.Type.String())
}, { $id: 'User', additionalProperties: false });
exports.userValidator = (0, typebox_1.getValidator)(exports.userSchema, validators_1.dataValidator);
exports.userResolver = (0, schema_1.resolve)({});
exports.userExternalResolver = (0, schema_1.resolve)({
    // The password should never be visible externally
    password: async () => undefined,
    passphrase: async () => undefined
});
// Schema for creating new entries
exports.userDataSchema = typebox_1.Type.Omit(exports.userSchema, ['id', 'mobileVerifiedAt', 'emailVerifiedAt'], {
    $id: 'UserData'
});
exports.userDataValidator = (0, typebox_1.getValidator)(exports.userDataSchema, validators_1.dataValidator);
exports.userDataResolver = (0, schema_1.resolve)({
    id: async () => {
        const { customAlphabet } = require('nanoid');
        const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const nanoid = customAlphabet(alphabet, 13);
        return 'TU_' + nanoid(); //=> "vIwfeHzOkIA6O"
    },
    password: (0, authentication_local_1.passwordHash)({ strategy: 'login' }),
    passphrase: (0, authentication_local_1.passwordHash)({ strategy: 'login' })
});
// Schema for updating existing entries
exports.userPatchSchema = typebox_1.Type.Partial(exports.userSchema, {
    $id: 'UserPatch'
});
exports.userPatchValidator = (0, typebox_1.getValidator)(exports.userPatchSchema, validators_1.dataValidator);
exports.userPatchResolver = (0, schema_1.resolve)({
    password: (0, authentication_local_1.passwordHash)({ strategy: 'local' }),
    passphrase: (0, authentication_local_1.passwordHash)({ strategy: 'local' })
});
// Schema for allowed query properties
exports.userQueryProperties = typebox_1.Type.Pick(exports.userSchema, ['id', 'mobile', 'email']);
exports.userQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.userQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { $id: 'UserQuery', additionalProperties: false });
exports.userQueryValidator = (0, typebox_1.getValidator)(exports.userQuerySchema, validators_1.queryValidator);
exports.userQueryResolver = (0, schema_1.resolve)({
    // This logic is no longer needed as a proper authorization is now in place using CASL via feathers-casl
    // If there is a user (e.g. with authentication), they are only allowed to see their own data
    id: async (value, user, context) => {
        if (context.params.user) {
            return context.params.user.id;
        }
        return value;
    }
});
//# sourceMappingURL=user.schema.js.map