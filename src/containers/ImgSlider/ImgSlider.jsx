import React from "react";
import "./imgSlider.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { items } from "../../constants/constants";

const ImgSlider = () => {
  return (
    <div className="img-sliders">
      <div className="next slider-arrow ">
        <IoIosArrowBack size={32}/>
      </div>
      <div className="slides">
        {items.map((item, index) => (
          <div
            className="slide-container"
            key={index}
          >
            <img
              src={item.image}
              alt=""
              className="slide-img"
            />
          </div>
        ))}
      </div>
      <div className="prev slider-arrow">
        <IoIosArrowForward size={32} />
      </div>
    </div>
  );
};

export default ImgSlider;
