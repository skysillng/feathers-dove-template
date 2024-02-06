"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.FlutterwaveService = void 0;
const axios_1 = __importDefault(require("axios"));
// This is a skeleton for a custom service class. Remove or add the methods you need here
class FlutterwaveService {
    constructor(options) {
        this.options = options;
        this.baseUrl = this.options.app.get('flutterwave')?.baseUrl ?? '';
        this.secretKey = this.options.app.get('flutterwave')?.secretKey ?? '';
    }
    async create(data, _params) {
        return;
    }
    async initPayment(data, params) {
        try {
            console.log(data);
            const headers = {
                Authorization: `Bearer ${this.secretKey}`
            };
            const response = await axios_1.default.post(`${this.baseUrl}/v3/payments`, data, {
                headers
            });
            // console.info(response)
            if (response.statusText === 'OK')
                return response.data;
            else
                return response.data.message;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.log('error message: ', error.message);
                // 👇️ error: AxiosError<any, any>
                return error.response?.data;
            }
            throw error;
        }
    }
    async verify(data, _params) {
        try {
            const headers = { Authorization: `Bearer ${this.secretKey}` };
            const response = await axios_1.default.get(`${this.baseUrl}/v3/transactions/verify_by_reference?tx_ref=${data.tx_ref}`, { headers });
            return response;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.log('error message: ', error.message);
                // 👇️ error: AxiosError<any, any>
                return error.response?.data;
            }
        }
    }
}
exports.FlutterwaveService = FlutterwaveService;
const getOptions = (app) => {
    return { app };
};
exports.getOptions = getOptions;
//# sourceMappingURL=flutterwave.class.js.map