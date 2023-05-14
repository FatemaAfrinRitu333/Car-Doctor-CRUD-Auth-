import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-screen">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute flex   left-5 right-5 gap-2 h-full">
                    <div className='text-warning bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-7 space-y-7 w-3/2 h-fit mt-10 rounded-xl'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quod reiciendis repellat minima consequatur dolore!</p>
                        <div className='flex gap-4'>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-warning btn-outline'>Latest Project</button>
                        </div>
                    </div>
                    <div className='absolute bottom-9 right-0 flex gap-3'>
                        <a href="#slide6" className="btn btn-circle btn-warning">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-warning">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex   left-5 right-5 gap-2 h-full">
                    <div className='text-warning bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-7 space-y-7 w-3/2 h-fit mt-10 rounded-xl'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quod reiciendis repellat minima consequatur dolore!</p>
                        <div className='flex gap-4'>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-warning btn-outline'>Latest Project</button>
                        </div>
                    </div>
                    <div className='absolute bottom-9 right-0 flex gap-3'>
                        <a href="#slide1" className="btn btn-circle btn-primary">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-primary">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex   left-5 right-5 gap-2 h-full">
                    <div className='text-warning bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-7 space-y-7 w-3/2 h-fit mt-10 rounded-xl'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quod reiciendis repellat minima consequatur dolore!</p>
                        <div className='flex gap-4'>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-warning btn-outline'>Latest Project</button>
                        </div>
                    </div>
                    <div className='absolute bottom-9 right-0 flex gap-3'>
                        <a href="#slide2" className="btn btn-circle btn-primary">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-primary">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex   left-5 right-5 gap-2 h-full">
                    <div className='text-warning bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-7 space-y-7 w-3/2 h-fit mt-10 rounded-xl'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quod reiciendis repellat minima consequatur dolore!</p>
                        <div className='flex gap-4'>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-warning btn-outline'>Latest Project</button>
                        </div>
                    </div>
                    <div className='absolute bottom-9 right-0 flex gap-3'>
                        <a href="#slide3" className="btn btn-circle btn-primary">❮</a>
                        <a href="#slide5" className="btn btn-circle btn-primary">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className="absolute flex   left-5 right-5 gap-2 h-full">
                    <div className='text-warning bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-7 space-y-7 w-3/2 h-fit mt-10 rounded-xl'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quod reiciendis repellat minima consequatur dolore!</p>
                        <div className='flex gap-4'>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-warning btn-outline'>Latest Project</button>
                        </div>
                    </div>
                    <div className='absolute bottom-9 right-0 flex gap-3'>
                        <a href="#slide4" className="btn btn-circle btn-primary">❮</a>
                        <a href="#slide6" className="btn btn-circle btn-primary">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />
                <div className="absolute flex   left-5 right-5 gap-2 h-full">
                    <div className='text-warning bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-7 space-y-7 w-3/2 h-fit mt-10 rounded-xl'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quod reiciendis repellat minima consequatur dolore!</p>
                        <div className='flex gap-4'>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-warning btn-outline'>Latest Project</button>
                        </div>
                    </div>
                    <div className='absolute bottom-9 right-0 flex gap-3'>
                        <a href="#slide5" className="btn btn-circle btn-primary">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-primary">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;