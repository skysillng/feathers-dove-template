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
exports.business = void 0;
const schema_1 = require("@feathersjs/schema");
const business_schema_1 = require("./business.schema");
const business_class_1 = require("./business.class");
const business_shared_1 = require("./business.shared");
const test_1 = require("../../hooks/test");
const before_create_business_1 = require("../../hooks/before-create-business");
const knex_1 = require("@feathersjs/knex");
__exportStar(require("./business.class"), exports);
__exportStar(require("./business.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const business = (app) => {
    // Register our service on the Feathers application
    app.use(business_shared_1.businessPath, new business_class_1.BusinessService((0, business_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: business_shared_1.businessMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(business_shared_1.businessPath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(business_schema_1.businessExternalResolver),
                schema_1.hooks.resolveResult(business_schema_1.businessResolver),
                test_1.test
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(business_schema_1.businessQueryValidator),
                schema_1.hooks.resolveQuery(business_schema_1.businessQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(business_schema_1.businessIncomingDataValidator),
                knex_1.transaction.start(),
                before_create_business_1.beforeCreateBusiness,
                schema_1.hooks.validateData(business_schema_1.businessDataValidator),
                schema_1.hooks.resolveData(business_schema_1.businessDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(business_schema_1.businessPatchValidator),
                schema_1.hooks.resolveData(business_schema_1.businessPatchResolver)
            ],
            remove: []
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
exports.business = business;
//# sourceMappingURL=business.js.map