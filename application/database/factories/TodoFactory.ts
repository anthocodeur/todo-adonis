import Todo from 'App/Models/Todo'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const TodoFactory = Factory.define(Todo, ({ faker }) => {
  return {
    name: faker.lorem.sentence(),
    description: faker.lorem.sentence(150),
  }
}).build()
