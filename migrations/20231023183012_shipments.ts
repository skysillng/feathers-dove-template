// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'
import { ShipmentStatus } from '../src/services/shipment/shipment.schema'
import { ShipmentItemSize } from '../src/services/shipment/shipment.shared'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('shipment', (table) => {
    table.string('id', 16).primary()
    table
      .string('userId', 16)
      .comment('The user ID of the user this shipment is shared with')
    table.string('transactionId', 32).nullable()
    table.string('carrierId', 32).nullable()
    table.enum('status', Object.values(ShipmentStatus)).nullable()
    table.json('pickup').comment('Json object containing pickup  info')
    table.json('delivery').comment('Json object containing delivery info')
    table.string('category')
    table.string('other').nullable()
    table.enum('size', Object.keys(ShipmentItemSize))
    table.json('items').comment('Json column containe otems info')
    table.string('etaTime').comment('The estimated time of arrival of the shipment')
    table.decimal('deliveryFee', 19, 4)
    table.decimal('tax', 19, 4)
    table.decimal('tip', 19, 4).defaultTo(0)
    table.json('carrier').nullable()
    table.timestamps(false, true, true)

    table.foreign('userId').references('user.id');
    table.foreign('transactionId').references('transaction.id');
    table.foreign('category').references('category.category');
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('shipment')
}
