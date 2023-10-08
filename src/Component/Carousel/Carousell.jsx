import React from "react";
import Slider from "infinite-react-carousel";

import "./carousel.css";

function Carousell() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    className: "slide_box",
    dots: true,
    virtualList: true,
    duration: 20,
    arrows:true,
    
  };
  return (
    <div className="flex flex-col ">

      <h2 className="text-3xl font-bold py-5 mb-5 mx-auto">Recent Events</h2>
      
      <Slider {...settings}>
        <div className="row">
          <img
            src="https://i.ibb.co/qss4KhF/handheld.jpg"
            className="slide_img col-lg-12"
            alt="Responsive img"
            
          />
        
          
        </div>
        <div>
          <img
              src="https://i.ibb.co/qss4KhF/handheld.jpg"
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div>
          <img
              src="https://i.ibb.co/qss4KhF/handheld.jpg"
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
      </Slider>
    </div>
  );
}

export default Carousell;
