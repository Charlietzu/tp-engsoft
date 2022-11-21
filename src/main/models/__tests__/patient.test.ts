import { prismaMock } from '../../../helpers/singleton'
import { Patient } from '@prisma/client'
import PatientModel from '../patient.model'

const MOCKED_PATIENTS: Patient[] = [
  {
    id: 1,
    name: 'Test',
    cpf: '2232323233',
    user_id: 1,
  },
  {
    id: 2,
    name: 'Test',
    cpf: '222222222',
    user_id: 3,
  },
]

describe('Patient Model', () => {
  it('findAll', async () => {
    const NewModel = new PatientModel()
    prismaMock.patient.findMany.mockResolvedValue(MOCKED_PATIENTS)

    const result = await NewModel.retrievePatients()
    expect(result).toHaveLength(2)
    expect(prismaMock.patient.findMany.mock.calls).toHaveLength(1)
    result.forEach((pat, index) => expect(pat).toBe(MOCKED_PATIENTS[index]))
  })

  it('findUnique', async () => {
    const NewModel = new PatientModel()
    prismaMock.patient.findUnique.mockResolvedValue(MOCKED_PATIENTS[0])

    const result = await NewModel.retrievePatientById(MOCKED_PATIENTS[0].id)
    expect(prismaMock.patient.findUnique.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_PATIENTS[0])
  })

  it('findAll', async () => {
    const NewModel = new PatientModel()
    prismaMock.patient.findMany.mockResolvedValue(MOCKED_PATIENTS)

    const result = await NewModel.retrievePatients()
    expect(result).toHaveLength(2)
    expect(prismaMock.patient.findMany.mock.calls).toHaveLength(1)
    result.forEach((doc, index) => expect(doc).toBe(MOCKED_PATIENTS[index]))
  })

  it('findUnique', async () => {
    const NewModel = new PatientModel()
    prismaMock.patient.findUnique.mockResolvedValue(MOCKED_PATIENTS[0])

    const result = await NewModel.retrievePatientById(MOCKED_PATIENTS[0].id)
    expect(prismaMock.patient.findUnique.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_PATIENTS[0])
  })

  it('delete', async () => {
    const NewModel = new PatientModel()
    prismaMock.patient.delete.mockResolvedValue(MOCKED_PATIENTS[0])

    const result = await NewModel.deletePatient(MOCKED_PATIENTS[0].id)
    expect(prismaMock.patient.delete.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_PATIENTS[0])
  })

  it('create', async () => {
    const NewModel = new PatientModel()
    prismaMock.patient.create.mockResolvedValue(MOCKED_PATIENTS[0])

    const result = await NewModel.createPatient(MOCKED_PATIENTS[0])
    expect(prismaMock.patient.create.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_PATIENTS[0])
  })
})
