"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = exports.ShipmentItemSize = exports.BusinessSize = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
const feathers_1 = require("@feathersjs/feathers");
const authentication_client_1 = __importDefault(require("@feathersjs/authentication-client"));
const transaction_shared_1 = require("./services/transaction/transaction.shared");
const shipday_shared_1 = require("./services/shipday/shipday.shared");
const invoice_item_shared_1 = require("./services/invoice-item/invoice-item.shared");
const invoice_shared_1 = require("./services/invoice/invoice.shared");
const flutterwave_shared_1 = require("./services/flutterwave/flutterwave.shared");
const location_shared_1 = require("./services/location/location.shared");
const business_shared_1 = require("./services/business/business.shared");
Object.defineProperty(exports, "BusinessSize", { enumerable: true, get: function () { return business_shared_1.BusinessSize; } });
const category_shared_1 = require("./services/category/category.shared");
const shipment_shared_1 = require("./services/shipment/shipment.shared");
Object.defineProperty(exports, "ShipmentItemSize", { enumerable: true, get: function () { return shipment_shared_1.ShipmentItemSize; } });
const twilio_shared_1 = require("./services/twilio/twilio.shared");
const user_shared_1 = require("./services/user/user.shared");
/**
 * Returns a typed client for the core-api app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
const createClient = (connection, authenticationOptions = {}) => {
    const client = (0, feathers_1.feathers)();
    client.configure(connection);
    client.configure((0, authentication_client_1.default)(authenticationOptions));
    client.set('connection', connection);
    client.configure(user_shared_1.userClient);
    client.configure(twilio_shared_1.twilioClient);
    client.configure(shipment_shared_1.shipmentClient);
    client.configure(category_shared_1.categoryClient);
    client.configure(business_shared_1.businessClient);
    client.configure(location_shared_1.locationClient);
    client.configure(flutterwave_shared_1.flutterwaveClient);
    client.configure(invoice_shared_1.invoiceClient);
    client.configure(invoice_item_shared_1.invoiceItemClient);
    client.configure(shipday_shared_1.shipdayClient);
    client.configure(transaction_shared_1.transactionClient);
    return client;
};
exports.createClient = createClient;
//# sourceMappingURL=client.js.map