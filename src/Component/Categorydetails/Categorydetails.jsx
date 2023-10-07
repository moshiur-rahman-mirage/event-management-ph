import React from 'react';
import Navbar from '../../pages/Shared/Navbar/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Categorydetails = () => {

    const categories = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id);
    const currentcategory = categories.find(currentcategory => currentcategory.id == id)
    console.log(currentcategory)

    return (
        <div className='bg-tea-green'>
            <div className='w-full bg-littledark min-h-[8vh] mb-5'>
                <Navbar />
            </div>
            <div className="card  max-w-7xl mx-auto lg:card-side shadow-xl">
                <figure><img src={currentcategory.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{currentcategory.name}</h2>
                    <p>{currentcategory.description}</p>
                </div>
            </div>
           
            <Footer/>
          
           
        </div>
    );
};

export default Categorydetails;