// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  invoiceDataValidator,
  invoicePatchValidator,
  invoiceQueryValidator,
  invoiceResolver,
  invoiceExternalResolver,
  invoiceDataResolver,
  invoicePatchResolver,
  invoiceQueryResolver
} from './invoice.schema'

import type { Application } from '../../declarations'
import { InvoiceService, getOptions } from './invoice.class'
import { invoicePath, invoiceMethods } from './invoice.shared'

export * from './invoice.class'
export * from './invoice.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const invoice = (app: Application) => {
  // Register our service on the Feathers application
  app.use(invoicePath, new InvoiceService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: invoiceMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(invoicePath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(invoiceExternalResolver), schemaHooks.resolveResult(invoiceResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(invoiceQueryValidator), schemaHooks.resolveQuery(invoiceQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(invoiceDataValidator), schemaHooks.resolveData(invoiceDataResolver)],
      patch: [schemaHooks.validateData(invoicePatchValidator), schemaHooks.resolveData(invoicePatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [invoicePath]: InvoiceService
  }
}
