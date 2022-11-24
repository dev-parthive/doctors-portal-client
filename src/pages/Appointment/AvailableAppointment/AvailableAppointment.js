import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, "PP")
// react query use korate amader useEffect and useState kono ta use kora lage nai 

    // const {data:appointmentOptions = []} = useQuery({
    //     queryKey: ['appointmentOption'], 
    //     queryFn: () => fetch('http://localhost:5000/appointmentOption') 
    //     .then(res => res.json())
     
    // })


    const {data:appointmentOptions = [], refetch, isLoading}  = useQuery({
        queryKey: ['appointmentOptions', date], 
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/appointmentOption?date=${date}`)
            const data = await res.json()
            return data
        }
    })
 



    // useEffect( ()=>{
    //     fetch('http://localhost:5000/appointmentOption')
    //     .then(res=> res.json())
    //     .then(data =>{
    //         console.log(data)
    //         setAppointmentOptions(data)
    //     })
    // },[] )



    if(isLoading){
        return <Loading></Loading>
    }
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
            treatment={treatment} refetch={refetch} setTreatment={setTreatment} ></BookingModal>
          }

        </section>
    );
};

export default AvailableAppointment;