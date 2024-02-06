// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('user', (table) => {
    table.string('id', 16).primary()
    table.string('firstname').nullable()
    table.string('lastname').nullable()
    table.string('mobile').unique()
    table.datetime('mobileVerifiedAt')
    table.string('email').unique()
    table.dateTime('emailVerifiedAt')
    table.string('password')
    table.string('passphrase').comment('Secret text or phrases sequence only the user should know.')
    table.timestamps(false, true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('user')
}
