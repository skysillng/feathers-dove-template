// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import { Location } from '../services/location/location.shared'
import type { HookContext, NextFunction } from '../declarations'
import { ShipmentData } from '../services/shipment/shipment.shared'
import { ShipmentService } from '../services/shipment/shipment.class'

export const beforeCreateShipment = async (context: HookContext) => {
  console.log(`Running hook before create shipment on ${context.path}.${context.method}`)

  const data = context.data
  var pickup = data.pickup
  var delivery = data.delivery

  const location: Location & { deliveryFee: number } = await (context.service as ShipmentService).estimate({
    origin: pickup.geopoint,
    destination: delivery.geopoint,
    size: data.size
  })

  if (location) {
    data.deliveryFee = Math.ceil(location.deliveryFee * 100) / 100
    data.tax = Math.ceil(7.5 * data.deliveryFee) / 100
    data.etaTime = location.etaTime

    context.data = data
  }
}
