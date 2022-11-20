import React from 'react';

const InfoCard = ({card}) => {
    const {id, name, description, icon, bgClass } = card

    return (
        <div className={`card mt-10 card-side ${bgClass} p-5 shadow-xl text-white`}>
            <figure>
                <img src={icon} alt="Movie" />
                </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}.</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default InfoCard;