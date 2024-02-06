"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flutterwaveWebhook = void 0;
const errors_1 = require("@feathersjs/errors");
const flutterwaveWebhook = async (context) => {
    console.log(`Running hook flutterwave webhook on ${context.path}.${context.method}`);
    const headers = context.params.headers;
    if (headers && headers['verif-hash']) {
        // If you specified a secret hash, check for the signature
        const secretHash = context.app.get('flutterwave')?.secretHash;
        const signature = headers['verif-hash'];
        if (!context.data || !signature || signature !== secretHash) {
            // This request isn't from Flutterwave; discard
            throw new errors_1.NotAuthenticated();
        }
        // It's a good idea to log all received events.
        console.log('webhook', context.data);
        // Do something with the payload without waiting for response so we can quick send feedback to flutterwave
        context.app.service('transaction').verify({ id: context.data.txRef, status: context.data.status });
        // Flutterwave webhook expects http status = 200
        context.http = { ...(context.http && context.http), status: 200 };
        context.result = [];
    }
};
exports.flutterwaveWebhook = flutterwaveWebhook;
//# sourceMappingURL=flutterwave-webhook.js.map