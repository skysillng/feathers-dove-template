import type { Application } from '../../declarations';
import { FlutterwaveService } from './flutterwave.class';
import { flutterwavePath } from './flutterwave.shared';
export * from './flutterwave.class';
export * from './flutterwave.schema';
export declare const flutterwave: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [flutterwavePath]: FlutterwaveService;
    }
}
