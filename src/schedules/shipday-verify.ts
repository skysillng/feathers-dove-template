import { schedule } from 'node-cron'
import type { Application } from '../declarations'
import { Paginated } from '@feathersjs/feathers'
import { Shipment } from '../client'
import _ from 'lodash'
import { ShipmentStatus } from '../services/shipment/shipment'

export const shipdayVerify = (app: Application) => {
  schedule(
    '*/5 * * * *',
    async () => {
      var activeShipments: Paginated<Shipment> = await app.service('shipment').active(null, {
        query: {
          $select: ['transactionId', 'status']
        },
        paginate: false
      })

      if (activeShipments) {
        while (activeShipments.data.length > 0) {
          activeShipments.data.forEach(async (value) => {
            const shipday = await app.service('shipday').get(value.transactionId!)

            if (!shipday || Array.isArray(shipday)) return
            var status = shipday.orderStatus.orderState

            if (status && status != value.status) {
              console.log(value)
              await app
                .service('shipment')
                .patch(value.id, { status: ShipmentStatus[`${status}` as keyof typeof ShipmentStatus] })
            }
          })
        }
      }
    },
    {
      timezone: 'Africa/Lagos'
    }
  )
}
