import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
   //treatement is just another name of appointmentOptions with name, slots , slots  _id 
  const { name , slots} = treatment
  console.log(treatment)
  const date = format(selectedDate, "PP")
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className='mt-10'>
            <input type="text" disabled value={date} className=" input   w-full mb-5 bg-[#E6E6E6]" />
          {
            slots && 
            <select className="select select-bordered w-full mb-5">
            {
              slots.map(slot => <option value={slot}>{slot}</option>)
            }
            
          </select>
          }
            <input type="text" placeholder="Full Name" className=" input input-bordered w-full mb-5" />
            <input type="text" placeholder="Phone Number " className=" input input-bordered w-full mb-5" />
            <input type="text" placeholder="Email " className=" input input-bordered w-full mb-5" />

            <input className='  w-full mb-5 btn ' type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;