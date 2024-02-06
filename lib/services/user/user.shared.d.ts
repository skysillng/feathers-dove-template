import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { User, UserData, UserPatch, UserQuery, UserService } from './user.class';
export type { User, UserData, UserPatch, UserQuery };
export type UserClientService = Pick<UserService<Params<UserQuery>>, (typeof userMethods)[number]>;
export declare const userPath = "user";
export declare const userMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const userClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [userPath]: UserClientService;
    }
}
