import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
   //treatement is just another name of appointmentOptions with name, slots , slots  _id 
  const { name , slots} = treatment
  // console.log(treatment)
  const date = format(selectedDate, "PP")

  const handleBooking = (event) =>{
    event.preventDefault()
      const booking = {
        name: event.target.name.value,
        phone: event.target.phone.value,
        email: event.target.email.value, 
        slot: event.target.slot.value, 
        appointmentDate : date , 
        treatment: name ,
      }

      //TODO :  send data to the server
      // and once darta is saved then close the modal 
      // and display sucess toast

      console.log( booking)
      setTreatment(null)
  }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className='mt-10'>
            <input type="text" disabled value={date} className=" input   w-full mb-5 bg-[#E6E6E6]" />
          {
            slots && 
            <select name='slot' className="select select-bordered w-full mb-5">
            {
              slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
            }
            
          </select>
          }
            <input name='name' type="text" placeholder="Full Name" className=" input input-bordered w-full mb-5" />
            <input name="phone" type="text" placeholder="Phone Number " className=" input input-bordered w-full mb-5" required/>
            <input name='email' type="Email" placeholder="Email " className=" input input-bordered w-full mb-5" />

            <input className='  w-full mb-5 btn ' type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;