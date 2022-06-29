import type { Doctor } from '@prisma/client'
import prisma from '../../database/client'

export default class DoctorModel {
  public async retrieveDoctors() {
    return await prisma.doctor.findMany()
  }

  public async retrieveDoctorById(id: number) {
    return await prisma.doctor.findUnique({ where: { id } })
  }

  public async createDoctor(Doctor: Doctor) {
    return await prisma.doctor.create({ data: { ...Doctor } })
  }

  public async deleteDoctor(id: number) {
    return await prisma.doctor.delete({ where: { id } })
  }

  public async editDoctor(id: number, Doctor: Partial<Omit<Doctor, 'id'>>) {
    return await prisma.doctor.update({
      where: { id: Number(id) },
      data: { ...Doctor },
    })
  }
}
