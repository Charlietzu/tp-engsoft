import { prismaMock } from '../../../helpers/singleton'
import { Receptionist } from '@prisma/client'
import ReceptionistModel from '../receptionist.model'

const MOCKED_RECEPTIONISTS: Receptionist[] = [
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

describe('Receptionist Model', () => {
  it('findAll', async () => {
    const NewModel = new ReceptionistModel()
    prismaMock.receptionist.findMany.mockResolvedValue(MOCKED_RECEPTIONISTS)

    const result = await NewModel.retrieveReceptionists()
    expect(result).toHaveLength(2)
    expect(prismaMock.receptionist.findMany.mock.calls).toHaveLength(1)
    result.forEach((rec, index) =>
      expect(rec).toBe(MOCKED_RECEPTIONISTS[index])
    )
  })

  it('findUnique', async () => {
    const NewModel = new ReceptionistModel()
    prismaMock.receptionist.findUnique.mockResolvedValue(
      MOCKED_RECEPTIONISTS[0]
    )

    const result = await NewModel.retrieveReceptionistById(
      MOCKED_RECEPTIONISTS[0].id
    )
    expect(prismaMock.receptionist.findUnique.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_RECEPTIONISTS[0])
  })

  it('findAll', async () => {
    const NewModel = new ReceptionistModel()
    prismaMock.receptionist.findMany.mockResolvedValue(MOCKED_RECEPTIONISTS)

    const result = await NewModel.retrieveReceptionists()
    expect(result).toHaveLength(2)
    expect(prismaMock.receptionist.findMany.mock.calls).toHaveLength(1)
    result.forEach((doc, index) =>
      expect(doc).toBe(MOCKED_RECEPTIONISTS[index])
    )
  })

  it('findUnique', async () => {
    const NewModel = new ReceptionistModel()
    prismaMock.receptionist.findUnique.mockResolvedValue(
      MOCKED_RECEPTIONISTS[0]
    )

    const result = await NewModel.retrieveReceptionistById(
      MOCKED_RECEPTIONISTS[0].id
    )
    expect(prismaMock.receptionist.findUnique.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_RECEPTIONISTS[0])
  })

  it('delete', async () => {
    const NewModel = new ReceptionistModel()
    prismaMock.receptionist.delete.mockResolvedValue(MOCKED_RECEPTIONISTS[0])

    const result = await NewModel.deleteReceptionist(MOCKED_RECEPTIONISTS[0].id)
    expect(prismaMock.receptionist.delete.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_RECEPTIONISTS[0])
  })

  it('create', async () => {
    const NewModel = new ReceptionistModel()
    prismaMock.receptionist.create.mockResolvedValue(MOCKED_RECEPTIONISTS[0])

    const result = await NewModel.createReceptionist(MOCKED_RECEPTIONISTS[0])
    expect(prismaMock.receptionist.create.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_RECEPTIONISTS[0])
  })
})
