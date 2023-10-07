

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[92vh] min-w-full" style={{ backgroundImage: 'url(https://i.ibb.co/x1vSR2p/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold text-neutral-50">EVENTRO</h1>
                        <p className="mb-5 text-neutral-50 text-2xl">Meke Your Beautiful Moments More Beautiful With Us!</p>
                        <button className="btn btn-primary">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;