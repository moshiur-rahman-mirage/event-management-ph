import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";

const Plan = ({ aplan }) => {

    const { id, name, price, description,features } = aplan
    return (
        <div>

            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">{name}</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">{price}</span>

                </div>

                <ul role="list" className="mb-8 space-y-4 text-left">

                {
                            features.map((afeature) => {
                                return ( 
                                    <li key={afeature.idx} className="flex items-center space-x-3">
                                   
                                    <span ><FaCircleCheck/></span>
                                    <span ><span className="font-semibold">{afeature}</span></span>
                                </li>
                                )
                            })
                        }


                </ul>
            </div>


        </div>
    );
};

export default Plan;