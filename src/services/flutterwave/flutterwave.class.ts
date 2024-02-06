// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../declarations'
import type { FlutterwavePaymentLink, FlutterwaveQuery, FlutterwaveVerify } from './flutterwave.schema'

import axios, { isCancel, AxiosError, AxiosResponse } from 'axios'

export type { FlutterwavePaymentLink, FlutterwaveQuery, FlutterwaveVerify }

export interface FlutterwaveServiceOptions {
  app: Application
}

export interface FlutterwaveParams extends Params<FlutterwaveQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class FlutterwaveService<ServiceParams extends FlutterwaveParams = FlutterwaveParams> {
  private baseUrl: string = this.options.app.get('flutterwave')?.baseUrl ?? ''
  private secretKey: string = this.options.app.get('flutterwave')?.secretKey ?? ''

  constructor(public options: FlutterwaveServiceOptions) {}

  async create(data: any, _params?: FlutterwaveParams) {
    return
  }

  async initPayment(
    data: FlutterwavePaymentLink,
    params?: FlutterwaveParams
  ): Promise<FlutterwaveResponse | any> {
    try {
      console.log(data)

      const headers = {
        Authorization: `Bearer ${this.secretKey}`
      }

      const response = await axios.post(`${this.baseUrl}/v3/payments`, data, {
        headers
      })
      // console.info(response)
      if (response.statusText === 'OK') return response.data
      else return response.data.message
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message)
        // 👇️ error: AxiosError<any, any>
        return error.response?.data
      }
      throw error
    }
  }

  async verify(data: FlutterwaveVerify, _params?: FlutterwaveParams): Promise<AxiosResponse | any> {
    try {
      const headers = { Authorization: `Bearer ${this.secretKey}` }

      const response = await axios.get(
        `${this.baseUrl}/v3/transactions/verify_by_reference?tx_ref=${data.tx_ref}`,
        { headers }
      )
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message)
        // 👇️ error: AxiosError<any, any>
        return error.response?.data
      }
    }
  }
}

type FlutterwaveResponse = {
  status: string
  message: string
  data: {
    link: string
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
