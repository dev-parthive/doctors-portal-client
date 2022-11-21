import React from 'react';

const TestimonialCard = ({testimonial}) => {
    const {name, img, message, address} = testimonial
     return (
        <div className='shadow-xl rounded-xl p-7'>
            <div>
                <p>
                    {message}
                </p>
            </div>
            <div className='flex justify-start  items-center mt-6'>
                <img src={img} className="rounded-full w-[75px] border-4 mr-5 h-20 border-secondary" alt="" />
                <div>
                    <h3 className='text-xl font-sans font-semibold'>{name}</h3>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;