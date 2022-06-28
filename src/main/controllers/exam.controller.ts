import { Exam } from '@prisma/client'
import type { Response, Request } from 'express'
import ExamModel from '../models/exam.model'

export default class ExamController {
  public async getExams(_req: Request, res: Response) {
    const result = await new ExamModel().retrieveExams()
    return res.status(200).send(result)
  }

  public async getExamById(
    req: Request<{ id: number }, unknown, unknown, unknown>,
    res: Response
  ) {
    const { id } = req.params
    const result = await new ExamModel().retrieveExamById(id)
    return res.status(200).send(result)
  }

  public async createExam(
    req: Request<unknown, unknown, Exam, unknown>,
    res: Response
  ) {
    const result = await new ExamModel().createExam(req.body)
    return res.status(200).send(result)
  }

  public async editExam(
    req: Request<{ id: number }, unknown, Partial<Omit<Exam, 'id'>>, unknown>,
    res: Response
  ) {
    const { id } = req.params
    const result = await new ExamModel().editExam(id, req.body)
    return res.status(200).send(result)
  }

  public async deleteExam(
    req: Request<{ id: number }, unknown, unknown, unknown>,
    res: Response
  ) {
    const { id } = req.params
    const result = await new ExamModel().deleteExam(id)
    return res.status(200).send(result)
  }

  public async getPatientExams(
    req: Request<{ id: number }, unknown, unknown, unknown>,
    res: Response
  ) {
    const { id } = req.params
    const result = await new ExamModel().retrievePatientExams(id)
    return res.status(200).send(result)
  }
}
