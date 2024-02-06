// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const invoiceItemSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'InvoiceItem', additionalProperties: false }
)
export type InvoiceItem = Static<typeof invoiceItemSchema>
export const invoiceItemValidator = getValidator(invoiceItemSchema, dataValidator)
export const invoiceItemResolver = resolve<InvoiceItem, HookContext>({})

export const invoiceItemExternalResolver = resolve<InvoiceItem, HookContext>({})

// Schema for creating new entries
export const invoiceItemDataSchema = Type.Pick(invoiceItemSchema, ['text'], {
  $id: 'InvoiceItemData'
})
export type InvoiceItemData = Static<typeof invoiceItemDataSchema>
export const invoiceItemDataValidator = getValidator(invoiceItemDataSchema, dataValidator)
export const invoiceItemDataResolver = resolve<InvoiceItem, HookContext>({})

// Schema for updating existing entries
export const invoiceItemPatchSchema = Type.Partial(invoiceItemSchema, {
  $id: 'InvoiceItemPatch'
})
export type InvoiceItemPatch = Static<typeof invoiceItemPatchSchema>
export const invoiceItemPatchValidator = getValidator(invoiceItemPatchSchema, dataValidator)
export const invoiceItemPatchResolver = resolve<InvoiceItem, HookContext>({})

// Schema for allowed query properties
export const invoiceItemQueryProperties = Type.Pick(invoiceItemSchema, ['id', 'text'])
export const invoiceItemQuerySchema = Type.Intersect(
  [
    querySyntax(invoiceItemQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type InvoiceItemQuery = Static<typeof invoiceItemQuerySchema>
export const invoiceItemQueryValidator = getValidator(invoiceItemQuerySchema, queryValidator)
export const invoiceItemQueryResolver = resolve<InvoiceItemQuery, HookContext>({})
