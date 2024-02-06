import { Params } from '@feathersjs/feathers'
import {
  AuthenticationBaseStrategy,
  AuthenticationResult,
  AuthenticationService
} from '@feathersjs/authentication'

export class AnonymousStrategy extends AuthenticationBaseStrategy {
  async authenticate(authentication: AuthenticationResult, params: Params) {
    return {
      anonymous: true
    }
  }
}
