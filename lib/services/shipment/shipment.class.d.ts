import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import { type Shipment, type ShipmentData, type ShipmentEstimate, type ShipmentPatch, type ShipmentPay, type ShipmentQuery } from './shipment.schema';
export type { Shipment, ShipmentData, ShipmentPatch, ShipmentQuery };
import { Location } from '../location/location.schema';
export interface ShipmentParams extends KnexAdapterParams<ShipmentQuery> {
}
export declare class ShipmentService<ServiceParams extends Params = ShipmentParams> extends KnexService<Shipment, ShipmentData, ShipmentParams, ShipmentPatch> {
    private app;
    constructor(options: KnexAdapterOptions, app: Application);
    estimate(data: ShipmentEstimate, params?: ShipmentParams): Promise<Location & {
        deliveryFee: number;
    }>;
    private googleRoute;
    private _estimate;
    pay(data: ShipmentPay, params?: ShipmentParams): Promise<any>;
    active(data: any, _params?: ShipmentParams): Promise<import("@feathersjs/feathers").Paginated<{
        status?: "ALREADY_DELIVERED" | "NOT_ASSIGNED" | "NOT_ACCEPTED" | "NOT_STARTED_YET" | "STARTED" | "PICKED_UP" | "READY_TO_DELIVER" | "FAILED_DELIVERY" | "ACTIVE" | "INCOMPLETE" | undefined;
        other?: string | undefined;
        items?: {
            detail: string;
            quantity: string | number;
        }[] | undefined;
        transaction?: {
            status?: "failed" | "pending" | "successful" | undefined;
            id: string;
            currency: string;
            objectId: string;
            objectType: string;
            amount: number;
        } | undefined;
        transactionId?: string | undefined;
        carrierId?: string | undefined;
        carrier?: {
            id: number;
            name: string;
            email: string;
            companyId: number;
            areaId: number;
            phoneNumber: string;
            personalId: number;
            codeName: string;
            isOnShift: boolean;
            carrierPhoto: string;
            isActive: boolean;
        } | undefined;
        id: string;
        total: string;
        size: "Small" | "Medium" | "Large" | "Extra Large" | "XX Large" | "Huge" | "Overweight";
        userId: string;
        etaTime: string;
        deliveryFee: string | number;
        tip: string | number;
        tax: string | number;
        pickup: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            date: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
            instruction: string;
        };
        delivery: {
            email?: string | undefined;
            state: string;
            address: string;
            name: string;
            phone: string;
            city: string;
            postalCode: string;
            geopoint: {
                lat: number;
                lng: number;
            };
        };
        category: string;
        createdAt: string;
        updatedAt: string;
    }>>;
    proceedWithShipment(shipmentId: string, txnId: string): Promise<void>;
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
