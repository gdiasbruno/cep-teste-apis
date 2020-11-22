import Appointment from '../models/Appointment'
import { startOfHour } from 'date-fns';
import AppointmentsRepository from '../repositories/appointmentsRepository';
import appointmentsRouter from '../routes/appointments.router';


interface Request {
    date:Date,
    provider:string,
}


class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }

    public execute({date, provider}: Request): Appointment {
        const appointmentDate = startOfHour(date)

        const validateAppointment = this.appointmentsRepository.findByDate(appointmentDate)

        if (validateAppointment) {
            throw Error('This appointment is already booked');
        }

        const appointment = this.appointmentsRepository.create({
        provider,
        date:appointmentDate
        })


        return appointment

    }

}

export default CreateAppointmentService;
