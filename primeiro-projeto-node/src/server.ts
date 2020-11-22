import routes from './routes';
import express from 'express';
import appointmentsRouter from './routes/appointments.router'

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.use('/appointments', appointmentsRouter);


app.listen(3333, ()=> {
    console.log("Server Started at port 3333 ❤")
});
