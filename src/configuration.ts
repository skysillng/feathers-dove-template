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
    fee: Type.Object({
      flat: Type.Number(),
      '5km': Type.Number(),
      '10km': Type.Number(),
      '15km': Type.Number(),
      small: Type.Number(),
      medium: Type.Number(),
      large: Type.Number(),
      x_large: Type.Number(),
      xx_large: Type.Number(),
      huge: Type.Number(),
      overweight: Type.Number(),
      '5': Type.Number(),
      '11': Type.Number(),
      '16': Type.Number(),
      '21': Type.Number(),
      '26': Type.Number()
    }),
    google: Type.Optional(
      Type.Object({
        mapApikey: Type.String(),
        routeUrl: Type.String(),
        routeKey: Type.String()
      })
    ),
    shipday: Type.Optional(
      Type.Object({
        apiKey: Type.String()
      })
    ),
    twilio: Type.Optional(
      Type.Object({
        accountSID: Type.String(),
        authToken: Type.String(),
        serviceSID: Type.String()
      })
    ),
    flutterwave: Type.Optional(
      Type.Object({
        baseUrl: Type.String(),
        publicKey: Type.Optional(Type.String()),
        secretKey: Type.Optional(Type.String()),
        secretHash: Type.Optional(Type.String())
      })
    )
  })
])

export type ApplicationConfiguration = Static<typeof configurationSchema>

export const configurationValidator = getValidator(configurationSchema, dataValidator)
