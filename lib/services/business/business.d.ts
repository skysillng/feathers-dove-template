import type { Application } from '../../declarations';
import { BusinessService } from './business.class';
import { businessPath } from './business.shared';
export * from './business.class';
export * from './business.schema';
export declare const business: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [businessPath]: BusinessService;
    }
}
