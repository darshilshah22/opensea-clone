import React, { useState } from "react";
import "./hero.css";
import { categories, items } from "../../constants/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CustomSlide(props) {
  const { index } = props;
  return (
    <div className="slide">
      <div
        key={index}
        className="slide-image"
        style={{
          backgroundImage: `url(${items[index].image})`,
        }}
      ></div>
      <div className="info">
        <p className="name">{items[index].name}</p>
        <p className="price">$350</p>
      </div>
    </div>
  );
}

const Hero = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    dots: false,
    speed: 1000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="hero">
      <ul className="hero-categories">
        {categories.map((category, index) => (
          <li className={`${index === 0 ? "active" : ""}`} key={index}>
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
      <div className="slide-container">
        <div className="controls">
          <IoIosArrowBack
            className="prev"
            size={32}
            onClick={sliderRef?.slickPrev}
          />
          <IoIosArrowForward
            className="next"
            size={32}
            onClick={sliderRef?.slickNext}
          />
        </div>
        <Slider ref={setSliderRef} {...settings}>
          {items.map((item, index) => (
            <CustomSlide index={index} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
