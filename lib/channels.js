"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channels = void 0;
require("@feathersjs/transport-commons");
const feathers_casl_1 = require("feathers-casl");
const channels = (app) => {
    //logger.warn(
    //  'Publishing all events to all authenticated users. See `channels.ts` and https://dove.feathersjs.com/api/channels.html for more information.'
    //)
    app.on('connection', (connection) => {
        // On a new real-time connection, add it to the anonymous channel
        app.channel('anonymous').join(connection);
    });
    app.on('login', (authResult, { connection }) => {
        // connection can be undefined if there is no
        // real-time connection, e.g. when logging in via REST
        if (connection) {
            // CASL
            // This is needed to map the ability from the authentication hook to the connection so it gets available in the HookContext as `params.ability` automatically
            if (authResult.ability) {
                connection.ability = authResult.ability;
                connection.rules = authResult.rules;
            }
            // The connection is no longer anonymous, remove it
            app.channel('anonymous').leave(connection);
            // Add it to the authenticated user channel
            app.channel('authenticated').join(connection);
        }
    });
    const caslOptions = (0, feathers_casl_1.makeChannelOptions)(app);
    // eslint-disable-next-line no-unused-vars
    app.publish((data, context) => {
        // Here you can add event publishers to channels set up in `channels.js`
        // To publish only for a specific event use `app.publish(eventname, () => {})`
        // e.g. to publish all service events to all authenticated users use
        // return app.channel('authenticated')
        // Return only channels the user actually have read access to
        return (0, feathers_casl_1.getChannelsWithReadAbility)(app, data, context, caslOptions);
    });
};
exports.channels = channels;
//# sourceMappingURL=channels.js.map