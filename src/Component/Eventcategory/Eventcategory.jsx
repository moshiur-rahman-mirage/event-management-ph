import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from '../Category/Category';

const Eventcategory = () => {

    const [categories, setCategory] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
         .then(data=>setCategory(data))
        // .then(data=>console.log(data))
    },[])


    return (
        <div className='min-h-[50vh]  max-w-7xl mx-auto'>
          
            <h2 className="text-4xl py-10 my-auto text-center">All Services</h2>
            <div className='grid gap-5 grid-cols-3'>
            {
               categories.map((acategory)=>{
                return(
                    <Category key={acategory.id} acategory={acategory}/>
                )
               })
            }
            </div>
            

        </div>
    );
};

export default Eventcategory;