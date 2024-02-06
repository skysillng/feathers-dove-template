// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  FlutterwavePaymentLink,
  FlutterwaveQuery,
  FlutterwaveService,
  FlutterwaveVerify
} from './flutterwave.class'

export type { FlutterwavePaymentLink, FlutterwaveQuery, FlutterwaveVerify }

export type FlutterwaveClientService = Pick<
  FlutterwaveService<Params<FlutterwaveQuery>>,
  (typeof flutterwaveMethods)[number]
>

export const flutterwavePath = 'flutterwave'

export const flutterwaveMethods = ['create'] as const

export const flutterwaveClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(flutterwavePath, connection.service(flutterwavePath), {
    methods: flutterwaveMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [flutterwavePath]: FlutterwaveClientService
  }
}
