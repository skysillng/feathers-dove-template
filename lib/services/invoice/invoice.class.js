"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.InvoiceService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class InvoiceService extends knex_1.KnexService {
}
exports.InvoiceService = InvoiceService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'invoice'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=invoice.class.js.map