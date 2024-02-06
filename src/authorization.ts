// src/services/authentication/authentication.abilities.ts
import { AbilityBuilder, createAliasResolver, createMongoAbility } from '@casl/ability'
import { authorize } from 'feathers-casl'
import { HookContext } from './declarations'

// don't forget this, as `read` is used internally
const resolveAction = createAliasResolver({
  update: 'patch', // define the same rules for update & patch
  read: ['get', 'find'], // use 'read' as a equivalent for 'get' & 'find'
  delete: 'remove' // use 'delete' or 'remove'
})

export const defineAbilitiesFor = (user: any) => {
  // also see https://casl.js.org/v6/en/guide/define-rules
  const { can, cannot, rules, build } = new AbilityBuilder(createMongoAbility)

  can('create', 'user')
  /** Business */
  can('create', 'business')
  can('estimate', 'shipment')
  /** Flutterwave */
  can('create', 'flutterwave')
  /** Shipday */
  can(['read'], 'shipday')
  /** Category */
  can('read', 'category')

  if (user) {
    /** Users */
    //if (user.role && user.role.name === 'SuperAdmin') {
    //  // SuperAdmin can do evil
    //  can('manage', 'all')
    //  return rules
    //}

    //if (user.role && user.role.name === 'Admin') {
    //  can('create', 'user')
    //}
    can(['read', 'update'], 'user', { id: user.id })
    //cannot('update', 'user', ['roleId'], { id: user.id })
    cannot('delete', 'user', { id: user.id })

    /** Shipment */
    can('create', 'shipment')
    can(['read', 'update', 'pay', 'verifyPayment'], 'shipment', { userId: user.id })
    cannot(
      'update',
      'shipment',
      ['userId', 'paymentStatus', 'shipmentStatus', 'deliveryFee', 'tax', 'etaTime'],
      { userId: user.id }
    )
    cannot('delete', 'shipment')

    /** Business */
    can('manage', 'business')

    /** Transactions */
    can('verify', 'transaction')
    can('read', 'transaction')

    //can('manage', 'tasks', { userId: user.id })
    //can('create-multi', 'posts', { userId: user.id })
  }

  return createMongoAbility(rules, { resolveAction })
}

export const authorizeHook = async (context: HookContext) => {
  console.log(`Running hook authorize on ${context.path}.${context.method}`)
  // if (!context.params.ability) {
  const { user } = context.params
  // if (user) {
  const ability = defineAbilitiesFor(user)
  context.params.ability = ability
  //context.params.rules = ability.rules
  // }
  // }

  await authorize({ adapter: '@feathersjs/knex' })(context)
}
