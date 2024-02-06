// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'
import { BusinessSize } from '../src/services/business/business.shared'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('business', (table) => {
    table.string('id', 16).primary()
    table.string('userId', 16)
    table.string('name')
    table.enum('size', Object.values(BusinessSize))
    table.timestamps(false, true, true)

    table.foreign('userId').references('user.id').onDelete('cascade')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('business')
}
