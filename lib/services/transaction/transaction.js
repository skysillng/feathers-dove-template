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
exports.transaction = void 0;
const schema_1 = require("@feathersjs/schema");
const transaction_schema_1 = require("./transaction.schema");
const transaction_class_1 = require("./transaction.class");
const transaction_shared_1 = require("./transaction.shared");
__exportStar(require("./transaction.class"), exports);
__exportStar(require("./transaction.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const transaction = (app) => {
    // Register our service on the Feathers application
    app.use(transaction_shared_1.transactionPath, new transaction_class_1.TransactionService(app, (0, transaction_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: transaction_shared_1.transactionMethods,
        // You can add additional custom events to be sent to clients here
        events: ['paymentSuccessful', 'paymentFailed']
    });
    // Initialize hooks
    app
        .service(transaction_shared_1.transactionPath)
        .hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(transaction_schema_1.transactionExternalResolver),
                schema_1.hooks.resolveResult(transaction_schema_1.transactionResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(transaction_schema_1.transactionQueryValidator),
                schema_1.hooks.resolveQuery(transaction_schema_1.transactionQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(transaction_schema_1.transactionDataValidator),
                schema_1.hooks.resolveData(transaction_schema_1.transactionDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(transaction_schema_1.transactionPatchValidator),
                schema_1.hooks.resolveData(transaction_schema_1.transactionPatchResolver)
            ],
            remove: [],
            verify: [
                schema_1.hooks.validateData(transaction_schema_1.transactionVerifyValidator),
                schema_1.hooks.resolveData(transaction_schema_1.transactionVerifyResolver)
            ]
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    })
        .on('paymentSuccessful', async (data) => {
        if (data.objectType == 'shipment' && data.status == 'successful') {
            const shipment = await app.service('shipment').proceedWithShipment(data.objectId, data.id);
        }
    });
};
exports.transaction = transaction;
//# sourceMappingURL=transaction.js.map