import { prismaMock } from '../../../helpers/singleton'
import UserModel from '../user.model'
import { User } from '@prisma/client'
const MOCKED_USERS: User[] = [
  {
    id: 1,
    name: 'Teste',
    role: 'DOCTOR',
  },
  {
    id: 2,
    name: 'Testessss',
    role: 'RECEPTIONIST',
  },
]

describe('User Model', () => {
  it('findAll', async () => {
    const NewModel = new UserModel()
    prismaMock.user.findMany.mockResolvedValue(MOCKED_USERS)

    const result = await NewModel.retrieveUsers()
    expect(result).toHaveLength(2)
    expect(prismaMock.user.findMany.mock.calls).toHaveLength(1)
    result.forEach((user, index) => expect(user).toBe(MOCKED_USERS[index]))
  })

  it('findUnique', async () => {
    const NewModel = new UserModel()
    prismaMock.user.findUnique.mockResolvedValue(MOCKED_USERS[0])

    const result = await NewModel.retrieveUserById(MOCKED_USERS[0].id)
    expect(prismaMock.user.findUnique.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_USERS[0])
  })

  it('findAll', async () => {
    const NewModel = new UserModel()
    prismaMock.user.findMany.mockResolvedValue(MOCKED_USERS)

    const doctors = await NewModel.retrieveUsers()
    expect(doctors).toHaveLength(2)
    expect(prismaMock.user.findMany.mock.calls).toHaveLength(1)
    doctors.forEach((doc, index) => expect(doc).toBe(MOCKED_USERS[index]))
  })

  it('findUnique', async () => {
    const NewModel = new UserModel()
    prismaMock.user.findUnique.mockResolvedValue(MOCKED_USERS[0])

    const result = await NewModel.retrieveUserById(MOCKED_USERS[0].id)
    expect(prismaMock.user.findUnique.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_USERS[0])
  })

  it('delete', async () => {
    const NewModel = new UserModel()
    prismaMock.user.delete.mockResolvedValue(MOCKED_USERS[0])

    const result = await NewModel.deleteUser(MOCKED_USERS[0].id)
    expect(prismaMock.user.delete.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_USERS[0])
  })

  it('create', async () => {
    const NewModel = new UserModel()
    prismaMock.user.create.mockResolvedValue(MOCKED_USERS[0])

    const result = await NewModel.createUser(MOCKED_USERS[0])
    expect(prismaMock.user.create.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_USERS[0])
  })
})
