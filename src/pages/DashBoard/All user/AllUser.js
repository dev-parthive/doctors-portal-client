import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllUser = () => {
    const {data : users = [] ,  refetch} = useQuery({
        queryKey: ['users'], 
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/users')
            const data = await  res.json()
            return  data ;

        }
    }); 



    const handleMakeAdmin = (id) =>{
        fetch(`http://localhost:5000/users/${id}`, {
            method: "PUT", 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data )
            if(data.data.modifiedCount > 0){
                toast.success(data.message)
            }
        })
    }
    return (
        <div className='p-8'>
            <h3 className='text-center '>All users </h3>
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {
        users.map((user , i) =>   <tr  key={user._id}>
            <th>{i + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user?.role ? <button className='btn-xs btn-outline btn-primary'>Admined</button>  : <button onClick={()=> handleMakeAdmin(user._id)} className='btn btn-xs btn-primary text-white'>Make admin</button>}</td>
            <td><button className='btn  text-warning btn-xs btn-oultine'>Delete</button></td>
          </tr>)
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;