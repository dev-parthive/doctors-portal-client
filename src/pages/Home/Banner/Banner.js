import React from 'react';
import './Banner.css'
import  cahir from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero banner-section">
            <div className="hero-content flex-col lg:flex-row-reverse py-20">
                <img src={cahir} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 className="lg:text-5xl font-bold text-3xl">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white uppercase  bg-gradient-to-r from-primary  to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;