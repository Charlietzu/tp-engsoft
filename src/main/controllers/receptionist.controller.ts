import { Receptionist } from '@prisma/client'
import type { Response, Request } from 'express'
import ReceptionistModel from '../models/receptionist.model'

export default class ReceptionistController {
  public async getReceptionists(_req: Request, res: Response) {
    const result = await new ReceptionistModel().retrieveReceptionists()
    return res.status(200).send(result)
  }

  public async getReceptionistById(
    req: Request<
      { id: number },
      unknown,
      Partial<Omit<Receptionist, 'id'>>,
      unknown
    >,
    res: Response
  ) {
    const { id } = req.params
    const result = await new ReceptionistModel().retrieveReceptionistById(id)
    return res.status(200).send(result)
  }

  public async createReceptionist(
    req: Request<unknown, unknown, Receptionist, unknown>,
    res: Response
  ) {
    const result = await new ReceptionistModel().createReceptionist(req.body)
    return res.status(200).send(result)
  }

  public async editReceptionist(
    req: Request<
      { id: number },
      unknown,
      Partial<Omit<Receptionist, 'id'>>,
      unknown
    >,
    res: Response
  ) {
    const { id } = req.params
    const result = await new ReceptionistModel().editReceptionist(id, req.body)
    return res.status(200).send(result)
  }

  public async deleteReceptionist(
    req: Request<{ id: number }, unknown, unknown, unknown>,
    res: Response
  ) {
    const { id } = req.params
    const result = await new ReceptionistModel().deleteReceptionist(id)
    return res.status(200).send(result)
  }
}
