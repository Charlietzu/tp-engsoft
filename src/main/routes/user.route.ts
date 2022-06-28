import type { Router } from 'express'
import UserController from '../controllers/user.controller'

export default class UserRoute {
  private routes: Router
  private controller: UserController
  constructor(routes: Router, controller: UserController) {
    this.routes = routes
    this.controller = controller
  }
  public buildRoutes() {
    this.routes.get('/users', this.controller.getUsers)
    this.routes.get('/user/:id', this.controller.getUser)
  }
}
