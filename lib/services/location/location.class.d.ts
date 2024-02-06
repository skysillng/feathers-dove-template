import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Location, LocationData, LocationPatch, LocationQuery } from './location.schema';
export type { Location, LocationData, LocationPatch, LocationQuery };
export interface LocationParams extends KnexAdapterParams<LocationQuery> {
}
export declare class LocationService<ServiceParams extends Params = LocationParams> extends KnexService<Location, LocationData, LocationParams, LocationPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
