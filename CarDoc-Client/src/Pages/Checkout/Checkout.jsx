import React, { useContext } from 'react';
import SubBanner from '../Shared/SubBanner/SubBanner';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const Checkout = () => {

    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const {user} = useContext(AuthContext);

    const handleBookOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email || form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const order = {
            customerName: name,
            email,
            date,
            service: title,
            service_id: _id,
            phone,
            message,
            img,
            price
        }
        
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
        .then(res  => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                Swal.fire(
                    'Success!',
                    'Your order has been recieved!',
                    'success'
                  )
                  form.reset();
            }
        })
    }

    return (
        <div>
            <SubBanner></SubBanner>
            <div className=''>
                <div className="hero bg-base-200">
                    <div className="hero-content w-full">
                        <div className="card w-full shadow-2xl bg-base-100">
                            <form onSubmit={handleBookOrder} className="card-body">
                                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
                                    <input type="text" placeholder="Full Name"
                                    defaultValue={user?.displayName} 
                                    name='name'className="lg:w-1/2 input input-bordered" />
                                    <input type="date" name='date' className="lg:w-1/2 input input-bordered" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
                                    <input type="text" placeholder="Your Phone"
                                    name='phone' className="lg:w-1/2 input input-bordered" />
                                    <input type="email" placeholder="Your Email" 
                                    name='email'
                                    defaultValue={user?.email} className="lg:w-1/2 input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <textarea type="textarea" placeholder="Your Message"
                                    name='message' className="textarea textarea-bordered" />
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