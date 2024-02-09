import React from "react";
import "./hero.css";
import { categories } from "../../constants/constants";
import ImgSlider from "../../containers/ImgSlider/ImgSlider";

const Hero = () => {
//   const settings = {
//     dots: false,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     arrows: false,
//     infinite: true,
//     autoplay: false,
//     autoplaySpeed: 3000,
//   };

  return (
    <div className="hero">
      <ul className="hero-categories">
        {categories.map((category, index) => (
          <li className={`${index === 0 ? "active" : ""}`} key={index}>
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
      <ImgSlider />
      {/* <div
        className="slides-carousel"
        style={{ position: "relative", marginTop: "2rem" }}
      >
        <RenderArrows />
        <Slider {...settings}>
          {items.map((item, index) => (
            <div className="slider-container" key={index} style={{margin: "0 2rem"}}>
              <img
                src="https://i.seadn.io/s/production/e1497539-472f-43ec-9d5b-477ca1558f2e.png?w=500&auto=format"
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};

export default Hero;
