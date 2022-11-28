import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [refresh, setRefresh] = useState(false)
    const { data: doctors,  isLoading} = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}}]`
                    }
                })
                const data = await res.json()
                return data;
            }
            catch (errr) {
                console.log(errr)
            }
        }
    })

    //handle delete doctors
    const handleDelete = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/doctor/${id}`, {
            method: "DELETE", 
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success(data.message)
            setRefresh(!refresh)
        })
    }
    console.log(doctors)

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='p-7'>
            <h2 className='text-3xl'>Manage Doctors: {doctors?.length}</h2>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors?.length && 
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                       <img src={doctor.image} alt="" className=''/>
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialty}</td>
                                <td><button className="btn btn-sm btn-error" onClick={()=>handleDelete(doctor._id)}>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;