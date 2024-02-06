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
exports.shipday = void 0;
const schema_1 = require("@feathersjs/schema");
const shipday_schema_1 = require("./shipday.schema");
const shipday_class_1 = require("./shipday.class");
const shipday_shared_1 = require("./shipday.shared");
__exportStar(require("./shipday.class"), exports);
__exportStar(require("./shipday.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const shipday = (app) => {
    // Register our service on the Feathers application
    app.use(shipday_shared_1.shipdayPath, new shipday_class_1.ShipdayService((0, shipday_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: shipday_shared_1.shipdayMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(shipday_shared_1.shipdayPath).hooks({
        around: {
            all: [schema_1.hooks.resolveExternal(shipday_schema_1.shipdayExternalResolver), schema_1.hooks.resolveResult(shipday_schema_1.shipdayResolver)]
        },
        before: {
            all: [schema_1.hooks.validateQuery(shipday_schema_1.shipdayQueryValidator), schema_1.hooks.resolveQuery(shipday_schema_1.shipdayQueryResolver)],
            find: [],
            get: [],
            create: [schema_1.hooks.validateData(shipday_schema_1.shipdayDataValidator), schema_1.hooks.resolveData(shipday_schema_1.shipdayDataResolver)],
            patch: [schema_1.hooks.validateData(shipday_schema_1.shipdayPatchValidator), schema_1.hooks.resolveData(shipday_schema_1.shipdayPatchResolver)]
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.shipday = shipday;
//# sourceMappingURL=shipday.js.map