"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beforeCreateBusiness = void 0;
const beforeCreateBusiness = async (context) => {
    console.log(`Running hook before create business on ${context.path}.${context.method}`);
    const data = context.data;
    const { firstname, lastname, mobile, email, password, passphrase, ...businessData } = data;
    const user = await context.app
        .service('user')
        .create({ firstname, lastname, mobile, email, password, passphrase }, { transaction: context.params.transaction });
    context.data = { ...businessData, ownerId: user.id };
};
exports.beforeCreateBusiness = beforeCreateBusiness;
//# sourceMappingURL=before-create-business.js.map