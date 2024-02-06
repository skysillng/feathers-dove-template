// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  twilioDataValidator,
  twilioQueryValidator,
  twilioResolver,
  twilioExternalResolver,
  twilioDataResolver,
  twilioQueryResolver,
  twilioVerifyValidator,
  twilioVerifyResolver,
  twilioMessageValidator,
  twilioMessageResolver
} from './twilio.schema'

import type { Application } from '../../declarations'
import { TwilioService, getOptions } from './twilio.class'
import { twilioPath, twilioMethods } from './twilio.shared'

export * from './twilio.class'
export * from './twilio.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const twilio = (app: Application) => {
  // Register our service on the Feathers application
  app.use(twilioPath, new TwilioService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: twilioMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(twilioPath).hooks({
    around: {
      //all: [
      //schemaHooks.resolveExternal(twilioExternalResolver),
      //schemaHooks.resolveResult(twilioResolver)
      //]
    },
    before: {
      //all: [schemaHooks.validateQuery(twilioQueryValidator), schemaHooks.resolveQuery(twilioQueryResolver)],
      //message: [schemaHooks.validateData(twilioMessageValidator), schemaHooks.resolveData(twilioMessageResolver)],
      sendVerification: [
        schemaHooks.validateData(twilioDataValidator),
        schemaHooks.resolveData(twilioDataResolver)
      ],
      verify: [schemaHooks.validateData(twilioVerifyValidator), schemaHooks.resolveData(twilioVerifyResolver)]
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
    [twilioPath]: TwilioService
  }
}
