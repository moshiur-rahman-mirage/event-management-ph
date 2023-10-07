import React from 'react';

const Category = ({ acategory }) => {
    const { id,name,image,description } = acategory
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default Category;