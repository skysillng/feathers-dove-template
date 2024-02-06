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
exports.invoiceItem = void 0;
const schema_1 = require("@feathersjs/schema");
const invoice_item_schema_1 = require("./invoice-item.schema");
const invoice_item_class_1 = require("./invoice-item.class");
const invoice_item_shared_1 = require("./invoice-item.shared");
__exportStar(require("./invoice-item.class"), exports);
__exportStar(require("./invoice-item.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const invoiceItem = (app) => {
    // Register our service on the Feathers application
    app.use(invoice_item_shared_1.invoiceItemPath, new invoice_item_class_1.InvoiceItemService((0, invoice_item_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: invoice_item_shared_1.invoiceItemMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(invoice_item_shared_1.invoiceItemPath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(invoice_item_schema_1.invoiceItemExternalResolver),
                schema_1.hooks.resolveResult(invoice_item_schema_1.invoiceItemResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(invoice_item_schema_1.invoiceItemQueryValidator),
                schema_1.hooks.resolveQuery(invoice_item_schema_1.invoiceItemQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(invoice_item_schema_1.invoiceItemDataValidator),
                schema_1.hooks.resolveData(invoice_item_schema_1.invoiceItemDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(invoice_item_schema_1.invoiceItemPatchValidator),
                schema_1.hooks.resolveData(invoice_item_schema_1.invoiceItemPatchResolver)
            ],
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
exports.invoiceItem = invoiceItem;
//# sourceMappingURL=invoice-item.js.map