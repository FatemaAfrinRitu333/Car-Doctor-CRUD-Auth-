import React from 'react';
import img from '../../../assets/images/banner/4.jpg';
import { Link } from 'react-router-dom';

const SubBanner = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content w-full h-full relative">
                <h1 className="mb-5 text-5xl font-bold">Check Out</h1>
                <div className="text-sm breadcrumbs absolute bottom-0 bg-accent py-1 px-2">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><a>Check Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;