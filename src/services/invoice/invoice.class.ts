// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Invoice, InvoiceData, InvoicePatch, InvoiceQuery } from './invoice.schema'

export type { Invoice, InvoiceData, InvoicePatch, InvoiceQuery }

export interface InvoiceParams extends KnexAdapterParams<InvoiceQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class InvoiceService<ServiceParams extends Params = InvoiceParams> extends KnexService<
  Invoice,
  InvoiceData,
  InvoiceParams,
  InvoicePatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'invoice'
  }
}
