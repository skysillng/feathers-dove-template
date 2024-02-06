"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.InvoiceItemService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class InvoiceItemService extends knex_1.KnexService {
}
exports.InvoiceItemService = InvoiceItemService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'invoice-item'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=invoice-item.class.js.map