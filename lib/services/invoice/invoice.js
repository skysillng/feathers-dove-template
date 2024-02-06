"use strict";
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoice = void 0;
const schema_1 = require("@feathersjs/schema");
const invoice_schema_1 = require("./invoice.schema");
const invoice_class_1 = require("./invoice.class");
const invoice_shared_1 = require("./invoice.shared");
__exportStar(require("./invoice.class"), exports);
__exportStar(require("./invoice.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const invoice = (app) => {
    // Register our service on the Feathers application
    app.use(invoice_shared_1.invoicePath, new invoice_class_1.InvoiceService((0, invoice_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: invoice_shared_1.invoiceMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(invoice_shared_1.invoicePath).hooks({
        around: {
            all: [schema_1.hooks.resolveExternal(invoice_schema_1.invoiceExternalResolver), schema_1.hooks.resolveResult(invoice_schema_1.invoiceResolver)]
        },
        before: {
            all: [schema_1.hooks.validateQuery(invoice_schema_1.invoiceQueryValidator), schema_1.hooks.resolveQuery(invoice_schema_1.invoiceQueryResolver)],
            find: [],
            get: [],
            create: [schema_1.hooks.validateData(invoice_schema_1.invoiceDataValidator), schema_1.hooks.resolveData(invoice_schema_1.invoiceDataResolver)],
            patch: [schema_1.hooks.validateData(invoice_schema_1.invoicePatchValidator), schema_1.hooks.resolveData(invoice_schema_1.invoicePatchResolver)],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.invoice = invoice;
//# sourceMappingURL=invoice.js.map