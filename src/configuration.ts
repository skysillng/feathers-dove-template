import { Type, getValidator, defaultAppConfiguration } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import { dataValidator } from './validators'

export const configurationSchema = Type.Intersect([
  defaultAppConfiguration,
  Type.Object({
    host: Type.String(),
    port: Type.Number(),
    public: Type.String(),
    //defaultLocation: Type.String(),
    google: Type.Optional(
      Type.Object({
        mapApikey: Type.String(),
        routeUrl: Type.String(),
        routeKey: Type.String()
      })
    ),
    twilio: Type.Optional(
      Type.Object({
        accountSID: Type.String(),
        authToken: Type.String(),
        serviceSID: Type.String()
      })
    )
  })
])

export type ApplicationConfiguration = Static<typeof configurationSchema>

export const configurationValidator = getValidator(configurationSchema, dataValidator)
