"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipdayWebhook = void 0;
const shipdayWebhook = async (context) => {
    console.log(`Running hook shipday webhook on ${context.path}.${context.method}`);
    const headers = context.params.headers;
    if (headers && headers['token']) {
        console.log('Shipday webhook called', context.data);
        context.result = context.service.verify(context.data, context.params);
    }
    return;
};
exports.shipdayWebhook = shipdayWebhook;
//# sourceMappingURL=shipday-webhook.js.map