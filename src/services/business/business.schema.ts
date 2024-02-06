// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax, StringEnum } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import { BusinessSize } from './business.shared'
import { userSchema, userDataSchema } from '../user/user.schema'

// Main data model schema
export const businessSchema = Type.Object(
  {
    id: Type.String({ maxLength: 16 }),
    userId: Type.String({ maxLength: 16 }),
    name: Type.String(),
    // description: Type.String(),
    // address: Type.Any(),
    size: StringEnum(Object.values(BusinessSize)),
    // employeeSize: StringEnum(Object.values(BusinessSize))
    user: Type.Optional(Type.Object(userSchema.properties))
  },
  { $id: 'Business', additionalProperties: false }
)
export type Business = Static<typeof businessSchema>
export const businessValidator = getValidator(businessSchema, dataValidator)
export const businessResolver = resolve<Business, HookContext>({
  user: virtual(async (business, context) => {
    if(business.userId){
      return context.app.service('user')._get(business.userId)
    }
    return business.user;
  })
})

export const businessExternalResolver = resolve<Business, HookContext>({})

// Schema for creating new entries
export const businessDataSchema = Type.Omit(businessSchema, ['id'], { $id: 'BusinessData' })
export type BusinessData = Static<typeof businessDataSchema>
export const businessDataValidator = getValidator(businessDataSchema, dataValidator)
export const businessDataResolver = resolve<Business, HookContext>({
  id: async () => {
    const { customAlphabet } = require('nanoid')
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const nanoid = customAlphabet(alphabet, 10)
    return 'TB_' + nanoid() //=> "vIwfeHzOkIA6O"
  }
})

export const businessIncomingDataSchema = Type.Intersect(
  [Type.Omit(businessSchema, ['id', 'userId']), userDataSchema],
  {
    $id: 'BusinessIncomingData'
  }
)
export type BusinessIncomingData = Static<typeof businessIncomingDataSchema>
export const businessIncomingDataValidator = getValidator(businessIncomingDataSchema, dataValidator)

// Schema for updating existing entries
export const businessPatchSchema = Type.Partial(businessSchema, {
  $id: 'BusinessPatch'
})
export type BusinessPatch = Static<typeof businessPatchSchema>
export const businessPatchValidator = getValidator(businessPatchSchema, dataValidator)
export const businessPatchResolver = resolve<Business, HookContext>({})

// Schema for allowed query properties
export const businessQueryProperties = Type.Omit(businessSchema, [])
export const businessQuerySchema = Type.Intersect(
  [
    querySyntax(businessQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type BusinessQuery = Static<typeof businessQuerySchema>
export const businessQueryValidator = getValidator(businessQuerySchema, queryValidator)
export const businessQueryResolver = resolve<BusinessQuery, HookContext>({
  userId: async (value, business, context) => {
    if (context.params.user) {
      return context.params.user.id
    }

    return value
  }
})
