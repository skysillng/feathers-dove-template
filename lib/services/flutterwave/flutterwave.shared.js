"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flutterwaveClient = exports.flutterwaveMethods = exports.flutterwavePath = void 0;
exports.flutterwavePath = 'flutterwave';
exports.flutterwaveMethods = ['create'];
const flutterwaveClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.flutterwavePath, connection.service(exports.flutterwavePath), {
        methods: exports.flutterwaveMethods
    });
};
exports.flutterwaveClient = flutterwaveClient;
//# sourceMappingURL=flutterwave.shared.js.map