import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];
export const Carasol = () => {
  const [slider, setSlider] = useState(0);
  const length = sliderData.length;
  const nextSlide = () => {
    setSlider(slider === 0 ? length - 1 : slider - 1);
  };
  const prevSlide = () => {
    setSlider(slider === length - 1 ? 0 : slider + 1);
  };
  return (
    <div className="max-w-[1240px] mx-auto relative flex items-center justify-center px-4 py-10">
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl right-8 text-white cursor-pointer"
      />
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl left-8 text-white cursor-pointer"
      />
      {sliderData.map((item, index) => (
        <div
          key={index}
          className={slider === index ? "opacity-100" : "opacity-0"}
        >
          {slider === index && (
            <img
              src={item.url}
              alt=""
              className="w-full object-cover rounded-md"
            />
          )}
        </div>
      ))}
    </div>
  );
};
