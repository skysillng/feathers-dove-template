// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax, StringEnum } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { ShipdayService } from './shipday.class'

const OrderState = [
  'ACTIVE',
  'NOT_ASSIGNED',
  'NOT_ACCEPTED',
  'NOT_STARTED_YET',
  'STARTED',
  'PICKED_UP',
  'READY_TO_DELIVER',
  'ALREADY_DELIVERED',
  'FAILED_DELIVERY',
  'INCOMPLETE'
]
type OrderState = typeof OrderState

const customerSchema = Type.Object({
  name: Type.String(),
  address: Type.String(),
  phoneNumber: Type.String(),
  emailAddress: Type.String(),
  latitude: Type.Number(),
  longitude: Type.Number()
})
const vendorSchema = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  address: Type.String(),
  phoneNumber: Type.String(),
  latitude: Type.Number(),
  longitude: Type.Number()
})
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
const activityLogSchema = Type.Object({
  placementTime: Type.String({ format: 'date-time' }),
  expectedPickupTime: Type.String({ format: 'time' }),
  expectedDeliveryDate: Type.String({ format: 'date' }),
  expectedDeliveryTime: Type.String({ format: 'time' }),
  assignedTime: Type.String({ format: 'date-time' }),
  startTime: Type.String({ format: 'date-time' }),
  pickedUpTime: Type.String({ format: 'date-time' }),
  arrivedTime: Type.String({ format: 'date-time' }),
  deliveryTime: Type.String({ format: 'date-time' })
})
const costingSchema = Type.Object({
  totalCost: Type.String({ format: 'double' }),
  deliveryFee: Type.String({ format: 'double' }),
  tip: Type.String({ format: 'double' }),
  discountAmount: Type.String({ format: 'double' }),
  tax: Type.String({ format: 'double' }),
  cashTip: Type.String({ format: 'double' })
})
const orderItemSchema = Type.Object({
  name: Type.String(),
  quantity: Type.String(),
  unitPrice: Type.String({ format: 'int32' }),
  addOns: Type.Optional(Type.Array(Type.String())),
  details: Type.Optional(Type.String())
})
const orderStatusSchema = Type.Object({
  imcomplete: Type.Boolean(),
  accepted: Type.Boolean(),
  orderState: StringEnum(Object.values(OrderState))
})

// Main data model schema
export const shipdaySchema = Type.Object(
  {
    orderId: Type.Number(),
    orderNumber: Type.String(),
    companyId: Type.String(),
    areaId: Type.String(),
    customer: customerSchema,
    restaurant: vendorSchema,
    assignedCarrier: assignedCarrierSchema,
    distance: Type.String({ format: 'double' }),
    activityLog: activityLogSchema,
    costing: costingSchema,
    orderItem: Type.Array(orderItemSchema),
    assignedCarrierId: Type.String({ format: 'int32' }),
    orderStatus: orderStatusSchema,
    trackingLink: Type.String({ format: 'uri' }),
    feedback: Type.String(),
    schedule: Type.Boolean(),
    parentId: Type.String({ format: 'int32' }),
    etaTime: Type.String({ format: 'time' }),
    deliveryInstruction: Type.String()
  },
  { $id: 'Shipday', additionalProperties: false }
)
export type Shipday = Static<typeof shipdaySchema>
export const shipdayValidator = getValidator(shipdaySchema, dataValidator)
export const shipdayResolver = resolve<Shipday, HookContext<ShipdayService>>({})

export const shipdayExternalResolver = resolve<Shipday, HookContext<ShipdayService>>({})

// Schema for creating new entries
export const shipdayDataSchema = Type.Object(
  {
    orderNumber: Type.String(),
    customerName: Type.String(),
    customerAddress: Type.Optional(Type.String()),
    customerEmail: Type.String(),
    customerPhoneNumber: Type.String(),
    restaurantName: Type.String(),
    restaurantAddress: Type.Optional(Type.String()),
    restaurantPhoneNumber: Type.String(),
    expectedDeliveryDate: Type.Optional(Type.String()),
    expectedPickupTime: Type.Optional(Type.String()),
    expectedDeliveryTime: Type.Optional(Type.String()),
    pickupLatitude: Type.Optional(Type.Number()),
    pickupLongitude: Type.Optional(Type.Number()),
    deliveryLatitude: Type.Optional(Type.Number()),
    deliveryLongitude: Type.Optional(Type.Number()),
    orderItem: Type.Optional(Type.Array(orderItemSchema)),
    tips: Type.Optional(Type.Number()),
    tax: Type.Optional(Type.Number()),
    discountAmount: Type.Optional(Type.Number()),
    deliveryFee: Type.Optional(Type.Number()),
    totalOrderCost: Type.Optional(Type.Number()),
    deliveryInstruction: Type.Optional(Type.String()),
    assignedCarrierId: Type.Optional(Type.String({ format: 'int32' })),
    assignedCarrier: Type.Optional(assignedCarrierSchema)
  },
  {
    $id: 'ShipdayData'
  }
)
export type ShipdayData = Static<typeof shipdayDataSchema>
export const shipdayDataValidator = getValidator(shipdayDataSchema, dataValidator)
export const shipdayDataResolver = resolve<Shipday, HookContext<ShipdayService>>({})

// Schema for updating existing entries
export const shipdayPatchSchema = Type.Intersect(
  [
    Type.Object({
      orderId: Type.Number()
    }),
    shipdayDataSchema
  ],
  {
    $id: 'ShipdayPatch'
  }
)
export type ShipdayPatch = Static<typeof shipdayPatchSchema>
export const shipdayPatchValidator = getValidator(shipdayPatchSchema, dataValidator)
export const shipdayPatchResolver = resolve<Shipday, HookContext<ShipdayService>>({})

// Schema for allowed query properties
export const shipdayQueryProperties = Type.Pick(shipdaySchema, [])
export const shipdayQuerySchema = Type.Intersect(
  [
    querySyntax(shipdayQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type ShipdayQuery = Static<typeof shipdayQuerySchema>
export const shipdayQueryValidator = getValidator(shipdayQuerySchema, queryValidator)
export const shipdayQueryResolver = resolve<ShipdayQuery, HookContext<ShipdayService>>({})
