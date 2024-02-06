import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Invoice, InvoiceData, InvoicePatch, InvoiceQuery } from './invoice.schema';
export type { Invoice, InvoiceData, InvoicePatch, InvoiceQuery };
export interface InvoiceParams extends KnexAdapterParams<InvoiceQuery> {
}
export declare class InvoiceService<ServiceParams extends Params = InvoiceParams> extends KnexService<Invoice, InvoiceData, InvoiceParams, InvoicePatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
