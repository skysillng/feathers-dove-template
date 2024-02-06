"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessClient = exports.BusinessSize = exports.businessMethods = exports.businessPath = void 0;
exports.businessPath = 'business';
exports.businessMethods = ['find', 'get', 'create', 'patch', 'remove'];
exports.BusinessSize = {
    // micro: 'micro',
    // small: 'small',
    // medium: 'medium',
    // large: 'large',
    '0-99': '0-99',
    '100+': '100+'
};
const businessClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.businessPath, connection.service(exports.businessPath), {
        methods: exports.businessMethods
    });
};
exports.businessClient = businessClient;
//# sourceMappingURL=business.shared.js.map