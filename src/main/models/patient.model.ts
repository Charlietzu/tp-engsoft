import prisma from "../../database/client";

export default class PatientModel {
  public async retrievePatients() {
    return await prisma.patient.findMany()
  }
}
