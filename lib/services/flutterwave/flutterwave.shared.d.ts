import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { FlutterwavePaymentLink, FlutterwaveQuery, FlutterwaveService, FlutterwaveVerify } from './flutterwave.class';
export type { FlutterwavePaymentLink, FlutterwaveQuery, FlutterwaveVerify };
export type FlutterwaveClientService = Pick<FlutterwaveService<Params<FlutterwaveQuery>>, (typeof flutterwaveMethods)[number]>;
export declare const flutterwavePath = "flutterwave";
export declare const flutterwaveMethods: readonly ["create"];
export declare const flutterwaveClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [flutterwavePath]: FlutterwaveClientService;
    }
}
