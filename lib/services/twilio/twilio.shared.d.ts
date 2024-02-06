import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Twilio, TwilioData, TwilioVerify, TwilioMessage, TwilioQuery, TwilioService } from './twilio.class';
export type { Twilio, TwilioData, TwilioVerify, TwilioMessage, TwilioQuery };
export type TwilioClientService = Pick<TwilioService<Params<TwilioQuery>>, (typeof twilioMethods)[number]>;
export declare const twilioPath = "twilio";
export declare const twilioMethods: readonly [];
export declare const twilioClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [twilioPath]: TwilioClientService;
    }
}
