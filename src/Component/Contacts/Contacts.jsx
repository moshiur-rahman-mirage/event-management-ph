import React from 'react';
import Navbar from '../../pages/Shared/Navbar/Navbar';
import Footer from '../Footer/Footer';

const Contacts = () => {
    return (
        <div className='min-h-screen '>
            <div className="flex sticky top-0 z-10 bg-littledark ">
                <Navbar></Navbar>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content bg-tea-green text-center">
                    <div className=" flex items-center flex-col bg-tea-green gap-5">

                        <div className='text-4xl'>Contact Address</div>
                        <div className='grid md:grid-cols-3 sm:grid-cols-1'>
                            <div className="card  shadow-xl">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Call</h2>
                                    <p>017-123-123123</p>

                                </div>
                            </div>
                            <div className="car  shadow-xl">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">email</h2>
                                    <p>demo@email.com</p>

                                </div>
                            </div>
                            <div className="car  shadow-xl">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">address</h2>
                                    <p>123 New Lenox
                                        Chicago, IL 60606</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    );
};

export default Contacts;