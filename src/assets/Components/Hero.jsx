import React from 'react';
import { HeroImageList } from './MainCompo.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };

  return (
      <div>
        <Slider {...settings}>
        {HeroImageList.map((i, idx) => (
          <div key={idx} className='flex  h-96 w-1/2'>

            <div className=''> 
              <h1 className='text-3xl font-bold mb-4'>{i.title}</h1>
              <h2 className="text-lg mb-6">{i.description}</h2>
              <button className="mt-6 px-6 py-3 bg-[#F3A847] text-white font-semibold rounded-lg">Order Now</button>
            </div>

            <div className='  ' >
              <img src={i.img} alt={`Hero ${idx}`} className='h-auto' />
            </div>

          </div>
        ))}
      </Slider> 
    </div>
  );
}

export default Hero;


