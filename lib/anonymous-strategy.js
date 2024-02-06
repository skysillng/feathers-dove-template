"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnonymousStrategy = void 0;
const authentication_1 = require("@feathersjs/authentication");
class AnonymousStrategy extends authentication_1.AuthenticationBaseStrategy {
    async authenticate(authentication, params) {
        return {
            anonymous: true
        };
    }
}
exports.AnonymousStrategy = AnonymousStrategy;
//# sourceMappingURL=anonymous-strategy.js.map