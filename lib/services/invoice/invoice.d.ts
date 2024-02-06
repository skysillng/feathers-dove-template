import type { Application } from '../../declarations';
import { InvoiceService } from './invoice.class';
import { invoicePath } from './invoice.shared';
export * from './invoice.class';
export * from './invoice.schema';
export declare const invoice: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [invoicePath]: InvoiceService;
    }
}
