import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Shipment, ShipmentData, ShipmentPatch, ShipmentQuery, ShipmentService } from './shipment.class';
export type { Shipment, ShipmentData, ShipmentPatch, ShipmentQuery };
export declare const ShipmentItemSize: {
    readonly small: "Small";
    readonly medium: "Medium";
    readonly large: "Large";
    readonly x_large: "Extra Large";
    readonly xx_large: "XX Large";
    readonly huge: "Huge";
    readonly overweight: "Overweight";
};
export type ShipmentClientService = Pick<ShipmentService<Params<ShipmentQuery>>, (typeof shipmentMethods)[number]>;
export declare const shipmentPath = "shipment";
export declare const shipmentMethods: readonly ["find", "get", "create", "patch", "estimate", "pay"];
export declare const shipmentClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [shipmentPath]: ShipmentClientService;
    }
}
