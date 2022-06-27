import type { Router } from 'express'
import PatientController from '../controllers/patient.controller'

export default class PatientRoute {
  private routes: Router
  private controller: PatientController
  constructor(routes: Router, controller: PatientController) {
    this.routes = routes
    this.controller = controller
  }
  public buildRoutes() {
    this.routes.get('/patients', this.controller.getPatients)
  }
}
