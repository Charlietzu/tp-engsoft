import type { Express, Router } from 'express'
import PatientController from './controllers/patient.controller'
import PatientRoute from './routes/patient.route'

export default class App {
  app: Express
  router: Router
  constructor(app: Express, router: Router) {
    this.app = app
    this.router = router
  }
  private setupRoutes() {
    const patientRoute = new PatientRoute(this.router, new PatientController())
    patientRoute.buildRoutes()
  }

  public run() {
    this.setupRoutes()
    this.app.use(this.router)
    this.app.listen(3000, () =>
      console.log('🚀 Server ready at: http://localhost:3000')
    )
  }
}
