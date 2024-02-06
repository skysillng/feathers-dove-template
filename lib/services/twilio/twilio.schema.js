"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twilioQueryResolver = exports.twilioQueryValidator = exports.twilioQuerySchema = exports.twilioQueryProperties = exports.twilioVerifyResolver = exports.twilioVerifyValidator = exports.twilioVerifySchema = exports.twilioMessageResolver = exports.twilioMessageValidator = exports.twilioMessageSchema = exports.twilioDataResolver = exports.twilioDataValidator = exports.twilioDataSchema = exports.twilioExternalResolver = exports.twilioResolver = exports.twilioValidator = exports.twilioSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.twilioSchema = typebox_1.Type.Object({
    mobile: typebox_1.Type.String()
}, { $id: 'Twilio', additionalProperties: false });
exports.twilioValidator = (0, typebox_1.getValidator)(exports.twilioSchema, validators_1.dataValidator);
exports.twilioResolver = (0, schema_1.resolve)({});
exports.twilioExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.twilioDataSchema = typebox_1.Type.Intersect([exports.twilioSchema, typebox_1.Type.Object({ channel: typebox_1.Type.String() }, { additionalProperties: false })], { $id: 'TwilioData' });
exports.twilioDataValidator = (0, typebox_1.getValidator)(exports.twilioDataSchema, validators_1.dataValidator);
exports.twilioDataResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.twilioMessageSchema = typebox_1.Type.Intersect([
    exports.twilioDataSchema,
    typebox_1.Type.Object({
        message: typebox_1.Type.String()
    }, { additionalProperties: false })
], { $id: 'TwilioMessage' });
exports.twilioMessageValidator = (0, typebox_1.getValidator)(exports.twilioMessageSchema, validators_1.dataValidator);
exports.twilioMessageResolver = (0, schema_1.resolve)({});
// Schema for verifying user phone
exports.twilioVerifySchema = typebox_1.Type.Intersect([
    exports.twilioSchema,
    typebox_1.Type.Object({
        otp: typebox_1.Type.String()
    }, { additionalProperties: false })
], { $id: 'TwilioVerify' });
exports.twilioVerifyValidator = (0, typebox_1.getValidator)(exports.twilioVerifySchema, validators_1.dataValidator);
exports.twilioVerifyResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.twilioQueryProperties = typebox_1.Type.Pick(exports.twilioSchema, ['mobile']);
exports.twilioQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.twilioQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.twilioQueryValidator = (0, typebox_1.getValidator)(exports.twilioQuerySchema, validators_1.queryValidator);
exports.twilioQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=twilio.schema.js.map