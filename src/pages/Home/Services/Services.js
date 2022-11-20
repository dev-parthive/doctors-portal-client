import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service'
const Services = () => {
    const servicesData = [
        {
            id: 1, 
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" ,
            img: fluoride,
            
        },
        {
            id: 2, 
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" ,
            img: cavity ,

        },
        {
            id: 3, 
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" ,
            img: whitening ,

        }
    ]
    
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h2 className='text-primary  uppercase font-bold text-xl'>Our Services</h2>
                <h2 className='text-3xl'>Services we provide</h2>
            </div>
            <div className='mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    servicesData.map(service => <Service key={service.id} service={service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;