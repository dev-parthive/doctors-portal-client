import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import WinsonImg from  '../../../assets/images/people1.png';
import AngelinaImg from  '../../../assets/images/people2.png';
import SamanthaImg from  '../../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    const testimonailsData = [
        {
            id: 1,
            name: "Winson Herry",
            address: "California" , 
            message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: WinsonImg
        },
        {
            id: 2,
            name: "Angelina",
            address: "California" , 
            message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", 
            img: AngelinaImg
        },
        {
            id: 3,
            name: "Samantha",
            address: "California" , 
            message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", 
            img: SamanthaImg
        }
    ]
    return (
        <section className='my-36'>
            <div className='flex justify-between'>

                <div>
                <h2 className='text-secondary text-xl font-semibold'>Testimonial</h2>
                <h1 className="text-4xl font-bold">What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        testimonailsData.map(tastimonail => <TestimonialCard key={tastimonail.id} testimonial={tastimonail}></TestimonialCard>)
                    }
            </div>
        </section>
    );
};

export default Testimonial;