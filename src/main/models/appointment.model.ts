// use patient.model and user.model as inspiration
type Appointment = {
  id: number
  doctorId: number
  appointmentForId: number
  timestamp: Date
  content: string
  recepctionistId: number
}

export default Appointment
