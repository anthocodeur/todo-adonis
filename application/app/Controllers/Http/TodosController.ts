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

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const todo = new Todo()
    todo.name = request.input('name')
    await todo.save()
  }

  public async show({ params }: HttpContextContract) {
    const todo = await Todo.find(params.id)
    return View.render('todos.show', {
      todo,
    })
  }

  public async edit({}: HttpContextContract) {}

  public async update({ params: { id }, request }: HttpContextContract) {
    const todo = await Todo.findOrFail(id)
    const data = request.body()
    todo
      .merge({
        ...data,
      })
      .save()
  }

  public async destroy({ params }: HttpContextContract) {
    const todo = await Todo.findOrFail(params.id)
    todo.delete()
  }
}
