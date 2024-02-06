// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  shipmentDataValidator,
  shipmentPatchValidator,
  shipmentQueryValidator,
  shipmentResolver,
  shipmentExternalResolver,
  shipmentDataResolver,
  shipmentPatchResolver,
  shipmentQueryResolver,
  shipmentEstimateResolver,
  shipmentEstimateValidator,
  shipmentPayResolver,
  shipmentPayValidator
} from './shipment.schema'

import type { Application, HookContext } from '../../declarations'
import { ShipmentService, getOptions } from './shipment.class'
import { shipmentPath, shipmentMethods } from './shipment.shared'
import { test } from '../../hooks/test'
import { beforeCreateShipment } from '../../hooks/before-create-shipment'
import { transaction } from '@feathersjs/knex'

export * from './shipment.class'
export * from './shipment.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const shipment = (app: Application) => {
  // Register our service on the Feathers application
  app.use(shipmentPath, new ShipmentService(getOptions(app), app), {
    // A list of all methods this service exposes externally
    methods: shipmentMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })

  // Initialize hooks
  app.service(shipmentPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(shipmentExternalResolver),
        schemaHooks.resolveResult(shipmentResolver)
      ],
      find: [test],
      create: []
    },
    before: {
      all: [
        schemaHooks.validateQuery(shipmentQueryValidator),
        schemaHooks.resolveQuery(shipmentQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(shipmentDataValidator),
        schemaHooks.resolveData(shipmentDataResolver),
        transaction.start(),
        beforeCreateShipment
      ],
      patch: [
        schemaHooks.validateData(shipmentPatchValidator),
        schemaHooks.resolveData(shipmentPatchResolver)
      ],
      remove: [],
      estimate: [
        schemaHooks.validateData(shipmentEstimateValidator),
        schemaHooks.resolveData(shipmentEstimateResolver)
      ],
      pay: [schemaHooks.validateData(shipmentPayValidator), schemaHooks.resolveData(shipmentPayResolver)]
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
    [shipmentPath]: ShipmentService
  }
}
