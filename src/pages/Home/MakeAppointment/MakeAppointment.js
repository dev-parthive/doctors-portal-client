import React from 'react';
import doctore from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/primaryButton/PrimaryButton';
const MakeAppointment = () => {
    return ( 
      <section className='mt-28'
      style={{
        background: `url(${appointment})`
      }}
      >
        <div className="herobg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctore} alt="" className=" -mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" />
    <div className='text-white'>
      <h2 className='text-secondary text-xl font-semibold'>Appointment</h2>
      <h1 className="text-4xl font-bold">Make an  appointment today</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
     <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
      </section>
    );
};

export default MakeAppointment;