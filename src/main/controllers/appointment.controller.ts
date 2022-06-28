import { Appointment } from '@prisma/client'
import type { Response, Request } from 'express'
import AppointmentModel from '../models/appointment.model'

export default class AppointmentController {
  public async getAppointments(_req: Request, res: Response) {
    const result = await new AppointmentModel().retrieveAppointments()
    return res.status(200).send(result)
  }

  public async getAppointmentById(
    req: Request<
      { id: number },
      unknown,
      Partial<Omit<Appointment, 'id'>>,
      unknown
    >,
    res: Response
  ) {
    const { id } = req.params
    const result = await new AppointmentModel().retrieveAppointmentById(id)
    return res.status(200).send(result)
  }

  public async getPatientAppointments(
    req: Request<{ id: number }, unknown, unknown, unknown>,
    res: Response
  ) {
    const { id } = req.params
    const result = await new AppointmentModel().retrievePatientAppointments(id)
    return res.status(200).send(result)
  }

  public async createAppointment(
    req: Request<unknown, unknown, Appointment, unknown>,
    res: Response
  ) {
    const result = await new AppointmentModel().createAppointment(req.body)
    return res.status(200).send(result)
  }

  public async editAppointment(
    req: Request<
      { id: number },
      unknown,
      Partial<Omit<Appointment, 'id'>>,
      unknown
    >,
    res: Response
  ) {
    const { id } = req.params
    const result = await new AppointmentModel().editAppointment(id, req.body)
    return res.status(200).send(result)
  }

  public async deleteAppointment(
    req: Request<{ id: number }, unknown, unknown, unknown>,
    res: Response
  ) {
    const { id } = req.params
    const result = await new AppointmentModel().deleteAppointment(id)
    return res.status(200).send(result)
  }
}
