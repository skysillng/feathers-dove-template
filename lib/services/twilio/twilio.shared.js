"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twilioClient = exports.twilioMethods = exports.twilioPath = void 0;
exports.twilioPath = 'twilio';
//export const twilioMethods = ['create', 'sendVerification', 'verify', 'message'] as const
exports.twilioMethods = [];
const twilioClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.twilioPath, connection.service(exports.twilioPath), {
        methods: exports.twilioMethods
    });
};
exports.twilioClient = twilioClient;
//# sourceMappingURL=twilio.shared.js.map