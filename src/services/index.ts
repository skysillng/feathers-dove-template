import { transaction } from './transaction/transaction'
import { shipday } from './shipday/shipday'
import { invoiceItem } from './invoice-item/invoice-item'
import { invoice } from './invoice/invoice'
import { flutterwave } from './flutterwave/flutterwave'
import { location } from './location/location'
import { business } from './business/business'
import { category } from './category/category'
import { shipment } from './shipment/shipment'
import { twilio } from './twilio/twilio'
import { user } from './user/user'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(transaction)
  app.configure(shipday)
  app.configure(invoiceItem)
  app.configure(invoice)
  app.configure(flutterwave)
  app.configure(location)
  app.configure(business)
  app.configure(category)
  app.configure(shipment)
  app.configure(twilio)
  app.configure(user)
  // All services will be registered here
}
