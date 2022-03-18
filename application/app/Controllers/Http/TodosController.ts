import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import Todo from 'App/Models/Todo'

export default class TodosController {
  public async index({}: HttpContextContract) {
    const todos = await Todo.all()
    return View.render('todos.index', {
      todos,
    })
  }

  public async create({}: HttpContextContract) {
    return View.render('todos.create')
  }

  public async store({ request, response }: HttpContextContract) {
    //return request
    const todo = new Todo()
    todo.name = request.input('name')
    todo.description = request.input('description')
    await todo.save()
    response.redirect().toRoute('todos.show', [todo.id])
  }

  public async show({ params }: HttpContextContract) {
    const todo = await Todo.find(params.id)
    return View.render('todos.show', {
      todo,
    })
  }

  public async edit({ params: { id } }: HttpContextContract) {
    const todo = await Todo.findOrFail(id)
    return View.render('todos.edit', {
      todo,
    })
  }

  public async update({ params: { id }, request, response }: HttpContextContract) {
    const todo = await Todo.findOrFail(id)
    const data = request.body()
    todo
      .merge({
        ...data,
      })
      .save()
    response.redirect().toRoute('todos.show', [todo.id])
  }

  public async destroy({ params }: HttpContextContract) {
    const todo = await Todo.findOrFail(params.id)
    todo.delete()
  }
}
