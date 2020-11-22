import Appointment from '../models/Appointment'
import { isEqual } from 'date-fns';

interface CreateAppointmentDTO {
    provider:string;
    date:Date;
}

class AppointmentsRepository {
    private appointments: Appointment[]

    constructor() {
        this.appointments = []
    }

    public all(): Appointment[] {
        const appointments = this.appointments

        return appointments
    }

    public findByDate(date:Date): Appointment | null {
        const validateAppointment = this.appointments.find(appointment => isEqual(appointment.date, date))

        return validateAppointment || null;
    }

    public create({provider, date}: CreateAppointmentDTO):Appointment {
        const appointment = new Appointment({provider, date})

        this.appointments.push(appointment)

        return appointment;
    }
}

export default AppointmentsRepository;
