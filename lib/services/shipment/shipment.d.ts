import type { Application } from '../../declarations';
import { ShipmentService } from './shipment.class';
import { shipmentPath } from './shipment.shared';
export * from './shipment.class';
export * from './shipment.schema';
export declare const shipment: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [shipmentPath]: ShipmentService;
    }
}
