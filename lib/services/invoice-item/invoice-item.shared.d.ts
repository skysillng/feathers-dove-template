import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { InvoiceItem, InvoiceItemData, InvoiceItemPatch, InvoiceItemQuery, InvoiceItemService } from './invoice-item.class';
export type { InvoiceItem, InvoiceItemData, InvoiceItemPatch, InvoiceItemQuery };
export type InvoiceItemClientService = Pick<InvoiceItemService<Params<InvoiceItemQuery>>, (typeof invoiceItemMethods)[number]>;
export declare const invoiceItemPath = "invoice-item";
export declare const invoiceItemMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const invoiceItemClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [invoiceItemPath]: InvoiceItemClientService;
    }
}
