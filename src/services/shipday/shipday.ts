// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  shipdayDataValidator,
  shipdayPatchValidator,
  shipdayQueryValidator,
  shipdayResolver,
  shipdayExternalResolver,
  shipdayDataResolver,
  shipdayPatchResolver,
  shipdayQueryResolver
} from './shipday.schema'

import type { Application } from '../../declarations'
import { ShipdayService, getOptions } from './shipday.class'
import { shipdayPath, shipdayMethods } from './shipday.shared'

export * from './shipday.class'
export * from './shipday.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const shipday = (app: Application) => {
  // Register our service on the Feathers application
  app.use(shipdayPath, new ShipdayService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: shipdayMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(shipdayPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(shipdayExternalResolver), schemaHooks.resolveResult(shipdayResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(shipdayQueryValidator), schemaHooks.resolveQuery(shipdayQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(shipdayDataValidator), schemaHooks.resolveData(shipdayDataResolver)],
      patch: [schemaHooks.validateData(shipdayPatchValidator), schemaHooks.resolveData(shipdayPatchResolver)]
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
    [shipdayPath]: ShipdayService
  }
}
