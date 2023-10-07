import { useLoaderData } from "react-router-dom";


import Navbar from "../Shared/Navbar/Navbar";
import Banner from "../../Component/Banner/Banner";
import Footer from "../../Component/Footer/Footer";
import Carousell from "../../Component/Carousel/Carousell";
import Eventcategory from "../../Component/Eventcategory/Eventcategory";
import Featuredevent from "../../Component/Featuredevent/Featuredevent";
import Priceplan from "../../Component/Priceplan/Priceplan";





const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div className="bg-tea-green">
            <div className=" min-h-[8vh] flex sticky top-0 z-10 bg-littledark ">
            <Navbar></Navbar>
            </div>
          
            <Banner></Banner>
            <div className=" bg-tea-green ">
            <Eventcategory/>
            </div>
            
            <Featuredevent/>
            <div>

            </div>
            <div className="max-w-7xl mx-auto">
            <Carousell/>
            </div>

            <div className="max-w-7xl mx-auto bg-tea-green">
                <Priceplan/>
            </div>
            

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            </div>
            {/* <Carousell/> */}
            <Footer/>
        </div>
    );
};

export default Home;