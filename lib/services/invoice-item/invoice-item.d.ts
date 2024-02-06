import type { Application } from '../../declarations';
import { InvoiceItemService } from './invoice-item.class';
import { invoiceItemPath } from './invoice-item.shared';
export * from './invoice-item.class';
export * from './invoice-item.schema';
export declare const invoiceItem: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [invoiceItemPath]: InvoiceItemService;
    }
}
