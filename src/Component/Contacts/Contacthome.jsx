

const Contacthome = () => {
    return (
        
             <div className='min-h-screen '>

            <div className="hero min-h-screen ">
                <div className="hero-content text-center">
                    <div className=" flex items-center flex-col bg-tea-green gap-5">

                        <div className='text-4xl font-bold'>Contact Us</div>
                        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-5 '>
                            <div className="card bg-olivine  shadow-xl">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Call</h2>
                                    <p>017-123-123123</p>

                                </div>
                            </div>
                            <div className="card bg-olivine  shadow-xl">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">email</h2>
                                    <p>demo@email.com</p>

                                </div>
                            </div>
                            <div className="card bg-olivine  shadow-xl">
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
        </div>
    );
};

export default Contacthome;