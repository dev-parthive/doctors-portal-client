import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const imageHostKey = process.env.REACT_APP_imgbb_key
    // console.log(imageHostKey)
    const navigate = useNavigate()
    const handleAddDoctor = data => {
        console.log(data) 
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image' , image)
        // console.log(ImageData.data.url)
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
        fetch(url , {
            method: "POST", 
            body: formData
        })
        .then (res => res.json())
        .then(imgData =>{
            console.log(imgData.data.url)
            if(imgData.success){
            //    console.log( imgData.data.url)
               const doctor  ={
                name: data.name , 
                email : data.email ,
                specialty: data.specialty, 
                 image: imgData.data.url

               }

               // save doctor information  to the data base 
               fetch('https://doctors-portal-server-mu-five.vercel.app/doctors', {
                method: "POST" , 
                headers: {
                    'content-type' : 'application/json', 
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                }, 

                body:  JSON.stringify(doctor)
               })
               .then(res => res.json())
               .then(data => {
                console.log(data)
                toast.success(` Doctor's  is added in DB`)
                navigate('/dashboard/managedoctors')
               })

            }
        })
    }

    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {

            const res = await fetch('https://doctors-portal-server-mu-five.vercel.app/appointmentSpecialty')
            const data = await res.json()
            return data;
        }
    })
    console.log(specialties)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-7 w-96 flex  justify-center items-start'>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                {/* <div className="form-control w-full max-w-xs">
                        <label htmlFor='Name' className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} id="Name" type="text" className="input input-bordered w-full max-w-xs" />
                        
                    </div> */}
                <div className="form-control w-full max-w-xs">
                    <label htmlFor='Name' className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", { required: "Name is required" })} id="Name" type="text" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label htmlFor='Email' className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: "Email is required" })} id="Email" type="email" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Specialty</span></label>
                    <select 
                    {...register('specialty')}
                    className="select input-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                        
                        
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label htmlFor='Photo' className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input {...register("image", { required: "Photo is required" })} id="Photo" type="file" className="input input-bordered w-full max-w-xs" />

                </div>

                <input className='btn mt-4 w-full' value="signup" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;