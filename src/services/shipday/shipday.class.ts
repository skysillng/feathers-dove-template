// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'
import axios from 'axios'

import ShipdayApi from 'shipday-ts'
import { OrderRequest } from 'shipday-ts/lib/order/order.types'

import type { Application } from '../../declarations'
import type { Shipday, ShipdayData, ShipdayPatch, ShipdayQuery } from './shipday.schema'

export type { Shipday, ShipdayData, ShipdayPatch, ShipdayQuery }

export interface ShipdayServiceOptions {
  app: Application
}

export interface ShipdayParams extends Params<ShipdayQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class ShipdayService<ServiceParams extends ShipdayParams = ShipdayParams>
  implements ServiceInterface<Shipday, ShipdayData, ServiceParams, ShipdayPatch>
{
  apiKey: string
  shipdayClient: ShipdayApi

  constructor(public options: ShipdayServiceOptions) {
    this.apiKey = options.app.get('shipday')?.apiKey ?? ''

    this.shipdayClient = new ShipdayApi(this.apiKey, 10000)
  }

  async find(_params?: ShipdayParams): Promise<Shipday[]> {
    return await this.shipdayClient.orderService.getOrders()
  }

  async get(id: Id, _params?: ShipdayParams): Promise<Shipday> {
    const orders = await this.shipdayClient.orderService.getOrderDetails(`${id}`)
    return orders && orders.length == 1 ? orders[0] : orders
  }

  async create(data: ShipdayData, params?: ShipdayParams): Promise<Shipday>
  async create(data: ShipdayData[], params?: ShipdayParams): Promise<Shipday[]>
  async create(data: ShipdayData | ShipdayData[], params?: ShipdayParams): Promise<Shipday | Shipday[]> {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)))
    }

    return await this.shipdayClient.orderService.insertOrder(data)
  }

  async patch(id: NullableId, data: ShipdayPatch, params?: ShipdayParams) {
    const options = {
      method: 'POST',
      //url: `${this.url}/edit/${id}`,
      headers: {
        accept: 'application/json',
        Authorization: `Basic ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      data
    }

    const res = await axios.request(options)

    if (res.status == 200 && res.data.success == true) {
      return (data.orderNumber = res.data.orderId)
    }

    return res.data
  }

  async verify(data: any, _params?: ShipdayParams) {
    return this.get(data, _params)
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
