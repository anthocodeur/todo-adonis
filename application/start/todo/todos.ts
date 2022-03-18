import Route from '@ioc:Adonis/Core/Route'

Route.get('/todos', 'TodosController.index').as('todos.index')

Route.get('/todos/create', 'TodosController.create').as('todos.create')
Route.post('/todos/create', 'TodosController.store').as('todos.store')

Route.get('/todos/edit/:id', 'TodosController.edit').as('todos.edit')
Route.post('/todos/edit/:id', 'TodosController.update').as('todos.update')

Route.get('/todo/:id', 'TodosController.show').as('todos.show')
Route.delete('/todo/:id', 'TodosController.destroy').as('todos.destroy')
