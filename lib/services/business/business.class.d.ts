import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Business, BusinessData, BusinessIncomingData, BusinessPatch, BusinessQuery } from './business.schema';
export type { Business, BusinessData, BusinessIncomingData, BusinessPatch, BusinessQuery };
export interface BusinessParams extends KnexAdapterParams<BusinessQuery> {
}
export declare class BusinessService<ServiceParams extends Params = BusinessParams> extends KnexService<Business, BusinessData, BusinessParams, BusinessPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
