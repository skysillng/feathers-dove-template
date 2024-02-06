"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.TransactionService = void 0;
const knex_1 = require("@feathersjs/knex");
const axios_1 = __importDefault(require("axios"));
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class TransactionService extends knex_1.KnexService {
    constructor(app, options) {
        super(options);
        this.app = app;
    }
    async verify(data, _params) {
        try {
            var eTransaction = await this._get(data.id);
            if (eTransaction.status === data.status) {
                return eTransaction;
            }
            const response = await this.app.service('flutterwave').verify({ tx_ref: data.id, status: data.status });
            if (response.statusText === 'OK' &&
                response.data.data.status === 'successful' &&
                response.data.data.amount >= eTransaction.amount &&
                response.data.data.currency === 'NGN') {
                // Success! Confirm the customer's payment
                eTransaction = await this._patch(eTransaction.id, { status: 'successful' });
                this.app.service('transaction').emit('paymentSuccessful', eTransaction);
            }
            else {
                // Inform the customer their payment was unsuccessful
                eTransaction = await this._patch(eTransaction.id, { status: 'failed' });
                this.app.service('transaction').emit('paymentFailed', eTransaction);
            }
            return eTransaction;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.log('error message: ', error.message);
                // 👇️ error: AxiosError<any, any>
                throw error.response?.data;
            }
            throw error;
        }
    }
    async initPayment(data, _params) {
        const paymentLinkData = {
            tx_ref: data.id,
            amount: data.amount.toString(),
            currency: 'NGN',
            redirect_url: data.redirect_url,
            customer: {
                name: data.name,
                email: data.email,
                phonenumber: data.phonenumber
            },
            meta: {
                c_id: data.userId
            }
        };
        return await this.app.service('flutterwave').initPayment(paymentLinkData);
    }
}
exports.TransactionService = TransactionService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'transaction'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=transaction.class.js.map