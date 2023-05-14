import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero bg-base-200 my-14 rounded-md">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl border-8 border-white absolute left-1/3 top-1/2" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h3 className="text-3xl text-accent font-bold">About Us</h3>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="py-4">Fugiat fugit velit consequuntur voluptas voluptatibus officiis atque quisquam accusantium tenetur sapiente! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem commodi asperiores voluptate odit ex possimus, ratione ad vel dolorum necessitatibus?</p>
                    <button className="btn btn-warning">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;