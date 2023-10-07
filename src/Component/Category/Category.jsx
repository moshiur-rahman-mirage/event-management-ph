import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ acategory }) => {
    const { id,name,image,description } = acategory
    return (
        <Link to={`/category/${id}`} className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
        </Link>
    );
};

export default Category;