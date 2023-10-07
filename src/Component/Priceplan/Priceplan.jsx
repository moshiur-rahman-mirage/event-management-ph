import React, { useEffect, useState } from 'react';
import Plan from '../Plan/Plan';

const Priceplan = () => {

    const [plans, setPlans] = useState([])
    useEffect(() => {
        fetch('./priceplan.json')
            .then(res => res.json())
             .then(data => setPlans(data))
        //  .then(data=>console.log(data))
    }, [])

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">PRICE PLANS</h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Check Out Our <br></br> Price Plans</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

                        {
                            plans.map((aplan) => {
                                return (
                                    <Plan key={aplan.id} aplan={aplan} />
                                )
                            })
                        }


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Priceplan;