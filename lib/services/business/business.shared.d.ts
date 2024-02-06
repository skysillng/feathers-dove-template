import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Business, BusinessData, BusinessIncomingData, BusinessPatch, BusinessQuery, BusinessService } from './business.class';
export type { Business, BusinessData, BusinessIncomingData, BusinessPatch, BusinessQuery };
export type BusinessClientService = Pick<BusinessService<Params<BusinessQuery>>, (typeof businessMethods)[number]>;
export declare const businessPath = "business";
export declare const businessMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const BusinessSize: {
    readonly '0-99': "0-99";
    readonly '100+': "100+";
};
export declare const businessClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [businessPath]: BusinessClientService;
    }
}
