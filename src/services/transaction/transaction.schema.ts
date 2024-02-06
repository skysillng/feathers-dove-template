// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax, StringEnum } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { TransactionService } from './transaction.class'
import { nanoid } from 'nanoid'

export const TransactionState = {
  pending: 'pending',
  successful: 'successful',
  failed: 'failed'
} as const
export type TransactionState = typeof TransactionState

// Main data model schema
export const transactionSchema = Type.Object(
  {
    id: Type.String(),
    objectId: Type.String(),
    objectType: Type.String(),
    amount: Type.Number(),
    currency: Type.String(),
    status: Type.Optional(StringEnum(Object.values(TransactionState)))
  },
  { $id: 'Transaction', additionalProperties: false }
)
export type Transaction = Static<typeof transactionSchema>
export const transactionValidator = getValidator(transactionSchema, dataValidator)
export const transactionResolver = resolve<Transaction, HookContext<TransactionService>>({})

export const transactionExternalResolver = resolve<Transaction, HookContext<TransactionService>>({})

// Schema for creating new entries
export const transactionDataSchema = Type.Omit(transactionSchema, ['id', 'status'], {
  $id: 'TransactionData'
})
export type TransactionData = Static<typeof transactionDataSchema>
export const transactionDataValidator = getValidator(transactionDataSchema, dataValidator)
export const transactionDataResolver = resolve<Transaction, HookContext<TransactionService>>({
  id: async () => nanoid(32),
  status: async (value: any) => {
    return TransactionState.pending
  }
})

// Schema for updating existing entries
export const transactionPatchSchema = Type.Partial(Type.Pick(transactionSchema, ['status']), {
  $id: 'TransactionPatch'
})
export type TransactionPatch = Static<typeof transactionPatchSchema>
export const transactionPatchValidator = getValidator(transactionPatchSchema, dataValidator)
export const transactionPatchResolver = resolve<Transaction, HookContext<TransactionService>>({})

// Schema for verifying shipment payment
export const transactionInitSchema = Type.Object(
  {
    id: Type.String(),
    amount: Type.Number(),
    redirect_url: Type.String(),
    userId: Type.String(),
    name: Type.String(),
    email: Type.String(),
    phonenumber: Type.String()
  },
  { $id: 'TransactionInit', additionalProperties: false }
)
export type TransactionInit = Static<typeof transactionInitSchema>
export const transactionInitValidator = getValidator(transactionInitSchema, dataValidator)
export const transactionInitResolver = resolve<TransactionInit, HookContext>({})

// Schema for verifying shipment payment
export const transactionVerifySchema = Type.Object(
  {
    id: Type.String(),
    status: Type.Optional(StringEnum(Object.values(TransactionState)))
  },
  { $id: 'TransactionVerify', additionalProperties: false }
)
export type TransactionVerify = Static<typeof transactionVerifySchema>
export const transactionVerifyValidator = getValidator(transactionVerifySchema, dataValidator)
export const transactionVerifyResolver = resolve<TransactionVerify, HookContext>({})

// Schema for allowed query properties
export const transactionQueryProperties = Type.Omit(transactionSchema, [])
export const transactionQuerySchema = Type.Intersect(
  [
    querySyntax(transactionQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type TransactionQuery = Static<typeof transactionQuerySchema>
export const transactionQueryValidator = getValidator(transactionQuerySchema, queryValidator)
export const transactionQueryResolver = resolve<TransactionQuery, HookContext<TransactionService>>({})
