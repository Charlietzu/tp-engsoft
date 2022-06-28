import { Patient } from '@prisma/client'
import type { Response, Request } from 'express'
import PatientModel from '../models/patient.model'

export default class PatientController {
  public async getPatients(_req: Request, res: Response) {
    const result = await new PatientModel().retrievePatients()
    return res.status(200).send(result)
  }

  public async getPatientById(
    req: Request<
      { id: number },
      unknown,
      Partial<Omit<Patient, 'id'>>,
      unknown
    >,
    res: Response
  ) {
    const { id } = req.params
    const result = await new PatientModel().retrievePatientById(id)
    return res.status(200).send(result)
  }

  public async createPatient(
    req: Request<unknown, unknown, Patient, unknown>,
    res: Response
  ) {
    const result = await new PatientModel().createPatient(req.body)
    return res.status(200).send(result)
  }

  public async editPatient(
    req: Request<
      { id: number },
      unknown,
      Partial<Omit<Patient, 'id'>>,
      unknown
    >,
    res: Response
  ) {
    const { id } = req.params
    const result = await new PatientModel().editPatient(id, req.body)
    return res.status(200).send(result)
  }

  public async deletePatient(
    req: Request<{ id: number }, unknown, unknown, unknown>,
    res: Response
  ) {
    const { id } = req.params
    const result = await new PatientModel().deletePatient(id)
    return res.status(200).send(result)
  }
}
