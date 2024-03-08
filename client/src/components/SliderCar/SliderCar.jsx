import React, { useEffect } from "react";
import Slider from "react-slick";
import "./SliderCar.css";
import Link from "antd/es/typography/Link";
import ava01 from "../../assets/slider-img/slide1.png";
import ava02 from "../../assets/slider-img/slide2.png";
import ava03 from "../../assets/slider-img/slide3.png";
import { useNavigate } from "react-router-dom";

const SliderCar = ({ vehicles }) => {
  const navigate = useNavigate();
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
  const handleSlideClick = (plate) => {
    console.log("Đã click");

    navigate(`/detail/${plate}`);
    window.scrollTo(0, 0);
  };
  const car = vehicles;
  const carSlides = car?.map((car, index) => (
    <div
      onClick={() => handleSlideClick(car?.plates)}
      key={index}
      className="slider-item"
    >
      <h2>{car?.name}</h2>
      <p>Engine: {car?.engine}</p>
      <img className="display-image" src={car?.image[0]} alt="" />
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
