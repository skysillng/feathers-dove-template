// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  transactionDataValidator,
  transactionPatchValidator,
  transactionQueryValidator,
  transactionResolver,
  transactionExternalResolver,
  transactionDataResolver,
  transactionPatchResolver,
  transactionQueryResolver,
  transactionVerifyValidator,
  transactionVerifyResolver
} from './transaction.schema'

import type { Application } from '../../declarations'
import { Transaction, TransactionService, getOptions } from './transaction.class'
import { transactionPath, transactionMethods } from './transaction.shared'
import { ShipdayData } from '../shipday/shipday.schema'

export * from './transaction.class'
export * from './transaction.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const transaction = (app: Application) => {
  // Register our service on the Feathers application
  app.use(transactionPath, new TransactionService(app, getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: transactionMethods,
    // You can add additional custom events to be sent to clients here
    events: ['paymentSuccessful', 'paymentFailed']
  })
  // Initialize hooks
  app
    .service(transactionPath)
    .hooks({
      around: {
        all: [
          schemaHooks.resolveExternal(transactionExternalResolver),
          schemaHooks.resolveResult(transactionResolver)
        ]
      },
      before: {
        all: [
          schemaHooks.validateQuery(transactionQueryValidator),
          schemaHooks.resolveQuery(transactionQueryResolver)
        ],
        find: [],
        get: [],
        create: [
          schemaHooks.validateData(transactionDataValidator),
          schemaHooks.resolveData(transactionDataResolver)
        ],
        patch: [
          schemaHooks.validateData(transactionPatchValidator),
          schemaHooks.resolveData(transactionPatchResolver)
        ],
        remove: [],
        verify: [
          schemaHooks.validateData(transactionVerifyValidator),
          schemaHooks.resolveData(transactionVerifyResolver)
        ]
      },
      after: {
        all: []
      },
      error: {
        all: []
      }
    })
    .on('paymentSuccessful', async (data: Transaction) => {
      if (data.objectType == 'shipment' && data.status == 'successful') {
        const shipment = await app.service('shipment').proceedWithShipment(data.objectId, data.id)
      }
    })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [transactionPath]: TransactionService
  }
}
