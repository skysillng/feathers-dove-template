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
exports.flutterwave = void 0;
const schema_1 = require("@feathersjs/schema");
const flutterwave_schema_1 = require("./flutterwave.schema");
const flutterwave_class_1 = require("./flutterwave.class");
const flutterwave_shared_1 = require("./flutterwave.shared");
const flutterwave_webhook_1 = require("../../hooks/flutterwave-webhook");
__exportStar(require("./flutterwave.class"), exports);
__exportStar(require("./flutterwave.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const flutterwave = (app) => {
    // Register our service on the Feathers application
    app.use(flutterwave_shared_1.flutterwavePath, new flutterwave_class_1.FlutterwaveService((0, flutterwave_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: flutterwave_shared_1.flutterwaveMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(flutterwave_shared_1.flutterwavePath).hooks({
        around: {
            all: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(flutterwave_schema_1.flutterwaveQueryValidator),
                schema_1.hooks.resolveQuery(flutterwave_schema_1.flutterwaveQueryResolver)
            ],
            create: [flutterwave_webhook_1.flutterwaveWebhook],
            initPayment: [
                schema_1.hooks.validateData(flutterwave_schema_1.flutterwavePaymentLinkValidator),
                schema_1.hooks.resolveData(flutterwave_schema_1.flutterwavePaymentLinkResolver)
            ],
            verify: [
                schema_1.hooks.validateData(flutterwave_schema_1.flutterwaveVerifyValidator),
                schema_1.hooks.resolveData(flutterwave_schema_1.flutterwaveVerifyResolver)
            ]
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.flutterwave = flutterwave;
//# sourceMappingURL=flutterwave.js.map