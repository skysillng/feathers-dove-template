import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers';
import ShipdayApi from 'shipday-ts';
import type { Application } from '../../declarations';
import type { Shipday, ShipdayData, ShipdayPatch, ShipdayQuery } from './shipday.schema';
export type { Shipday, ShipdayData, ShipdayPatch, ShipdayQuery };
export interface ShipdayServiceOptions {
    app: Application;
}
export interface ShipdayParams extends Params<ShipdayQuery> {
}
export declare class ShipdayService<ServiceParams extends ShipdayParams = ShipdayParams> implements ServiceInterface<Shipday, ShipdayData, ServiceParams, ShipdayPatch> {
    options: ShipdayServiceOptions;
    apiKey: string;
    shipdayClient: ShipdayApi;
    constructor(options: ShipdayServiceOptions);
    find(_params?: ShipdayParams): Promise<Shipday[]>;
    get(id: Id, _params?: ShipdayParams): Promise<Shipday>;
    create(data: ShipdayData, params?: ShipdayParams): Promise<Shipday>;
    create(data: ShipdayData[], params?: ShipdayParams): Promise<Shipday[]>;
    patch(id: NullableId, data: ShipdayPatch, params?: ShipdayParams): Promise<any>;
    verify(data: any, _params?: ShipdayParams): Promise<{
        feedback: string;
        customer: {
            address: string;
            name: string;
            phoneNumber: string;
            emailAddress: string;
            latitude: number;
            longitude: number;
        };
        distance: string;
        etaTime: string;
        orderId: number;
        orderNumber: string;
        companyId: string;
        areaId: string;
        restaurant: {
            id: number;
            address: string;
            name: string;
            phoneNumber: string;
            latitude: number;
            longitude: number;
        };
        assignedCarrier: {
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
        };
        activityLog: {
            startTime: string;
            placementTime: string;
            expectedPickupTime: string;
            expectedDeliveryDate: string;
            expectedDeliveryTime: string;
            assignedTime: string;
            pickedUpTime: string;
            arrivedTime: string;
            deliveryTime: string;
        };
        costing: {
            totalCost: string;
            deliveryFee: string;
            tip: string;
            discountAmount: string;
            tax: string;
            cashTip: string;
        };
        orderItem: {
            details?: string | undefined;
            addOns?: string[] | undefined;
            name: string;
            quantity: string;
            unitPrice: string;
        }[];
        assignedCarrierId: string;
        orderStatus: {
            imcomplete: boolean;
            accepted: boolean;
            orderState: string;
        };
        trackingLink: string;
        schedule: boolean;
        parentId: string;
        deliveryInstruction: string;
    }>;
}
export declare const getOptions: (app: Application) => {
    app: Application;
};
