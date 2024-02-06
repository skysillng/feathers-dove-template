// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Shipday, ShipdayData, ShipdayPatch, ShipdayQuery, ShipdayService } from './shipday.class'

export type { Shipday, ShipdayData, ShipdayPatch, ShipdayQuery }

export type ShipdayClientService = Pick<ShipdayService<Params<ShipdayQuery>>, (typeof shipdayMethods)[number]>

export const shipdayPath = 'shipday'

export const shipdayMethods = ['find', 'get', 'create', 'patch'] as const

export const shipdayClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(shipdayPath, connection.service(shipdayPath), {
    methods: shipdayMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [shipdayPath]: ShipdayClientService
  }
}
