"use strict";
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
exports.user = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const schema_1 = require("@feathersjs/schema");
const user_schema_1 = require("./user.schema");
const user_class_1 = require("./user.class");
const user_shared_1 = require("./user.shared");
const knex_1 = require("@feathersjs/knex");
__exportStar(require("./user.class"), exports);
__exportStar(require("./user.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const user = (app) => {
    // Register our service on the Feathers application
    app.use(user_shared_1.userPath, new user_class_1.UserService((0, user_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: user_shared_1.userMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(user_shared_1.userPath).hooks({
        around: {
            all: [schema_1.hooks.resolveExternal(user_schema_1.userExternalResolver), schema_1.hooks.resolveResult(user_schema_1.userResolver)],
            find: [],
            get: [],
            create: [],
            update: [],
            patch: [],
            remove: []
        },
        before: {
            all: [schema_1.hooks.validateQuery(user_schema_1.userQueryValidator), schema_1.hooks.resolveQuery(user_schema_1.userQueryResolver)],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(user_schema_1.userDataValidator),
                schema_1.hooks.resolveData(user_schema_1.userDataResolver),
                knex_1.transaction.start()
            ],
            patch: [schema_1.hooks.validateData(user_schema_1.userPatchValidator), schema_1.hooks.resolveData(user_schema_1.userPatchResolver)],
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
exports.user = user;
//# sourceMappingURL=user.js.map