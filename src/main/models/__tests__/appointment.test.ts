import { prismaMock } from '../../../helpers/singleton'
import { Appointment } from '@prisma/client'
import AppointmentModel from '../appointment.model'

const MOCKED_APPOINTMENTS: Appointment[] = [
  {
    id: 1,
    created_at: new Date(),
    timestamp: new Date(),
    doctor_id: 1,
    patient_id: 1,
    receptionist_id: 1,
    content: 'content 1',
  },
  {
    id: 2,
    created_at: new Date(),
    timestamp: new Date(),
    doctor_id: 2,
    patient_id: 2,
    receptionist_id: 2,
    content: 'content 2',
  },
]

describe('Appointment Model', () => {
  it('findAll', async () => {
    const NewModel = new AppointmentModel()
    prismaMock.appointment.findMany.mockResolvedValue(MOCKED_APPOINTMENTS)

    const result = await NewModel.retrieveAppointments()
    expect(result).toHaveLength(2)
    expect(prismaMock.appointment.findMany.mock.calls).toHaveLength(1)
    result.forEach((appoint, index) =>
      expect(appoint).toBe(MOCKED_APPOINTMENTS[index])
    )
  })

  it('findUnique', async () => {
    const NewModel = new AppointmentModel()
    prismaMock.appointment.findUnique.mockResolvedValue(MOCKED_APPOINTMENTS[0])

    const result = await NewModel.retrieveAppointmentById(
      MOCKED_APPOINTMENTS[0].id
    )
    expect(prismaMock.appointment.findUnique.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_APPOINTMENTS[0])
  })

  it('findAll', async () => {
    const NewModel = new AppointmentModel()
    prismaMock.appointment.findMany.mockResolvedValue(MOCKED_APPOINTMENTS)

    const result = await NewModel.retrieveAppointments()
    expect(result).toHaveLength(2)
    expect(prismaMock.appointment.findMany.mock.calls).toHaveLength(1)
    result.forEach((doc, index) => expect(doc).toBe(MOCKED_APPOINTMENTS[index]))
  })

  it('findUnique', async () => {
    const NewModel = new AppointmentModel()
    prismaMock.appointment.findUnique.mockResolvedValue(MOCKED_APPOINTMENTS[0])

    const result = await NewModel.retrieveAppointmentById(
      MOCKED_APPOINTMENTS[0].id
    )
    expect(prismaMock.appointment.findUnique.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_APPOINTMENTS[0])
  })

  it('delete', async () => {
    const NewModel = new AppointmentModel()
    prismaMock.appointment.delete.mockResolvedValue(MOCKED_APPOINTMENTS[0])

    const result = await NewModel.deleteAppointment(MOCKED_APPOINTMENTS[0].id)
    expect(prismaMock.appointment.delete.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_APPOINTMENTS[0])
  })

  it('create', async () => {
    const NewModel = new AppointmentModel()
    prismaMock.appointment.create.mockResolvedValue(MOCKED_APPOINTMENTS[0])

    const result = await NewModel.createAppointment(MOCKED_APPOINTMENTS[0])
    expect(prismaMock.appointment.create.mock.calls).toHaveLength(1)
    expect(result).toBe(MOCKED_APPOINTMENTS[0])
  })
})
