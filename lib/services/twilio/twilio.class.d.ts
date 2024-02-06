import type { Params, ServiceInterface } from '@feathersjs/feathers';
import type { Application } from '../../declarations';
import type { Twilio, TwilioData, TwilioMessage, TwilioQuery, TwilioVerify } from './twilio.schema';
export type { Twilio, TwilioData, TwilioMessage, TwilioVerify, TwilioQuery };
export interface TwilioServiceOptions {
    app: Application;
}
export interface TwilioParams extends Params<TwilioQuery> {
}
export declare class TwilioService<ServiceParams extends TwilioParams = TwilioParams> implements ServiceInterface<Twilio, TwilioData, ServiceParams> {
    options: TwilioServiceOptions;
    private accountSid;
    private authToken;
    private sid;
    private client;
    constructor(options: TwilioServiceOptions);
    create(data: TwilioData, _params?: ServiceParams): Promise<any>;
    message(data: TwilioMessage, params: Params): Promise<{
        status: string;
    }>;
    sendVerification(data: TwilioData, params?: Params): Promise<any>;
    verify(data: TwilioVerify, params?: Params): Promise<any>;
}
export declare const getOptions: (app: Application) => {
    app: Application;
};
