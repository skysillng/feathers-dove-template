// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import type { TransportConnection, Application } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client'

import { transactionClient } from './services/transaction/transaction.shared'
export type {
  Transaction,
  TransactionData,
  TransactionQuery,
  TransactionPatch
} from './services/transaction/transaction.shared'

import { shipdayClient } from './services/shipday/shipday.shared'
export type { Shipday, ShipdayData, ShipdayQuery, ShipdayPatch } from './services/shipday/shipday.shared'

import { invoiceItemClient } from './services/invoice-item/invoice-item.shared'
export type {
  InvoiceItem,
  InvoiceItemData,
  InvoiceItemQuery,
  InvoiceItemPatch
} from './services/invoice-item/invoice-item.shared'

import { invoiceClient } from './services/invoice/invoice.shared'
export type { Invoice, InvoiceData, InvoiceQuery, InvoicePatch } from './services/invoice/invoice.shared'

import { flutterwaveClient } from './services/flutterwave/flutterwave.shared'
export type {
  FlutterwavePaymentLink,
  FlutterwaveQuery,
  FlutterwaveVerify
} from './services/flutterwave/flutterwave.shared'

import { locationClient } from './services/location/location.shared'
export type {
  Location,
  LocationData,
  LocationQuery,
  LocationPatch
} from './services/location/location.shared'

import { businessClient, BusinessSize } from './services/business/business.shared'
export type {
  Business,
  BusinessData,
  BusinessQuery,
  BusinessPatch
} from './services/business/business.shared'
export { BusinessSize }

import { categoryClient } from './services/category/category.shared'
export type {
  Category,
  CategoryData,
  CategoryQuery,
  CategoryPatch
} from './services/category/category.shared'

import { shipmentClient, ShipmentItemSize } from './services/shipment/shipment.shared'
export type {
  Shipment,
  ShipmentData,
  ShipmentQuery,
  ShipmentPatch
} from './services/shipment/shipment.shared'
export { ShipmentItemSize }

import { twilioClient } from './services/twilio/twilio.shared'
export type { Twilio, TwilioData, TwilioQuery, TwilioVerify } from './services/twilio/twilio.shared'

import { userClient } from './services/user/user.shared'
export type { User, UserData, UserQuery, UserPatch } from './services/user/user.shared'

export interface Configuration {
  connection: TransportConnection<ServiceTypes>
}

export interface ServiceTypes {}

export type ClientApplication = Application<ServiceTypes, Configuration>

/**
 * Returns a typed client for the core-api app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = <Configuration = any>(
  connection: TransportConnection<ServiceTypes>,
  authenticationOptions: Partial<AuthenticationClientOptions> = {}
) => {
  const client: ClientApplication = feathers()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))
  client.set('connection', connection)

  client.configure(userClient)
  client.configure(twilioClient)
  client.configure(shipmentClient)
  client.configure(categoryClient)
  client.configure(businessClient)
  client.configure(locationClient)
  client.configure(flutterwaveClient)
  client.configure(invoiceClient)
  client.configure(invoiceItemClient)
  client.configure(shipdayClient)
  client.configure(transactionClient)

  return client
}
