// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const twilioSchema = Type.Object(
  {
    mobile: Type.String()
  },
  { $id: 'Twilio', additionalProperties: false }
)
export type Twilio = Static<typeof twilioSchema>
export const twilioValidator = getValidator(twilioSchema, dataValidator)
export const twilioResolver = resolve<Twilio, HookContext>({})

export const twilioExternalResolver = resolve<Twilio, HookContext>({})

// Schema for creating new entries
export const twilioDataSchema = Type.Intersect(
  [twilioSchema, Type.Object({ channel: Type.String() }, { additionalProperties: false })],
  { $id: 'TwilioData' }
)
export type TwilioData = Static<typeof twilioDataSchema>
export const twilioDataValidator = getValidator(twilioDataSchema, dataValidator)
export const twilioDataResolver = resolve<Twilio, HookContext>({})

// Schema for creating new entries
export const twilioMessageSchema = Type.Intersect(
  [
    twilioDataSchema,
    Type.Object(
      {
        message: Type.String()
      },
      { additionalProperties: false }
    )
  ],
  { $id: 'TwilioMessage' }
)
export type TwilioMessage = Static<typeof twilioMessageSchema>
export const twilioMessageValidator = getValidator(twilioMessageSchema, dataValidator)
export const twilioMessageResolver = resolve<Twilio, HookContext>({})

// Schema for verifying user phone
export const twilioVerifySchema = Type.Intersect(
  [
    twilioSchema,
    Type.Object(
      {
        otp: Type.String()
      },
      { additionalProperties: false }
    )
  ],
  { $id: 'TwilioVerify' }
)
export type TwilioVerify = Static<typeof twilioVerifySchema>
export const twilioVerifyValidator = getValidator(twilioVerifySchema, dataValidator)
export const twilioVerifyResolver = resolve<Twilio, HookContext>({})

// Schema for allowed query properties
export const twilioQueryProperties = Type.Pick(twilioSchema, ['mobile'])
export const twilioQuerySchema = Type.Intersect(
  [
    querySyntax(twilioQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type TwilioQuery = Static<typeof twilioQuerySchema>
export const twilioQueryValidator = getValidator(twilioQuerySchema, queryValidator)
export const twilioQueryResolver = resolve<TwilioQuery, HookContext>({})
