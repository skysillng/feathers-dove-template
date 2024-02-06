import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Location, LocationData, LocationPatch, LocationQuery, LocationService } from './location.class';
export type { Location, LocationData, LocationPatch, LocationQuery };
export type LocationClientService = Pick<LocationService<Params<LocationQuery>>, (typeof locationMethods)[number]>;
export declare const locationPath = "location";
export declare const locationMethods: readonly [];
export declare const locationClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [locationPath]: LocationClientService;
    }
}
