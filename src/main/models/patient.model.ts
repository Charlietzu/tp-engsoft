import Appointment from './appointment.model'
import Exam from './exam.model'

export class PatientModel {
  private _patients: Patient[] = []

  public getPatients(): Patient[] {
    return this._patients
  }
}

export class Patient {
  private id = 0
  private userId = 0
  private name = ''
  private cpf = ''
  private exam: Exam[] = []
  private appointments: Appointment[] = []
}

export default Patient
