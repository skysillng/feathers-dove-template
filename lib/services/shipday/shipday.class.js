"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.ShipdayService = void 0;
const axios_1 = __importDefault(require("axios"));
const shipday_ts_1 = __importDefault(require("shipday-ts"));
// This is a skeleton for a custom service class. Remove or add the methods you need here
class ShipdayService {
    constructor(options) {
        this.options = options;
        this.apiKey = options.app.get('shipday')?.apiKey ?? '';
        this.shipdayClient = new shipday_ts_1.default(this.apiKey, 10000);
    }
    async find(_params) {
        return await this.shipdayClient.orderService.getOrders();
    }
    async get(id, _params) {
        const orders = await this.shipdayClient.orderService.getOrderDetails(`${id}`);
        return orders && orders.length == 1 ? orders[0] : orders;
    }
    async create(data, params) {
        if (Array.isArray(data)) {
            return Promise.all(data.map((current) => this.create(current, params)));
        }
        return await this.shipdayClient.orderService.insertOrder(data);
    }
    async patch(id, data, params) {
        const options = {
            method: 'POST',
            //url: `${this.url}/edit/${id}`,
            headers: {
                accept: 'application/json',
                Authorization: `Basic ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            data
        };
        const res = await axios_1.default.request(options);
        if (res.status == 200 && res.data.success == true) {
            return (data.orderNumber = res.data.orderId);
        }
        return res.data;
    }
    async verify(data, _params) {
        return this.get(data, _params);
    }
}
exports.ShipdayService = ShipdayService;
const getOptions = (app) => {
    return { app };
};
exports.getOptions = getOptions;
//# sourceMappingURL=shipday.class.js.map