import { Params } from '@feathersjs/feathers';
import { AuthenticationBaseStrategy, AuthenticationResult } from '@feathersjs/authentication';
export declare class AnonymousStrategy extends AuthenticationBaseStrategy {
    authenticate(authentication: AuthenticationResult, params: Params): Promise<{
        anonymous: boolean;
    }>;
}
