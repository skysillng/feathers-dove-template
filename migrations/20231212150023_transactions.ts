// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'
import { TransactionState } from '../src/services/transaction/transaction.schema'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transaction', (table) => {
    table.string('id', 32).primary()
    table.string('objectId')
    table.string('objectType')
    table.double('amount', 19, 4)
    table.string('currency', 3)
    table.enum('status', Object.values(TransactionState)).defaultTo('pending')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transaction')
}
