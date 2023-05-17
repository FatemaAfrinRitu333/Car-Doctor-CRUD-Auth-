import React from 'react';
import img from '../../assets/images/404.png'
import Header from '../Shared/Header/Header';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=''>
            <Header></Header>
            <div className='mx-auto grid justify-center text-center'>
                <img src={img} className='p-9 w-4/5' alt="" />
                <Link to='/'>
                    <button className='btn btn-accent'> Go back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;