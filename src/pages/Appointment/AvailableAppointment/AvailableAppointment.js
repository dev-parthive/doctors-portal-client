import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect( ()=>{
        fetch('appointemnetOption.json')
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            setAppointmentOptions(data)
        })
    },[] )
    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-bold'>Available Appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-9'>

            {
                appointmentOptions.map( option => <AppointmentOption key={option._id} appointmentOption={option} setTreatment={setTreatment}></AppointmentOption>)
            }
            </div>
          { 
        //   akane props kore je treatement patacci taholo appointment option gula 
            treatment &&   <BookingModal 
            selectedDate={selectedDate}
            treatment={treatment} setTreatment={setTreatment}></BookingModal>
          }

        </section>
    );
};

export default AvailableAppointment;