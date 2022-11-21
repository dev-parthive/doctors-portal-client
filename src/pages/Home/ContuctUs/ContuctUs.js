import React from 'react';
import PrimaryButton from '../../../Components/primaryButton/PrimaryButton';
import './ContuctUs.css'
const ContuctUs = () => {
    return (
       <section className='contuct-us-sction flex flex-col justify-center items-center text-white py-24'>
            <div className='text-center'>
                <h2 className='text-xl font-semibold font-sans text-secondary'>Connect Us</h2>
                <h3 className='text-3xl'>Stay connected with us </h3>
            </div>
           <div>
           <form  className='mt-10 text-black'>
            <input type="text"  placeholder="Name" className="input input-bordered input-sm w-full  max-w-xs " />
            <br />
            <input type="text"  placeholder="Subject" className=" my-5 input input-bordered input-sm w-full  max-w-xs " />
            <textarea className="textarea textarea-bordered  input-sm w-full  max-w-xs  " placeholder="Your Message" ></textarea>
                <div className='flex justify-center'>
                <button  className="btn btn-primary text-white uppercase  bg-gradient-to-r from-primary  to-secondary mt-5" type="submit">Submit</button>
                </div>
            
            </form>
           </div>
       </section>
    );
};

export default ContuctUs;