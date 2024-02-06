import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Invoice, InvoiceData, InvoicePatch, InvoiceQuery, InvoiceService } from './invoice.class';
export type { Invoice, InvoiceData, InvoicePatch, InvoiceQuery };
export type InvoiceClientService = Pick<InvoiceService<Params<InvoiceQuery>>, (typeof invoiceMethods)[number]>;
export declare const invoicePath = "invoice";
export declare const invoiceMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const invoiceClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [invoicePath]: InvoiceClientService;
    }
}
