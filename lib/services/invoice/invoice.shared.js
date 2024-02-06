"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceClient = exports.invoiceMethods = exports.invoicePath = void 0;
exports.invoicePath = 'invoice';
exports.invoiceMethods = ['find', 'get', 'create', 'patch', 'remove'];
const invoiceClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.invoicePath, connection.service(exports.invoicePath), {
        methods: exports.invoiceMethods
    });
};
exports.invoiceClient = invoiceClient;
//# sourceMappingURL=invoice.shared.js.map