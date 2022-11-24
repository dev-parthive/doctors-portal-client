import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
    const {createUser, googleSignup, setUser ,user, updateUser, auth} = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    // console.log(user)
    const navigate = useNavigate()


    const [data, setData] = useState('')
    const handleSignup = (data) => {
        // console.log(data)
        const {name, email, password} = data 
        // console.log(name, email)
        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            toast.success("User Created")
            setUser(user)
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then( ()=>{
                navigate('/')
            })
            .catch(err => console.log(err))

            // navigate('/')
        }) 
        .catch(err =>{
            console.log(err)
            toast.error(err.message)
        })
    }


    const handleGoogleSignup = () =>{
        googleSignup()
        .then(result =>{
            const user = result.user 
            console.log(user )
            toast.success("user created")
            setUser(user)
            
        }) 
        .catch(err => {
            console.log(err )
            toast.error(err.message)
        })
    }
    



    //show and hide function 
    const [vsisible, setVisible] = useState(false)
    const [type, setType] = useState('password')
    const hanldeEye = (event) => {
        const password = document.getElementById("password")
        setVisible(!vsisible)
        if (password.type === 'password') {
            setType('text')
        }
        else if (password.type === 'text') {
            setType('password')
        }

    }

    return (
        <section className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7 border shadow-md' >
                <h2 className='text-xl font-bold text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor='Name' className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} id="Name" type="text" className="input input-bordered w-full max-w-xs" />
                        {
                            errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor='Email' className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: "Email is required" })} id="Email" type="email" className="input input-bordered w-full max-w-xs" />
                        {
                            errors.email && <p className='text-red-500'>{errors.email?.message}</p>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor='Password' className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input id="password" {...register("password", {
                            required: "password is required", minLength: { value: 6, message: 'password should be atleast 6 charecters' },
                            pattern: { value: /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.])).{8,}/, message: "password must have uppercase lowercase special chacrecter and number " }
                        })} type={type} className="input input-bordered w-full max-w-xs" />
                        <span id="eye" className='btn w-10 mt-3' onClick={() => hanldeEye()}>{vsisible ? <p>hide</p> : <span>show</span>}</span>
                        {
                            errors.password && <p className='text-red-500'>{errors.password?.message}</p>
                        }
                    </div>

                    <input className='btn mt-4 w-full' value="signup" type="submit" />
                </form>
                <p className='my-4'>Already have an account ? <Link to="/login" className='text-secondary '>Login </Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline uppercase w-full' onClick={handleGoogleSignup}>Continue With Google </button>
            </div>
        </section>
    );
};

export default Signup;