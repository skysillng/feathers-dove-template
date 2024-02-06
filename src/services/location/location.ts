// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  locationDataValidator,
  locationPatchValidator,
  locationQueryValidator,
  locationResolver,
  locationExternalResolver,
  locationDataResolver,
  locationPatchResolver,
  locationQueryResolver
} from './location.schema'

import type { Application } from '../../declarations'
import { LocationService, getOptions } from './location.class'
import { locationPath, locationMethods } from './location.shared'

export * from './location.class'
export * from './location.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const location = (app: Application) => {
  // Register our service on the Feathers application
  app.use(locationPath, new LocationService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: locationMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(locationPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(locationExternalResolver),
        schemaHooks.resolveResult(locationResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(locationQueryValidator),
        schemaHooks.resolveQuery(locationQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(locationDataValidator),
        schemaHooks.resolveData(locationDataResolver)
      ],
      patch: [
        schemaHooks.validateData(locationPatchValidator),
        schemaHooks.resolveData(locationPatchResolver)
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
    [locationPath]: LocationService
  }
}
