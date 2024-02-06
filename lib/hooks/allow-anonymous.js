"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowAnonymous = void 0;
const allowAnonymous = async (context) => {
    console.log(`Running hook allowAnonymous on ${context.path}.${context.method}`);
    const { params } = context;
    if (params.provider && !params.authentication) {
        context.params = {
            ...params,
            authentication: {
                strategy: 'anonymous'
            }
        };
    }
};
exports.allowAnonymous = allowAnonymous;
//# sourceMappingURL=allow-anonymous.js.map