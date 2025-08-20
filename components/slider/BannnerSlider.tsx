"use client";

import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Left Arrow
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-yellow-300 rounded-full p-2 
    transition-opacity duration-300 opacity-0 group-hover:opacity-100"
  >
    <ChevronLeft className="w-6 h-6 text-black" />
  </button>
);

// Custom Right Arrow
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-yellow-300 rounded-full p-2 
    transition-opacity duration-300 opacity-0 group-hover:opacity-100"
  >
    <ChevronRight className="w-6 h-6 text-black" />
  </button>
);

const imageSlides = [
  "https://images.pexels.com/photos/5715858/pexels-photo-5715858.jpeg?cs=srgb&dl=pexels-artempodrez-5715858.jpg&fm=jpg&_gl=1*1hnhdry*_ga*MTAxMjI2MzU3Mi4xNzM1NTgwMDQ1*_ga_8JE65Q40S6*czE3NTIwMDAyMTgkbzEwJGcxJHQxNzUyMDAwMzEwJGo1OSRsMCRoMA..",
  "https://images.pexels.com/photos/7654431/pexels-photo-7654431.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-7654431.jpg&fm=jpg&_gl=1*184av07*_ga*MTAxMjI2MzU3Mi4xNzM1NTgwMDQ1*_ga_8JE65Q40S6*czE3NTIwMDAyMTgkbzEwJGcxJHQxNzUyMDAwMzk2JGo0NyRsMCRoMA..",
 
];

const BannnerSlider = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: false,
  };

  return (
   
        <Slider {...settings}>
          {imageSlides.map((src, index) => (
            <div key={index} className="h-[300px] lg:h-[500px] bg-gradient-to-br from-[#961128] to-[#26426d] rounded-xl p-1 shadow-2xl">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="h-full w-full rounded-xl"
              />
            </div>
          ))}
        </Slider>
   
  );
};

export default BannnerSlider;
