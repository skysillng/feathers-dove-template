"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const transaction_1 = require("./transaction/transaction");
const shipday_1 = require("./shipday/shipday");
const invoice_item_1 = require("./invoice-item/invoice-item");
const invoice_1 = require("./invoice/invoice");
const flutterwave_1 = require("./flutterwave/flutterwave");
const location_1 = require("./location/location");
const business_1 = require("./business/business");
const category_1 = require("./category/category");
const shipment_1 = require("./shipment/shipment");
const twilio_1 = require("./twilio/twilio");
const user_1 = require("./user/user");
const services = (app) => {
    app.configure(transaction_1.transaction);
    app.configure(shipday_1.shipday);
    app.configure(invoice_item_1.invoiceItem);
    app.configure(invoice_1.invoice);
    app.configure(flutterwave_1.flutterwave);
    app.configure(location_1.location);
    app.configure(business_1.business);
    app.configure(category_1.category);
    app.configure(shipment_1.shipment);
    app.configure(twilio_1.twilio);
    app.configure(user_1.user);
    // All services will be registered here
};
exports.services = services;
//# sourceMappingURL=index.js.map