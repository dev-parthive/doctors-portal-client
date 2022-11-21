import React from 'react';
import './Banner.css'
import  cahir from '../../../assets/images/chair.png'
import PrimaryButton from '../../../Components/primaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero banner-section">
            <div className="hero-content flex-col lg:flex-row-reverse py-20">
                <img src={cahir} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 className="lg:text-5xl font-bold text-3xl">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                   <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;