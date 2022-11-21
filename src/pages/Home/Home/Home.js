import React from 'react';
import Banner from '../Banner/Banner';
import ContuctUs from '../ContuctUs/ContuctUs';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Banner className="mx-5"></Banner>
            <InfoCards className="mx-5"></InfoCards>
            <Services className="mx-5"></Services>
            <Treatment className="mx-5"></Treatment>
            <MakeAppointment className="mx-5"></MakeAppointment>
            <Testimonial className="mx-5"></Testimonial>
            <ContuctUs></ContuctUs>
        </div>
    );
};

export default Home;