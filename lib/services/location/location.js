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
exports.location = void 0;
const schema_1 = require("@feathersjs/schema");
const location_schema_1 = require("./location.schema");
const location_class_1 = require("./location.class");
const location_shared_1 = require("./location.shared");
__exportStar(require("./location.class"), exports);
__exportStar(require("./location.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const location = (app) => {
    // Register our service on the Feathers application
    app.use(location_shared_1.locationPath, new location_class_1.LocationService((0, location_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: location_shared_1.locationMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(location_shared_1.locationPath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(location_schema_1.locationExternalResolver),
                schema_1.hooks.resolveResult(location_schema_1.locationResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(location_schema_1.locationQueryValidator),
                schema_1.hooks.resolveQuery(location_schema_1.locationQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(location_schema_1.locationDataValidator),
                schema_1.hooks.resolveData(location_schema_1.locationDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(location_schema_1.locationPatchValidator),
                schema_1.hooks.resolveData(location_schema_1.locationPatchResolver)
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
exports.location = location;
//# sourceMappingURL=location.js.map