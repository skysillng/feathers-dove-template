// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  Twilio,
  TwilioData,
  TwilioVerify,
  TwilioMessage,
  TwilioQuery,
  TwilioService
} from './twilio.class'

export type { Twilio, TwilioData, TwilioVerify, TwilioMessage, TwilioQuery }

export type TwilioClientService = Pick<TwilioService<Params<TwilioQuery>>, (typeof twilioMethods)[number]>

export const twilioPath = 'twilio'

//export const twilioMethods = ['create', 'sendVerification', 'verify', 'message'] as const
export const twilioMethods = [] as const

export const twilioClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(twilioPath, connection.service(twilioPath), {
    methods: twilioMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [twilioPath]: TwilioClientService
  }
}
