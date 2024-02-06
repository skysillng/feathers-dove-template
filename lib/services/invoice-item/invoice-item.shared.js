"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceItemClient = exports.invoiceItemMethods = exports.invoiceItemPath = void 0;
exports.invoiceItemPath = 'invoice-item';
exports.invoiceItemMethods = ['find', 'get', 'create', 'patch', 'remove'];
const invoiceItemClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.invoiceItemPath, connection.service(exports.invoiceItemPath), {
        methods: exports.invoiceItemMethods
    });
};
exports.invoiceItemClient = invoiceItemClient;
//# sourceMappingURL=invoice-item.shared.js.map