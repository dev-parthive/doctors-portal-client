import React from 'react';

const AppointmentOption = ({appointmentOption , setTreatment}) => {
    // console.log(appointmentOption)
    const{ name, slots, } =appointmentOption
    return (
        <div className="card shadow-xl my-8">
  <div className="card-body text-center ">
    <h2 className=" text-2xl text-secondary ">{name}</h2>
    <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
    <p>{slots.length > 0 } <span className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</span></p>
    <div className="card-actions mt-7 justify-center">
        <label htmlFor="booking-modal" 
        disabled={slots.length === 0}
         className="btn btn-primary text-white uppercase  bg-gradient-to-r from-primary  to-secondary"
         onClick={()=>setTreatment(appointmentOption)}
         >Book Appointment</label>
         
    </div>
  </div>
</div>
    );
};

export default AppointmentOption;