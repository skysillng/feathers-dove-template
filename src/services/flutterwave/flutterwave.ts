// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  flutterwaveQueryValidator,
  flutterwaveQueryResolver,
  flutterwavePaymentLinkResolver,
  flutterwavePaymentLinkValidator,
  flutterwaveVerifyValidator,
  flutterwaveVerifyResolver
} from './flutterwave.schema'

import type { Application, HookContext } from '../../declarations'
import { FlutterwaveService, getOptions } from './flutterwave.class'
import { flutterwavePath, flutterwaveMethods } from './flutterwave.shared'
import { flutterwaveWebhook } from '../../hooks/flutterwave-webhook'

export * from './flutterwave.class'
export * from './flutterwave.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const flutterwave = (app: Application) => {
  // Register our service on the Feathers application
  app.use(flutterwavePath, new FlutterwaveService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: flutterwaveMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(flutterwavePath).hooks({
    around: {
      all: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(flutterwaveQueryValidator),
        schemaHooks.resolveQuery(flutterwaveQueryResolver)
      ],
      create: [flutterwaveWebhook],
      initPayment: [
        schemaHooks.validateData(flutterwavePaymentLinkValidator),
        schemaHooks.resolveData(flutterwavePaymentLinkResolver)
      ],
      verify: [
        schemaHooks.validateData(flutterwaveVerifyValidator),
        schemaHooks.resolveData(flutterwaveVerifyResolver)
      ]
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
    [flutterwavePath]: FlutterwaveService
  }
}
