"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const test = async (context, next) => {
    console.log(`Running hook test on ${context.path}.${context.method}`);
    console.log('before \n ' + JSON.stringify(context.data, null, 2));
    await next();
    console.log('after\n ' + JSON.stringify(context.result, null, 2));
};
exports.test = test;
//# sourceMappingURL=test.js.map