// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'

import type { Shipment, ShipmentData, ShipmentPatch, ShipmentQuery, ShipmentService } from './shipment.class'
export type { Shipment, ShipmentData, ShipmentPatch, ShipmentQuery }

export const ShipmentItemSize = {
  small: 'Small', // Shoe box size
  medium: 'Medium', // Car front seat
  large: 'Large', // Car back sit
  x_large: 'Extra Large', // Car trunk
  xx_large: 'XX Large', // Hatchback/SUV trunk
  huge: 'Huge', // Pickup truck
  overweight: 'Overweight' // Trailer, Truck & Shipping Container
} as const

export type ShipmentClientService = Pick<
  ShipmentService<Params<ShipmentQuery>>,
  (typeof shipmentMethods)[number]
>

export const shipmentPath = 'shipment'

export const shipmentMethods = ['find', 'get', 'create', 'patch', 'estimate', 'pay'] as const

export const shipmentClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(shipmentPath, connection.service(shipmentPath), {
    methods: shipmentMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [shipmentPath]: ShipmentClientService
  }
}
