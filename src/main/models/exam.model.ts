// use patient.model and user.model as inspiration
type Exam = {
  id: number
  createdAt: Date
  doctorId: number
  patientId: number
  result: string
  receptionistId: number
}

export default Exam
