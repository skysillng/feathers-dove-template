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
exports.shipment = void 0;
const schema_1 = require("@feathersjs/schema");
const shipment_schema_1 = require("./shipment.schema");
const shipment_class_1 = require("./shipment.class");
const shipment_shared_1 = require("./shipment.shared");
const test_1 = require("../../hooks/test");
const before_create_shipment_1 = require("../../hooks/before-create-shipment");
const knex_1 = require("@feathersjs/knex");
__exportStar(require("./shipment.class"), exports);
__exportStar(require("./shipment.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const shipment = (app) => {
    // Register our service on the Feathers application
    app.use(shipment_shared_1.shipmentPath, new shipment_class_1.ShipmentService((0, shipment_class_1.getOptions)(app), app), {
        // A list of all methods this service exposes externally
        methods: shipment_shared_1.shipmentMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(shipment_shared_1.shipmentPath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(shipment_schema_1.shipmentExternalResolver),
                schema_1.hooks.resolveResult(shipment_schema_1.shipmentResolver)
            ],
            find: [test_1.test],
            create: []
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(shipment_schema_1.shipmentQueryValidator),
                schema_1.hooks.resolveQuery(shipment_schema_1.shipmentQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(shipment_schema_1.shipmentDataValidator),
                schema_1.hooks.resolveData(shipment_schema_1.shipmentDataResolver),
                knex_1.transaction.start(),
                before_create_shipment_1.beforeCreateShipment
            ],
            patch: [
                schema_1.hooks.validateData(shipment_schema_1.shipmentPatchValidator),
                schema_1.hooks.resolveData(shipment_schema_1.shipmentPatchResolver)
            ],
            remove: [],
            estimate: [
                schema_1.hooks.validateData(shipment_schema_1.shipmentEstimateValidator),
                schema_1.hooks.resolveData(shipment_schema_1.shipmentEstimateResolver)
            ],
            pay: [schema_1.hooks.validateData(shipment_schema_1.shipmentPayValidator), schema_1.hooks.resolveData(shipment_schema_1.shipmentPayResolver)]
        },
        after: {
            all: [],
            create: [knex_1.transaction.end()]
        },
        error: {
            all: [],
            create: [knex_1.transaction.rollback()]
        }
    });
};
exports.shipment = shipment;
//# sourceMappingURL=shipment.js.map