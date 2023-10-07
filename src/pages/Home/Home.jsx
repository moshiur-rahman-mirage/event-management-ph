import { useLoaderData } from "react-router-dom";


import Navbar from "../Shared/Navbar/Navbar";
import Banner from "../../Component/Banner/Banner";
import Footer from "../../Component/Footer/Footer";
import Carousell from "../../Component/Carousel/Carousell";
import Eventcategory from "../../Component/Eventcategory/Eventcategory";
import Featuredevent from "../../Component/Featuredevent/Featuredevent";





const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <div className="bg-tea-green min-h-[8vh] flex">
            <Navbar></Navbar>
            </div>
          
            <Banner></Banner>
            <div className="bg-tea-green">
            <Eventcategory/>
            </div>
            
            <Featuredevent/>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            </div>
            {/* <Carousell/> */}
            <Footer/>
        </div>
    );
};

export default Home;