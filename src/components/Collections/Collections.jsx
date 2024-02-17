import React, { useState } from "react";
import "./collections.css";
import { notableCollections } from "../../constants/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Collections = ({ title, isCategory = false, btnTitle = "View Category" }) => {
  const [collectionRef, setCollectionRef] = useState(null);
  const settings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 580,
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
    <div className="collections">
      <div className="col-heading">
        <h2>{title}</h2>
        {isCategory && <button>{btnTitle}</button>}
      </div>
      <div className="collection-list">
        <div className="controls-btn">
          <IoIosArrowBack
            className="back"
            size={32}
            onClick={collectionRef?.slickPrev}
          />
          <IoIosArrowForward
            className="forward"
            size={32}
            onClick={collectionRef?.slickNext}
          />
        </div>
        <Slider ref={setCollectionRef} {...settings}>
          {notableCollections.map((e, index) => (
            <div className="items" key={index}>
              <div className="collection-card">
                <img src={e.image} alt="" />
                <div className="text-content">
                  <h4>ELESAPIEN ERC-404</h4>
                  <p>Floor</p>
                  <p>0.04 ETH</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collections;
