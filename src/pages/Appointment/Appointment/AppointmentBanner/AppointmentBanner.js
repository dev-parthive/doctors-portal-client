import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../../assets/images/chair.png' 
import { format } from 'date-fns';
import bgImg from '../../../../assets/images/bg.png'
const AppointmentBanner = ({setSelectedDate, selectedDate}) => {
   
    return (
      <header style={{
        background: `url(${bgImg})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat : 'no-repeat'
      }} className="py-9">
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
    <div className='mr-9'>
     <DayPicker
     mode='single'
     selected={selectedDate} 
    //  akane onSelect tare akta anonymous function diye wrap korsi karon atate 2 bar click korle error throw kortecilo 
     onSelect={(date)=>{
        if(date){
            setSelectedDate(date)
        }
     }}
     />
     <p>You have selected date: {format(selectedDate, 'PP')}</p>
    </div>
  </div>
</div>
      </header>
    );
};

export default AppointmentBanner;