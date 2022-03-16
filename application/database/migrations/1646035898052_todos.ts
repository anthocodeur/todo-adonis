import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Todos extends BaseSchema {
  protected tableName = 'todos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.text('description').notNullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
