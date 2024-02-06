// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax, StringEnum } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import { nanoid } from 'nanoid'
import { transactionSchema, TransactionState } from '../transaction/transaction.schema'
import { ShipmentItemSize } from './shipment.shared'

export const ShipmentStatus = {
  ACTIVE: 'ACTIVE',
  NOT_ASSIGNED: 'NOT_ASSIGNED',
  NOT_ACCEPTED: 'NOT_ACCEPTED',
  NOT_STARTED_YET: 'NOT_STARTED_YET',
  STARTED: 'STARTED',
  PICKED_UP: 'PICKED_UP',
  READY_TO_DELIVER: 'READY_TO_DELIVER',
  ALREADY_DELIVERED: 'ALREADY_DELIVERED',
  FAILED_DELIVERY: 'FAILED_DELIVERY',
  INCOMPLETE: 'INCOMPLETE'
} as const
export type ShipmentStatus = typeof ShipmentStatus

const geopointSchema = Type.Object({
  lat: Type.Number(),
  lng: Type.Number()
})

const locationSchema = Type.Object({
  name: Type.String(),
  phone: Type.String(),
  email: Type.Optional(Type.String()),
  address: Type.String(),
  city: Type.String(),
  state: Type.String(),
  postalCode: Type.String(),
  geopoint: geopointSchema
})

const carrierId = Type.String()
const assignedCarrierSchema = Type.Object({
  id: Type.Integer(),
  personalId: Type.Integer(),
  name: Type.String(),
  codeName: Type.String(),
  phoneNumber: Type.String(),
  companyId: Type.Integer(),
  areaId: Type.Integer(),
  isOnShift: Type.Boolean(),
  email: Type.String(),
  carrierPhoto: Type.String(),
  isActive: Type.Boolean()
})
// Main data model schema
export const shipmentSchema = Type.Object(
  {
    id: Type.String({ maxLength: 16 }),
    userId: Type.String({ maxLength: 16 }),
    status: Type.Optional(StringEnum(Object.values(ShipmentStatus))),
    pickup: Type.Object({
      ...locationSchema.properties,
      date: Type.String(),
      instruction: Type.String()
    }),
    delivery: locationSchema,
    category: Type.String(),
    other: Type.Optional(Type.String()),
    size: StringEnum(Object.keys(ShipmentItemSize)),
    items: Type.Optional(
      Type.Array(
        Type.Object({
          detail: Type.String(),
          quantity: Type.Union([Type.String({ format: 'int32' }), Type.Integer()])
        })
      )
    ),
    etaTime: Type.String({ format: 'time' }),
    deliveryFee: Type.Union([Type.String({ format: 'double' }), Type.Number()]),
    tax: Type.Union([Type.String({ format: 'double' }), Type.Number()]),
    tip: Type.Union([Type.String({ format: 'double' }), Type.Number()]),
    total: Type.String(),
    createdAt: Type.String({ format: 'date-time' }),
    updatedAt: Type.String({ format: 'date-time' }),
    transactionId: Type.Optional(Type.String()),
    transaction: Type.Optional(Type.Object({ ...transactionSchema.properties })),
    carrierId: Type.Optional(carrierId),
    carrier: Type.Optional(assignedCarrierSchema)
  },
  { $id: 'Shipment', additionalProperties: false }
)
export type Shipment = Static<typeof shipmentSchema>
export const shipmentValidator = getValidator(shipmentSchema, dataValidator)
export const shipmentResolver = resolve<Shipment, HookContext>({
  pickup: async (value: any) => (typeof value === 'string' ? JSON.parse(value) : value),
  delivery: async (value: any) => (typeof value === 'string' ? JSON.parse(value) : value),
  total: virtual(async (shipment, context) =>
    ((shipment.deliveryFee as number) + (shipment.tax as number) + (shipment.tip as number)).toString()
  ),
  transaction: virtual(async (shipment, context) => {
    return shipment.transactionId
      ? context.app.service('transaction')._get(shipment.transactionId)
      : undefined
  })
})
export const shipmentExternalResolver = resolve<Shipment, HookContext>({})

// Schema for creating new entries
export const shipmentDataSchema = Type.Pick(
  shipmentSchema,
  ['pickup', 'delivery', 'category', 'other', 'items', 'size', 'tip'],
  {
    $id: 'ShipmentData'
  }
)
export type ShipmentData = Static<typeof shipmentDataSchema>
export const shipmentDataValidator = getValidator(shipmentDataSchema, dataValidator)
export const shipmentDataResolver = resolve<Shipment, HookContext>({
  id: async () => {
    const { customAlphabet } = require('nanoid')
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const nanoid = customAlphabet(alphabet, 10)
    return 'TS_' + nanoid()
  },
  userId: async (value: any, shipment: any, context: HookContext) => {
    if (!value && context.params.user) return context.params.user.id

    return value
  }
})

// Schema for updating existing entries
export const shipmentPatchSchema = Type.Partial(Type.Omit(shipmentSchema, ['id', 'items']), {
  $id: 'ShipmentPatch'
})
export type ShipmentPatch = Static<typeof shipmentPatchSchema>
export const shipmentPatchValidator = getValidator(shipmentPatchSchema, dataValidator)
export const shipmentPatchResolver = resolve<Shipment, HookContext>({})

// Schema for estimating shipment distance and price
export const shipmentEstimateSchema = Type.Object(
  {
    origin: geopointSchema,
    destination: geopointSchema,
    size: Type.String(),
    orderCount: Type.Optional(Type.Number()),
    userId: Type.Optional(Type.String())
  },
  { $id: 'ShipmentEstimate', additionalProperties: false }
)
export type ShipmentEstimate = Static<typeof shipmentEstimateSchema>
export const shipmentEstimateValidator = getValidator(shipmentEstimateSchema, dataValidator)
export const shipmentEstimateResolver = resolve<ShipmentEstimate, HookContext>({
  userId: async (value: any, shipment: any, context: HookContext) => {
    if (!value && context.params.user) return context.params.user.id

    return value
  }
})

// Schema initiating shipment payment
export const shipmentPay = Type.Object(
  { shipmentId: Type.String(), redirect_url: Type.String() },
  { $id: 'ShipmentPay', additionalProperties: false }
)
export type ShipmentPay = Static<typeof shipmentPay>
export const shipmentPayValidator = getValidator(shipmentPay, dataValidator)
export const shipmentPayResolver = resolve<ShipmentPay, HookContext>({})

// Schema for allowed query properties
export const shipmentQueryProperties = Type.Omit(shipmentSchema, [])
export const shipmentQuerySchema = Type.Intersect(
  [
    querySyntax(shipmentQueryProperties),
    // Add additional query properties here
    Type.Object({})
  ],
  { additionalProperties: false }
)
export type ShipmentQuery = Static<typeof shipmentQuerySchema>
export const shipmentQueryValidator = getValidator(shipmentQuerySchema, queryValidator)
export const shipmentQueryResolver = resolve<ShipmentQuery, HookContext>({})
