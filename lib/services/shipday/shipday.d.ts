import type { Application } from '../../declarations';
import { ShipdayService } from './shipday.class';
import { shipdayPath } from './shipday.shared';
export * from './shipday.class';
export * from './shipday.schema';
export declare const shipday: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [shipdayPath]: ShipdayService;
    }
}
