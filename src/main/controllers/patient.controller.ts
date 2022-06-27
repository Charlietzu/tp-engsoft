import Patient, { PatientModel } from '../models/patient.model'

export default class PatientController {
  private patientModel: PatientModel

  constructor(patientModel: PatientModel) {
    this.patientModel = patientModel
  }

  public getPatients(): Patient[] {
    return this.patientModel.getPatients()
  }
}
