"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipdayClient = exports.shipdayMethods = exports.shipdayPath = void 0;
exports.shipdayPath = 'shipday';
exports.shipdayMethods = ['find', 'get', 'create', 'patch'];
const shipdayClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.shipdayPath, connection.service(exports.shipdayPath), {
        methods: exports.shipdayMethods
    });
};
exports.shipdayClient = shipdayClient;
//# sourceMappingURL=shipday.shared.js.map