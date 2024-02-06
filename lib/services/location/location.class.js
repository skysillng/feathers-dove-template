"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.LocationService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class LocationService extends knex_1.KnexService {
}
exports.LocationService = LocationService;
const getOptions = (app) => {
    return {
        id: 'id',
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'location'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=location.class.js.map