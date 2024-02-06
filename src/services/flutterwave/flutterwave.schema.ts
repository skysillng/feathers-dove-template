// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax, StringEnum } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import { TransactionState } from '../transaction/transaction.schema'

// Schema to get payment link from flutterwave
export const flutterwavePaymentLinkSchema = Type.Object(
  {
    tx_ref: Type.String(),
    amount: Type.String(),
    currency: StringEnum(['NGN']),
    redirect_url: Type.Optional(Type.String()),
    meta: Type.Optional(Type.Any()),
    customer: Type.Object({
      name: Type.String(),
      email: Type.String(),
      phonenumber: Type.String()
    }),
    customizations: Type.Optional(
      Type.Object({
        title: Type.String(),
        logo: Type.String()
      })
    )
  },
  { $id: 'FlutterwavePaymentLink', additionalProperties: false }
)
export type FlutterwavePaymentLink = Static<typeof flutterwavePaymentLinkSchema>
export const flutterwavePaymentLinkValidator = getValidator(flutterwavePaymentLinkSchema, dataValidator)
export const flutterwavePaymentLinkResolver = resolve<FlutterwavePaymentLink, HookContext>({})

// Schema to verify flutterwave payment
export const flutterwaveVerifySchema = Type.Object(
  {
    tx_ref: Type.String(),
    status: Type.Optional(StringEnum(Object.values(TransactionState)))
  },
  { $id: 'FlutterwaveVerify', additionalProperties: false }
)
export type FlutterwaveVerify = Static<typeof flutterwaveVerifySchema>
export const flutterwaveVerifyValidator = getValidator(flutterwaveVerifySchema, dataValidator)
export const flutterwaveVerifyResolver = resolve<FlutterwaveVerify, HookContext>({})

// Schema for allowed query properties
export const flutterwaveQuerySchema = Type.Object({}, { additionalProperties: false })
export type FlutterwaveQuery = Static<typeof flutterwaveQuerySchema>
export const flutterwaveQueryValidator = getValidator(flutterwaveQuerySchema, queryValidator)
export const flutterwaveQueryResolver = resolve<FlutterwaveQuery, HookContext>({})
