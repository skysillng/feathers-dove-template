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
exports.category = void 0;
const schema_1 = require("@feathersjs/schema");
const category_schema_1 = require("./category.schema");
const category_class_1 = require("./category.class");
const category_shared_1 = require("./category.shared");
const test_1 = require("../../hooks/test");
__exportStar(require("./category.class"), exports);
__exportStar(require("./category.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const category = (app) => {
    // Register our service on the Feathers application
    app.use(category_shared_1.categoryPath, new category_class_1.CategoryService((0, category_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: category_shared_1.categoryMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(category_shared_1.categoryPath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(category_schema_1.categoryExternalResolver),
                schema_1.hooks.resolveResult(category_schema_1.categoryResolver),
                test_1.test
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(category_schema_1.categoryQueryValidator),
                schema_1.hooks.resolveQuery(category_schema_1.categoryQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(category_schema_1.categoryDataValidator),
                schema_1.hooks.resolveData(category_schema_1.categoryDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(category_schema_1.categoryPatchValidator),
                schema_1.hooks.resolveData(category_schema_1.categoryPatchResolver)
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
exports.category = category;
//# sourceMappingURL=category.js.map