import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { InvoiceItem, InvoiceItemData, InvoiceItemPatch, InvoiceItemQuery } from './invoice-item.schema';
export type { InvoiceItem, InvoiceItemData, InvoiceItemPatch, InvoiceItemQuery };
export interface InvoiceItemParams extends KnexAdapterParams<InvoiceItemQuery> {
}
export declare class InvoiceItemService<ServiceParams extends Params = InvoiceItemParams> extends KnexService<InvoiceItem, InvoiceItemData, InvoiceItemParams, InvoiceItemPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
