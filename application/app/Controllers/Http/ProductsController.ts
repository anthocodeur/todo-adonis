// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import View from '@ioc:Adonis/Core/View'

export default class ProductsController {
  // Return all products from DB
  public async index() {
    const products = [
      {
        id: 1,
        title: 'Hello world',
      },
      {
        id: 2,
        title: 'Hello universe',
      },
    ]
    return View.render('products.index', { products })
  }
  // Return one product from DB
  public async show() {
    const product = {
      id: 4,
      title: 'Mon produit 6',
    }

    return View.render('products.show', { product })
  }
}
