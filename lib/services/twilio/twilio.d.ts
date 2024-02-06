import type { Application } from '../../declarations';
import { TwilioService } from './twilio.class';
import { twilioPath } from './twilio.shared';
export * from './twilio.class';
export * from './twilio.schema';
export declare const twilio: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [twilioPath]: TwilioService;
    }
}
