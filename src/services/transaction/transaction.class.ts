// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService, transaction } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import axios, { isCancel, AxiosError, AxiosResponse } from 'axios'

import type { Application } from '../../declarations'
import type {
  Transaction,
  TransactionData,
  TransactionInit,
  TransactionPatch,
  TransactionQuery,
  TransactionVerify
} from './transaction.schema'
import { FlutterwavePaymentLink } from '../flutterwave/flutterwave.schema'
import { shipment } from '../shipment/shipment'
import { user } from '../user/user'

export type { Transaction, TransactionData, TransactionPatch, TransactionQuery }

export interface TransactionParams extends KnexAdapterParams<TransactionQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class TransactionService<ServiceParams extends Params = TransactionParams> extends KnexService<
  Transaction,
  TransactionData,
  TransactionParams,
  TransactionPatch
> {
  constructor(
    private app: Application,
    options: KnexAdapterOptions
  ) {
    super(options)
  }

  async verify(data: TransactionVerify, _params?: TransactionParams): Promise<Transaction> {
    try {
      var eTransaction = await this._get(data.id)

      if (eTransaction.status === data.status) {
        return eTransaction
      }

      const response = await this.app.service('flutterwave').verify({ tx_ref: data.id, status: data.status })

      if (
        response.statusText === 'OK' &&
        response.data.data.status === 'successful' &&
        response.data.data.amount >= eTransaction.amount &&
        response.data.data.currency === 'NGN'
      ) {
        // Success! Confirm the customer's payment
        eTransaction = await this._patch(eTransaction.id, { status: 'successful' })
        this.app.service('transaction').emit('paymentSuccessful', eTransaction)
      } else {
        // Inform the customer their payment was unsuccessful
        eTransaction = await this._patch(eTransaction.id, { status: 'failed' })
        this.app.service('transaction').emit('paymentFailed', eTransaction)
      }

      return eTransaction
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message)
        // 👇️ error: AxiosError<any, any>
        throw error.response?.data
      }
      throw error
    }
  }

  async initPayment(data: TransactionInit, _params?: TransactionParams) {
    const paymentLinkData: FlutterwavePaymentLink = {
      tx_ref: data.id,
      amount: data.amount.toString(),
      currency: 'NGN',
      redirect_url: data.redirect_url,
      customer: {
        name: data.name,
        email: data.email,
        phonenumber: data.phonenumber
      },
      meta: {
        c_id: data.userId
      }
    }

    return await this.app.service('flutterwave').initPayment(paymentLinkData)
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'transaction'
  }
}
