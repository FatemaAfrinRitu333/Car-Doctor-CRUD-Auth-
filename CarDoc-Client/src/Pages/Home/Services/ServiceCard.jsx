import React from 'react';

const ServiceCard = ({service}) => {
    const {title, img, price} = service;
    return (
            <div className="card bg-base-100 shadow-2xl">
                <figure className="px-8 pt-10">
                    <img src={img} alt={title} className="rounded-xl" />
                </figure>
                <div className="card-body px-8">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-xl text-accent font-thin'>{price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default ServiceCard;