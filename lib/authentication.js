"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/authentication.html
const authentication_1 = require("@feathersjs/authentication");
const authentication_local_1 = require("@feathersjs/authentication-local");
const login_strategy_1 = require("./login-strategy");
const anonymous_strategy_1 = require("./anonymous-strategy");
const authorization_1 = require("./authorization");
const authentication = (app) => {
    const authentication = new authentication_1.AuthenticationService(app);
    authentication.register('jwt', new authentication_1.JWTStrategy());
    authentication.register('local', new authentication_local_1.LocalStrategy());
    authentication.register('login', new login_strategy_1.LoginStrategy());
    authentication.register('anonymous', new anonymous_strategy_1.AnonymousStrategy());
    app.use('authentication', authentication);
    app.service('authentication').hooks({
        after: {
            create: [
                (context) => {
                    // if (!context.result.ability) {
                    const { user } = context.result;
                    // if (user) {
                    const ability = (0, authorization_1.defineAbilitiesFor)(user);
                    context.result.ability = ability;
                    context.result.rules = ability.rules;
                    // }
                    // }
                    return context;
                }
            ]
        }
    });
};
exports.authentication = authentication;
//# sourceMappingURL=authentication.js.map