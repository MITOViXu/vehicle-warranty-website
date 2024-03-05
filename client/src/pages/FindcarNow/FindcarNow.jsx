import React from 'react'
import FindCar from "../../components/FindCar/FindCar.jsx";
import HersoSlider from "../../components/HeroSlider/HeroSlider.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SliderAnimate from "../../components/SliderAnimate/SliderAnimate";


const FindcarNow = () => {
  return (
    <div>
      <HersoSlider />
      <FindCar/>
      <Footer/>
    </div>
  )
}

export default FindcarNow