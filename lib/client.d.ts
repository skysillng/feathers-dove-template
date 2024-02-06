import type { TransportConnection, Application } from '@feathersjs/feathers';
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client';
import './services/transaction/transaction.shared';
export type { Transaction, TransactionData, TransactionQuery, TransactionPatch } from './services/transaction/transaction.shared';
import './services/shipday/shipday.shared';
export type { Shipday, ShipdayData, ShipdayQuery, ShipdayPatch } from './services/shipday/shipday.shared';
import './services/invoice-item/invoice-item.shared';
export type { InvoiceItem, InvoiceItemData, InvoiceItemQuery, InvoiceItemPatch } from './services/invoice-item/invoice-item.shared';
import './services/invoice/invoice.shared';
export type { Invoice, InvoiceData, InvoiceQuery, InvoicePatch } from './services/invoice/invoice.shared';
import './services/flutterwave/flutterwave.shared';
export type { FlutterwavePaymentLink, FlutterwaveQuery, FlutterwaveVerify } from './services/flutterwave/flutterwave.shared';
import './services/location/location.shared';
export type { Location, LocationData, LocationQuery, LocationPatch } from './services/location/location.shared';
import { BusinessSize } from './services/business/business.shared';
export type { Business, BusinessData, BusinessQuery, BusinessPatch } from './services/business/business.shared';
export { BusinessSize };
import './services/category/category.shared';
export type { Category, CategoryData, CategoryQuery, CategoryPatch } from './services/category/category.shared';
import { ShipmentItemSize } from './services/shipment/shipment.shared';
export type { Shipment, ShipmentData, ShipmentQuery, ShipmentPatch } from './services/shipment/shipment.shared';
export { ShipmentItemSize };
import './services/twilio/twilio.shared';
export type { Twilio, TwilioData, TwilioQuery, TwilioVerify } from './services/twilio/twilio.shared';
import './services/user/user.shared';
export type { User, UserData, UserQuery, UserPatch } from './services/user/user.shared';
export interface Configuration {
    connection: TransportConnection<ServiceTypes>;
}
export interface ServiceTypes {
}
export type ClientApplication = Application<ServiceTypes, Configuration>;
/**
 * Returns a typed client for the core-api app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export declare const createClient: <Configuration_1 = any>(connection: TransportConnection<ServiceTypes>, authenticationOptions?: Partial<AuthenticationClientOptions>) => ClientApplication;
