import React, { useEffect } from "react";
import Slider from "react-slick";

import "./SliderCar.css";

import ava01 from "../../assets/slider-img/slide1.png";
import ava02 from "../../assets/slider-img/slide2.png";
import ava03 from "../../assets/slider-img/slide3.png";

const SliderCar = ({ vehicles }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const car = vehicles;
  const carSlides = car?.map((car, index) => (
    <div key={index}>
      <h2>{car?.name}</h2>
      <p>Engine: {car?.engine}</p>
    </div>
  ));
  return (
    <div
      style={{ paddingTop: "50px", marginLeft: "130px", marginRight: "130px" }}
    >
      <Slider {...settings}>{carSlides}</Slider>
    </div>
  );
};

export default SliderCar;
