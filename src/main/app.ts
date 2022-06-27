import type { Express } from 'express'
import PatientController from './controllers/patient.controller'
import { PatientModel } from './models/patient.model'
import PatientRoute from './routes/patient.route'

export default class App {
  app: Express
  constructor(app: Express) {
    this.app = app
  }
  public setupRoutes() {
    const patientRoute = new PatientRoute(
      this.app.routes,
      new PatientController(new PatientModel())
    )
    patientRoute.buildRoutes()
  }

  public run() {
    this.app.listen(3000, () =>
      console.log('🚀 Server ready at: http://localhost:3000')
    )
  }
}
