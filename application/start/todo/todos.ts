import Route from '@ioc:Adonis/Core/Route'

Route.get('/todos', 'TodosController.index').as('todos.index')
Route.get('/todo/:id', 'TodosController.show').as('todos.show')
Route.post('/todo', 'TodosController.store').as('todos.store')
Route.patch('/todo/:id', 'TodosController.update').as('todos.update')
Route.delete('/todo/:id', 'TodosController.destroy').as('todos.destroy')
