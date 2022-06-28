import { Doctor } from '@prisma/client'
import type { Response, Request } from 'express'
import DoctorModel from '../models/doctor.model'

export default class DoctorController {
  public async getDoctors(_req: Request, res: Response) {
    const result = await new DoctorModel().retrieveDoctors()
    return res.status(200).send(result)
  }

  public async getDoctorById(
    req: Request<{ id: number }, unknown, Partial<Omit<Doctor, 'id'>>, unknown>,
    res: Response
  ) {
    const { id } = req.params
    const result = await new DoctorModel().retrieveDoctorById(id)
    return res.status(200).send(result)
  }

  public async createDoctor(
    req: Request<unknown, unknown, Doctor, unknown>,
    res: Response
  ) {
    const result = await new DoctorModel().createDoctor(req.body)
    return res.status(200).send(result)
  }

  public async editDoctor(
    req: Request<{ id: number }, unknown, Partial<Omit<Doctor, 'id'>>, unknown>,
    res: Response
  ) {
    const { id } = req.params
    const result = await new DoctorModel().editDoctor(id, req.body)
    return res.status(200).send(result)
  }

  public async deleteDoctor(
    req: Request<{ id: number }, unknown, unknown, unknown>,
    res: Response
  ) {
    const { id } = req.params
    const result = await new DoctorModel().deleteDoctor(id)
    return res.status(200).send(result)
  }
}
