import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Shipday, ShipdayData, ShipdayPatch, ShipdayQuery, ShipdayService } from './shipday.class';
export type { Shipday, ShipdayData, ShipdayPatch, ShipdayQuery };
export type ShipdayClientService = Pick<ShipdayService<Params<ShipdayQuery>>, (typeof shipdayMethods)[number]>;
export declare const shipdayPath = "shipday";
export declare const shipdayMethods: readonly ["find", "get", "create", "patch"];
export declare const shipdayClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [shipdayPath]: ShipdayClientService;
    }
}
