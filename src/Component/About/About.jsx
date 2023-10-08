import React from 'react';
import Navbar from '../../pages/Shared/Navbar/Navbar';
import Footer from '../Footer/Footer';


const About = () => {
    return (
        <div className='min-h-[100vh]'>
            <div className=" min-h-[8vh] flex sticky top-0 z-10 bg-littledark ">
                <Navbar></Navbar>
            </div>
            <div className="hero  min-h-[68vh] bg-tea-green">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">We are a team of capable event management expert. We work hard so that you can enjoy your special moment and keep cool!</p>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;