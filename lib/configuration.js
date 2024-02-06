"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurationValidator = exports.configurationSchema = void 0;
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("./validators");
exports.configurationSchema = typebox_1.Type.Intersect([
    typebox_1.defaultAppConfiguration,
    typebox_1.Type.Object({
        host: typebox_1.Type.String(),
        port: typebox_1.Type.Number(),
        public: typebox_1.Type.String(),
        //defaultLocation: Type.String(),
        fee: typebox_1.Type.Object({
            flat: typebox_1.Type.Number(),
            '5km': typebox_1.Type.Number(),
            '10km': typebox_1.Type.Number(),
            '15km': typebox_1.Type.Number(),
            small: typebox_1.Type.Number(),
            medium: typebox_1.Type.Number(),
            large: typebox_1.Type.Number(),
            x_large: typebox_1.Type.Number(),
            xx_large: typebox_1.Type.Number(),
            huge: typebox_1.Type.Number(),
            overweight: typebox_1.Type.Number(),
            '5': typebox_1.Type.Number(),
            '11': typebox_1.Type.Number(),
            '16': typebox_1.Type.Number(),
            '21': typebox_1.Type.Number(),
            '26': typebox_1.Type.Number()
        }),
        google: typebox_1.Type.Optional(typebox_1.Type.Object({
            mapApikey: typebox_1.Type.String(),
            routeUrl: typebox_1.Type.String(),
            routeKey: typebox_1.Type.String()
        })),
        shipday: typebox_1.Type.Optional(typebox_1.Type.Object({
            apiKey: typebox_1.Type.String()
        })),
        twilio: typebox_1.Type.Optional(typebox_1.Type.Object({
            accountSID: typebox_1.Type.String(),
            authToken: typebox_1.Type.String(),
            serviceSID: typebox_1.Type.String()
        })),
        flutterwave: typebox_1.Type.Optional(typebox_1.Type.Object({
            baseUrl: typebox_1.Type.String(),
            publicKey: typebox_1.Type.Optional(typebox_1.Type.String()),
            secretKey: typebox_1.Type.Optional(typebox_1.Type.String()),
            secretHash: typebox_1.Type.Optional(typebox_1.Type.String())
        }))
    })
]);
exports.configurationValidator = (0, typebox_1.getValidator)(exports.configurationSchema, validators_1.dataValidator);
//# sourceMappingURL=configuration.js.map