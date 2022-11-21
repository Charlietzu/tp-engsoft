import { prismaMock } from '../../../helpers/singleton'
import { Exam } from '@prisma/client'
import ExamModel from '../exam.model'

const MOCKED_EXAMS: Exam[] = [
  {
    id: 1,
    created_at: new Date(),
    doctor_id: 1,
    patient_id: 1,
    receptionist_id: 1,
    result: 'RESULT 1',
  },
  {
    id: 2,
    created_at: new Date(),
    doctor_id: 2,
    patient_id: 2,
    receptionist_id: 2,
    result: 'RESULT 2',
  },
]

describe('Exam Model', () => {
  it('findAll', async () => {
    const NewModel = new ExamModel()
    prismaMock.exam.findMany.mockResolvedValue(MOCKED_EXAMS)

    const result = await NewModel.retrieveExams()
    expect(result).toHaveLength(2)
    expect(prismaMock.exam.findMany.mock.calls).toHaveLength(1)
    result.forEach((doc, index) => expect(doc).toBe(MOCKED_EXAMS[index]))
  })

  it('findUnique', async () => {
    const NewModel = new ExamModel()
    prismaMock.exam.findUnique.mockResolvedValue(MOCKED_EXAMS[0])

    const result = await NewModel.retrieveExamById(MOCKED_EXAMS[0].id)
    expect(prismaMock.exam.findUnique.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_EXAMS[0])
  })

  it('findAll', async () => {
    const NewModel = new ExamModel()
    prismaMock.exam.findMany.mockResolvedValue(MOCKED_EXAMS)

    const result = await NewModel.retrieveExams()
    expect(result).toHaveLength(2)
    expect(prismaMock.exam.findMany.mock.calls).toHaveLength(1)
    result.forEach((doc, index) => expect(doc).toBe(MOCKED_EXAMS[index]))
  })

  it('findUnique', async () => {
    const NewModel = new ExamModel()
    prismaMock.exam.findUnique.mockResolvedValue(MOCKED_EXAMS[0])

    const result = await NewModel.retrieveExamById(MOCKED_EXAMS[0].id)
    expect(prismaMock.exam.findUnique.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_EXAMS[0])
  })

  it('delete', async () => {
    const NewModel = new ExamModel()
    prismaMock.exam.delete.mockResolvedValue(MOCKED_EXAMS[0])

    const result = await NewModel.deleteExam(MOCKED_EXAMS[0].id)
    expect(prismaMock.exam.delete.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_EXAMS[0])
  })

  it('create', async () => {
    const NewModel = new ExamModel()
    prismaMock.exam.create.mockResolvedValue(MOCKED_EXAMS[0])

    const result = await NewModel.createExam(MOCKED_EXAMS[0])
    expect(prismaMock.exam.create.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_EXAMS[0])
  })
})
