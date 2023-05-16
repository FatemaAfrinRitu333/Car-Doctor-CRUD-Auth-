import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card bg-base-100 shadow-2xl">
            <figure className="px-8 pt-10">
                <img src={img} alt={title} className="rounded-xl" />
            </figure>
            <div className="card-body px-8">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between items-center'>
                    <p className='text-xl text-accent font-semibold'>{price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className='btn-link btn'>Book Now!</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;