import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='my-6'>
            <div className='text-center w-9/12 mx-auto space-y-4'>
                <h3 className='text-3xl text-accent font-bold'>Out services</h3>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque optio alias officiis ullam dolores dolorem, dolorum nostrum. Veritatis nostrum quam sapiente distinctio quae dolor perspiciatis.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;