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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html
const feathers_1 = require("@feathersjs/feathers");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const configuration_1 = __importDefault(require("@feathersjs/configuration"));
const koa_1 = require("@feathersjs/koa");
const socketio_1 = __importDefault(require("@feathersjs/socketio"));
const configuration_2 = require("./configuration");
const log_error_1 = require("./hooks/log-error");
const sqlite_1 = require("./sqlite");
const authentication_1 = require("./authentication");
const index_1 = require("./services/index");
const channels_1 = require("./channels");
const feathers_casl_1 = require("feathers-casl");
const authorization_1 = require("./authorization");
const feathers_hooks_common_1 = require("feathers-hooks-common");
const authentication_2 = require("@feathersjs/authentication");
const allow_anonymous_1 = require("./hooks/allow-anonymous");
const cron_schedules_1 = require("./cron-schedules");
const app = (0, koa_1.koa)((0, feathers_1.feathers)());
exports.app = app;
// Load our app configuration (see config/ folder)
app.configure((0, configuration_1.default)(configuration_2.configurationValidator));
// Set up Koa middleware
app.use((0, koa_1.cors)());
app.use((0, koa_1.serveStatic)(app.get('public')));
app.use((0, koa_1.errorHandler)());
app.use((0, koa_1.parseAuthentication)());
app.use((0, koa_1.bodyParser)());
// Configure services and transports
app.configure((0, koa_1.rest)());
app.configure((0, socketio_1.default)({
    cors: {
        origin: app.get('origins')
    }
}));
app.configure(sqlite_1.sqlite);
// app.configure(mysql)
app.configure(authentication_1.authentication);
// Provide an app wide CASL authorization
app.configure((0, feathers_casl_1.feathersCasl)());
app.configure(index_1.services);
app.configure(channels_1.channels);
// Configure Node-Cron for cron jobs
app.configure(cron_schedules_1.cronSchedules);
// Register hooks that run on all service methods
app.hooks({
    around: {
        all: [log_error_1.logError]
    },
    before: {
        all: [
            (0, feathers_hooks_common_1.iff)((context) => context.params.provider && !context.path.includes('authentication'), allow_anonymous_1.allowAnonymous, (0, authentication_2.authenticate)('jwt', 'anonymous'), authorization_1.authorizeHook)
        ]
    },
    after: {
        all: [
            (0, feathers_hooks_common_1.iff)((context) => context.params.provider && !context.path.includes('authentication'), authorization_1.authorizeHook)
        ]
    },
    error: {}
});
// Register application setup and teardown hooks here
app.hooks({
    setup: [],
    teardown: []
});
//# sourceMappingURL=app.js.map