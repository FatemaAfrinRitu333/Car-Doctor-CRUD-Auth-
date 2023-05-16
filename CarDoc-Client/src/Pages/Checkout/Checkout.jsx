import React from 'react';
import SubBanner from '../Shared/SubBanner/SubBanner';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const service = useLoaderData();
    const { title, service_id } = service;

    return (
        <div>
            <SubBanner></SubBanner>
            <div className=''>
                <div className="hero bg-base-200">
                    <div className="hero-content w-full">
                        <div className="card w-full shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
                                    <input type="text" placeholder="First Name" className="lg:w-1/2 input input-bordered" />
                                    <input type="text" placeholder="Last Name" className="lg:w-1/2 input input-bordered" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
                                    <input type="text" placeholder="Your Phone" className="lg:w-1/2 input input-bordered" />
                                    <input type="email" placeholder="Your Email" className="lg:w-1/2 input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <textarea type="textarea" placeholder="Your Message" className="textarea textarea-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-accent w-full">Order Confirm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;