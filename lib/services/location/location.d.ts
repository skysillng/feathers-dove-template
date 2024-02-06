import type { Application } from '../../declarations';
import { LocationService } from './location.class';
import { locationPath } from './location.shared';
export * from './location.class';
export * from './location.schema';
export declare const location: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [locationPath]: LocationService;
    }
}
