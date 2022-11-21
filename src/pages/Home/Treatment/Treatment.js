import React from 'react';
import image from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/primaryButton/PrimaryButton';

const Treatment = () => {
    return (
        <div className="card w-3/4 mx-auto lg:card-side my-24 ">
        <figure><img className='w-full' src={image} alt="Album"/></figure>
        <div className="card-body flex flex-col  justify-center">
          <div className='md:mx-auto'>
          <h2 className="card-title text-4xl ">Exceptional Dental <br /> Care, on Your Terms</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
          <br />
         <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default Treatment;