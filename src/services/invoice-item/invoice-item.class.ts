// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { InvoiceItem, InvoiceItemData, InvoiceItemPatch, InvoiceItemQuery } from './invoice-item.schema'

export type { InvoiceItem, InvoiceItemData, InvoiceItemPatch, InvoiceItemQuery }

export interface InvoiceItemParams extends KnexAdapterParams<InvoiceItemQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class InvoiceItemService<ServiceParams extends Params = InvoiceItemParams> extends KnexService<
  InvoiceItem,
  InvoiceItemData,
  InvoiceItemParams,
  InvoiceItemPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'invoice-item'
  }
}
