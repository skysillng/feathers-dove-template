import type { Params } from '@feathersjs/feathers';
import type { Application } from '../../declarations';
import type { FlutterwavePaymentLink, FlutterwaveQuery, FlutterwaveVerify } from './flutterwave.schema';
import { AxiosResponse } from 'axios';
export type { FlutterwavePaymentLink, FlutterwaveQuery, FlutterwaveVerify };
export interface FlutterwaveServiceOptions {
    app: Application;
}
export interface FlutterwaveParams extends Params<FlutterwaveQuery> {
}
export declare class FlutterwaveService<ServiceParams extends FlutterwaveParams = FlutterwaveParams> {
    options: FlutterwaveServiceOptions;
    private baseUrl;
    private secretKey;
    constructor(options: FlutterwaveServiceOptions);
    create(data: any, _params?: FlutterwaveParams): Promise<void>;
    initPayment(data: FlutterwavePaymentLink, params?: FlutterwaveParams): Promise<FlutterwaveResponse | any>;
    verify(data: FlutterwaveVerify, _params?: FlutterwaveParams): Promise<AxiosResponse | any>;
}
type FlutterwaveResponse = {
    status: string;
    message: string;
    data: {
        link: string;
    };
};
export declare const getOptions: (app: Application) => {
    app: Application;
};
