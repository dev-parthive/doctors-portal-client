import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAppointment = () => {

    const {user} = useContext(AuthContext)
    console.log(user)
    const url = `http://localhost:5000/bookings?email=${user?.email}`


    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email], 
        queryFn: async() =>{
            const res = await fetch(url, {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            })
            const data = await res.json()
            return data;
        }
        
    })
    console.log(bookings)
    return (
        <div className="p-8">
            <h3 className='text-3xl mb-5 '>My Appointments</h3>

            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
       bookings.length &&   bookings.map( (booking, i) => <tr key={booking._id}>
            <th>{i + 1}</th>
            <td>{booking?.name  ? bookings.name : user?.email }</td>
            <td>{booking.treatment}</td>
            <td>{booking.appointmentDate}</td>
            <td>{booking.slot}</td>
          </tr>)
        
      }
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;