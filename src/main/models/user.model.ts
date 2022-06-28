import prisma from '../../database/client'

export default class UserModel {
  public async retrievePatients() {
    return await prisma.user.findMany()
  }

  public async retrievePatientById(id: number) {
    return await prisma.user.findUnique({ where: { id } })
  }
}
