import DoctorModel from '../doctor.model'
import { prismaMock } from '../../../helpers/singleton'

const MOCKED_DOCTORS = [
  {
    id: 1,
    name: 'Teste',
    crm: '22222',
    speciality: 'teste',
    user_id: 1,
  },
  {
    id: 2,
    name: 'Testessss',
    crm: '33333',
    speciality: 'testessss',
    user_id: 2,
  },
]

describe('Doctor Model', () => {
  it('findAll', async () => {
    const NewModel = new DoctorModel()
    prismaMock.doctor.findMany.mockResolvedValue(MOCKED_DOCTORS)

    const doctors = await NewModel.retrieveDoctors()
    expect(doctors).toHaveLength(2)
    expect(prismaMock.doctor.findMany.mock.calls).toHaveLength(1)
    doctors.forEach((doc, index) => expect(doc).toBe(MOCKED_DOCTORS[index]))
  })

  it('findUnique', async () => {
    const NewModel = new DoctorModel()
    prismaMock.doctor.findUnique.mockResolvedValue(MOCKED_DOCTORS[0])

    const result = await NewModel.retrieveDoctorById(MOCKED_DOCTORS[0].id)
    expect(prismaMock.doctor.findUnique.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_DOCTORS[0])
  })

  it('findAll', async () => {
    const NewModel = new DoctorModel()
    prismaMock.doctor.findMany.mockResolvedValue(MOCKED_DOCTORS)

    const doctors = await NewModel.retrieveDoctors()
    expect(doctors).toHaveLength(2)
    expect(prismaMock.doctor.findMany.mock.calls).toHaveLength(1)
    doctors.forEach((doc, index) => expect(doc).toBe(MOCKED_DOCTORS[index]))
  })

  it('findUnique', async () => {
    const NewModel = new DoctorModel()
    prismaMock.doctor.findUnique.mockResolvedValue(MOCKED_DOCTORS[0])

    const result = await NewModel.retrieveDoctorById(MOCKED_DOCTORS[0].id)
    expect(prismaMock.doctor.findUnique.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_DOCTORS[0])
  })

  it('delete', async () => {
    const NewModel = new DoctorModel()
    prismaMock.doctor.delete.mockResolvedValue(MOCKED_DOCTORS[0])

    const result = await NewModel.deleteDoctor(MOCKED_DOCTORS[0].id)
    expect(prismaMock.doctor.delete.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_DOCTORS[0])
  })

  it('create', async () => {
    const NewModel = new DoctorModel()
    prismaMock.doctor.create.mockResolvedValue(MOCKED_DOCTORS[0])

    const result = await NewModel.createDoctor(MOCKED_DOCTORS[0])
    expect(prismaMock.doctor.create.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_DOCTORS[0])
  })
})
