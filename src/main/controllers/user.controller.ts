import type { Response, Request } from 'express'
import UserModel from '../models/user.model'

export default class UserController {
  public async getUsers(_req: Request, res: Response) {
    const result = await new UserModel().retrievePatients()
    return res.status(200).send(result)
  }

  public async getUser(
    req: Request<{ id: number }, unknown, unknown, unknown>,
    res: Response
  ) {
    const { id } = req.params
    if (!id) throw new Error('Um id deve ser enviado')

    const result = await new UserModel().retrievePatientById(id)
    return res.status(200).send(result)
  }
}
