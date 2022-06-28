import type { Response , Request} from 'express'
import  PatientModel from '../models/patient.model'

export default class PatientController {
  public async getPatients(_req: Request, res: Response) {
    const result = await new PatientModel().retrievePatients()
    return res.status(200).send(result)
  }
}
