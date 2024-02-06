// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const invoiceSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Invoice', additionalProperties: false }
)
export type Invoice = Static<typeof invoiceSchema>
export const invoiceValidator = getValidator(invoiceSchema, dataValidator)
export const invoiceResolver = resolve<Invoice, HookContext>({})

export const invoiceExternalResolver = resolve<Invoice, HookContext>({})

// Schema for creating new entries
export const invoiceDataSchema = Type.Pick(invoiceSchema, ['text'], {
  $id: 'InvoiceData'
})
export type InvoiceData = Static<typeof invoiceDataSchema>
export const invoiceDataValidator = getValidator(invoiceDataSchema, dataValidator)
export const invoiceDataResolver = resolve<Invoice, HookContext>({})

// Schema for updating existing entries
export const invoicePatchSchema = Type.Partial(invoiceSchema, {
  $id: 'InvoicePatch'
})
export type InvoicePatch = Static<typeof invoicePatchSchema>
export const invoicePatchValidator = getValidator(invoicePatchSchema, dataValidator)
export const invoicePatchResolver = resolve<Invoice, HookContext>({})

// Schema for allowed query properties
export const invoiceQueryProperties = Type.Pick(invoiceSchema, ['id', 'text'])
export const invoiceQuerySchema = Type.Intersect(
  [
    querySyntax(invoiceQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type InvoiceQuery = Static<typeof invoiceQuerySchema>
export const invoiceQueryValidator = getValidator(invoiceQuerySchema, queryValidator)
export const invoiceQueryResolver = resolve<InvoiceQuery, HookContext>({})
