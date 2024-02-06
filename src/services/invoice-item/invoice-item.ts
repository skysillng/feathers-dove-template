// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  invoiceItemDataValidator,
  invoiceItemPatchValidator,
  invoiceItemQueryValidator,
  invoiceItemResolver,
  invoiceItemExternalResolver,
  invoiceItemDataResolver,
  invoiceItemPatchResolver,
  invoiceItemQueryResolver
} from './invoice-item.schema'

import type { Application } from '../../declarations'
import { InvoiceItemService, getOptions } from './invoice-item.class'
import { invoiceItemPath, invoiceItemMethods } from './invoice-item.shared'

export * from './invoice-item.class'
export * from './invoice-item.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const invoiceItem = (app: Application) => {
  // Register our service on the Feathers application
  app.use(invoiceItemPath, new InvoiceItemService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: invoiceItemMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(invoiceItemPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(invoiceItemExternalResolver),
        schemaHooks.resolveResult(invoiceItemResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(invoiceItemQueryValidator),
        schemaHooks.resolveQuery(invoiceItemQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(invoiceItemDataValidator),
        schemaHooks.resolveData(invoiceItemDataResolver)
      ],
      patch: [
        schemaHooks.validateData(invoiceItemPatchValidator),
        schemaHooks.resolveData(invoiceItemPatchResolver)
      ],
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
    [invoiceItemPath]: InvoiceItemService
  }
}
