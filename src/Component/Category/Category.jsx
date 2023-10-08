import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ acategory }) => {
    const { id,name,image,description } = acategory
    return (
        <div  className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <Link to={`/category/${id}`}><button className='btn btn-ghost'>Show More</button></Link>
            </div>
        </div>
    );
};

export default Category;