import React from "react";
import "./Home.css";
import "../../components/FindCar/FindCar.jsx";
import { useState, useEffect } from "react";
import { abi, contractAddress } from "../../constant/constant";
import { ethers } from "ethers";
import FindCar from "../../components/FindCar/FindCar.jsx";
import SliderAnimate from "../../components/SliderAnimate/SliderAnimate";
import ResultSearchCar from "../../components/ResultSearchCar/ResultSearchCar.jsx";
import AboutUs from "../../components/AboutUs/AboutUs.jsx";
import ReasonWhy from "../../components/ReasonWhy/ReasonWhy.jsx";
import HersoSlider from "../../components/HeroSlider/HeroSlider.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Home = (props) => {
  const [provider, setProvider] = useState(null);
  const [vehicleinfor, setVehicleinfor] = useState(null);
  async function addInfo(info) {
    setVehicleinfor(info);
  }
  return (
    <div>
      <HersoSlider />
      <h1 style={{marginTop:"50px",fontWeight:"bold",marginLeft:"130px"}}>Vì sao bạn nên mua xe qua Dinhgiaxe.com? <button className="Buy-car">Tìm xe ngay</button></h1>
      <div className="home" style={{ marginTop: "50px" }}>
       <ReasonWhy />
      </div>
      <h1 style={{marginTop:"50px",fontWeight:"bold",marginLeft:"130px",display:"flex"}}>Xem xe,mua bán nhanh chóng 
      <IoMdCheckmarkCircleOutline /></h1>
      <SliderAnimate />
      <Footer />
    </div>
  );
};

export default Home;
