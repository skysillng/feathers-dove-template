// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('estimate-cache', (table) => {
    table.increments('id')
    table.string('origin')
    table.string('destination')
    table.integer('distance')
    table.string('etaTime')

    table.unique(['origin', 'destination'], { indexName: 'origin_destination_ukey' })
    table.unique(['destination', 'origin'], { indexName: 'destination_origin_ukey' })

    table.timestamps(false, true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('estimate-cache')
}
