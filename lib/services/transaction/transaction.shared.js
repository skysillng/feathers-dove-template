"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionClient = exports.transactionMethods = exports.transactionPath = void 0;
exports.transactionPath = 'transaction';
exports.transactionMethods = ['find', 'get', 'create', 'patch', 'remove', 'verify'];
const transactionClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.transactionPath, connection.service(exports.transactionPath), {
        methods: exports.transactionMethods
    });
};
exports.transactionClient = transactionClient;
//# sourceMappingURL=transaction.shared.js.map