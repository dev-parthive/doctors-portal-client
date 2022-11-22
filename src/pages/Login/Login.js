import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm()
  const [data, setData] = useState('')
  const handleLogin = (data) => {
    console.log(data)
    // console.log(errors)
  }
  // eder je default handleSubmit function thake oita tar data gula setData state rheke dey 
  return (
    <section className='h-[800px]  flex justify-center items-center'>
      <div className='w-96 p-7 border shadow-md' >
        <h2 className='text-xl font-bold text-center'>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>


          <div className="form-control w-full max-w-xs">
            <label htmlFor='Email' className="label">
              <span className="label-text">Email</span>
            </label>
            <input id="Email" type="text" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email is required" })} />
            {
              errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label htmlFor='Password' className="label">
              <span className="label-text">Password</span>
            </label>
            <input id="Password" type="password" className="input input-bordered w-full max-w-xs" {...register("password", { required: "password is required", minLength: {value: 6, message: "Password should be atleast 6 charecter"} })} />

            {
              errors.password && <p className='text-red-600' role="alert"> {errors.password?.message}</p>
            }
            <p className='mt-5'><Link>Forger password ?</Link> </p>
          </div>

          <input className='btn mt-4 w-full' value="login" type="submit" />
        </form>
        <p className='my-4'>New Doctors Portal ? <Link  to="/signup" className='text-secondary '>Create new account </Link></p>
        <div className="divider">OR</div>
        <button className='btn btn-outline uppercase w-full'>Continue With Google </button>
      </div>
    </section>
  );
};

export default Login;