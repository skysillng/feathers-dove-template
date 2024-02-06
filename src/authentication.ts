// For more information about this file see https://dove.feathersjs.com/guides/cli/authentication.html
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication'
import { LocalStrategy } from '@feathersjs/authentication-local'
import { LoginStrategy } from './login-strategy'
import { AnonymousStrategy } from './anonymous-strategy'

import type { Application } from './declarations'

import { defineAbilitiesFor } from './authorization'

declare module './declarations' {
  interface ServiceTypes {
    authentication: AuthenticationService
  }
}

export const authentication = (app: Application) => {
  const authentication = new AuthenticationService(app)

  authentication.register('jwt', new JWTStrategy())
  authentication.register('local', new LocalStrategy())
  authentication.register('login', new LoginStrategy())
  authentication.register('anonymous', new AnonymousStrategy())

  app.use('authentication', authentication)

  app.service('authentication').hooks({
    after: {
      create: [
        (context) => {
          // if (!context.result.ability) {
          const { user } = context.result
          // if (user) {
          const ability = defineAbilitiesFor(user)
          context.result.ability = ability
          context.result.rules = ability.rules
          // }
          // }
          return context
        }
      ]
    }
  })
}
