import { Query, Params } from '@feathersjs/feathers';
import { AuthenticationRequest, AuthenticationBaseStrategy } from '@feathersjs/authentication';
export declare class LoginStrategy extends AuthenticationBaseStrategy {
    verifyConfiguration(): void;
    get configuration(): any;
    getEntityQuery(query: Query, _params: Params): Promise<{
        $limit: number;
    }>;
    findEntity(email: string | undefined, mobile: string, params: Params): Promise<any>;
    getEntity(result: any, params: Params): Promise<any>;
    comparePassword(entity: any, password: string, passphrase: string): Promise<any>;
    hashPassword(password: string, _params: Params): Promise<string>;
    authenticate(data: AuthenticationRequest, params: Params): Promise<{
        [x: number]: any;
        authentication: {
            strategy: string | undefined;
        };
    }>;
}
