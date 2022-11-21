import React from 'react';
import PrimaryButton from '../../../Components/primaryButton/PrimaryButton';

const AppointmentOption = ({option}) => {
    console.log(option)
    const{ name, slots, } =option
    return (
        <div className="card shadow-xl my-8">
  <div className="card-body text-center ">
    <h2 className=" text-2xl text-secondary ">{name}</h2>
    <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
    <p>{slots.length > 0 } <span className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</span></p>
    <div className="card-actions mt-7 justify-center">
        <PrimaryButton>Book Appointment</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default AppointmentOption;