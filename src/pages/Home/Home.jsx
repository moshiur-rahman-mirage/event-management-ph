import { useLoaderData } from "react-router-dom";


import Navbar from "../Shared/Navbar/Navbar";
import Banner from "../../Component/Banner/Banner";
import Services from "../../Component/Services/Services";
import Footer from "../../Component/Footer/Footer";
import Carousell from "../../Component/Carousel/Carousell";





const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <div className="bg-tea-green">
            <Navbar></Navbar>
            </div>
          
            <Banner></Banner>
            <Services></Services>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            </div>
            <Carousell/>
            <Footer/>
        </div>
    );
};

export default Home;