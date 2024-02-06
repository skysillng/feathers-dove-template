"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeHook = exports.defineAbilitiesFor = void 0;
// src/services/authentication/authentication.abilities.ts
const ability_1 = require("@casl/ability");
const feathers_casl_1 = require("feathers-casl");
// don't forget this, as `read` is used internally
const resolveAction = (0, ability_1.createAliasResolver)({
    update: 'patch', // define the same rules for update & patch
    read: ['get', 'find'], // use 'read' as a equivalent for 'get' & 'find'
    delete: 'remove' // use 'delete' or 'remove'
});
const defineAbilitiesFor = (user) => {
    // also see https://casl.js.org/v6/en/guide/define-rules
    const { can, cannot, rules, build } = new ability_1.AbilityBuilder(ability_1.createMongoAbility);
    can('create', 'user');
    /** Business */
    can('create', 'business');
    can('estimate', 'shipment');
    /** Flutterwave */
    can('create', 'flutterwave');
    /** Shipday */
    can(['read'], 'shipday');
    /** Category */
    can('read', 'category');
    if (user) {
        /** Users */
        //if (user.role && user.role.name === 'SuperAdmin') {
        //  // SuperAdmin can do evil
        //  can('manage', 'all')
        //  return rules
        //}
        //if (user.role && user.role.name === 'Admin') {
        //  can('create', 'user')
        //}
        can(['read', 'update'], 'user', { id: user.id });
        //cannot('update', 'user', ['roleId'], { id: user.id })
        cannot('delete', 'user', { id: user.id });
        /** Shipment */
        can('create', 'shipment');
        can(['read', 'update', 'pay', 'verifyPayment'], 'shipment', { userId: user.id });
        cannot('update', 'shipment', ['userId', 'paymentStatus', 'shipmentStatus', 'deliveryFee', 'tax', 'etaTime'], { userId: user.id });
        cannot('delete', 'shipment');
        /** Business */
        can('manage', 'business');
        /** Transactions */
        can('verify', 'transaction');
        can('read', 'transaction');
        //can('manage', 'tasks', { userId: user.id })
        //can('create-multi', 'posts', { userId: user.id })
    }
    return (0, ability_1.createMongoAbility)(rules, { resolveAction });
};
exports.defineAbilitiesFor = defineAbilitiesFor;
const authorizeHook = async (context) => {
    console.log(`Running hook authorize on ${context.path}.${context.method}`);
    // if (!context.params.ability) {
    const { user } = context.params;
    // if (user) {
    const ability = (0, exports.defineAbilitiesFor)(user);
    context.params.ability = ability;
    //context.params.rules = ability.rules
    // }
    // }
    await (0, feathers_casl_1.authorize)({ adapter: '@feathersjs/knex' })(context);
};
exports.authorizeHook = authorizeHook;
//# sourceMappingURL=authorization.js.map