// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  Business,
  BusinessData,
  BusinessIncomingData,
  BusinessPatch,
  BusinessQuery,
  BusinessService
} from './business.class'

export type { Business, BusinessData, BusinessIncomingData, BusinessPatch, BusinessQuery }

export type BusinessClientService = Pick<
  BusinessService<Params<BusinessQuery>>,
  (typeof businessMethods)[number]
>

export const businessPath = 'business'

export const businessMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const BusinessSize = {
  // micro: 'micro',
  // small: 'small',
  // medium: 'medium',
  // large: 'large',
  '0-99': '0-99',
  '100+': '100+'
} as const

export const businessClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(businessPath, connection.service(businessPath), {
    methods: businessMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [businessPath]: BusinessClientService
  }
}
