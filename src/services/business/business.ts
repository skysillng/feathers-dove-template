// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  businessDataValidator,
  businessPatchValidator,
  businessQueryValidator,
  businessResolver,
  businessExternalResolver,
  businessDataResolver,
  businessPatchResolver,
  businessQueryResolver,
  businessIncomingDataValidator
} from './business.schema'

import type { Application } from '../../declarations'
import { BusinessService, getOptions } from './business.class'
import { businessPath, businessMethods } from './business.shared'
import { test } from '../../hooks/test'
import { beforeCreateBusiness } from '../../hooks/before-create-business'
import { transaction } from '@feathersjs/knex'

export * from './business.class'
export * from './business.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const business = (app: Application) => {
  // Register our service on the Feathers application
  app.use(businessPath, new BusinessService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: businessMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(businessPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(businessExternalResolver),
        schemaHooks.resolveResult(businessResolver),
        test
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(businessQueryValidator),
        schemaHooks.resolveQuery(businessQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(businessIncomingDataValidator),
        transaction.start(),
        beforeCreateBusiness,
        schemaHooks.validateData(businessDataValidator),
        schemaHooks.resolveData(businessDataResolver)
      ],
      patch: [
        schemaHooks.validateData(businessPatchValidator),
        schemaHooks.resolveData(businessPatchResolver)
      ],
      remove: []
    },
    after: {
      all: [],
      create: [transaction.end()]
    },
    error: {
      all: [],
      create: [transaction.rollback()]
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [businessPath]: BusinessService
  }
}
