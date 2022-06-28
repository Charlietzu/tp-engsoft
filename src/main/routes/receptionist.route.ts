import type { Router } from 'express'
import ReceptionistController from '../controllers/receptionist.controller'

export default class ReceptionistRoute {
  private routes: Router
  private controller: ReceptionistController

  constructor(routes: Router, controller: ReceptionistController) {
    this.routes = routes
    this.controller = controller
  }
  public buildRoutes() {
    this.routes.get('/Receptionists', this.controller.getReceptionists)
    this.routes.get('/Receptionist/:id', this.controller.getReceptionistById)
    this.routes.post('/Receptionist', this.controller.createReceptionist)
    this.routes.put('/Receptionist/:id', this.controller.editReceptionist)
    this.routes.delete('/Receptionist/:id', this.controller.deleteReceptionist)
  }
}
