import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { TodoFactory } from 'Database/factories/TodoFactory'

export default class TodoSeederSeeder extends BaseSeeder {
  public async run() {
    await TodoFactory.createMany(12)
  }
}
