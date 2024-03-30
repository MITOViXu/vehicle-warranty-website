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
import HersoSlider from "../../components/HeroSlider/HeroSlider.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SliderCar from "../../components/SliderCar/SliderCar.jsx";
import { useDebounce } from "../../hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as VehicleServices from "../../services/VehicleService.js";
import Loading from "../../components/LoadingComponent/Loading.jsx";
import { Reason } from "../../assets/index.js";
const Home = (props) => {
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [limit, setLimit] = useState(3);
  const [vehicleinfor, setVehicleinfor] = useState(null);
  async function addInfo(info) {
    setVehicleinfor(info);
  }
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  const [loading, setLoading] = useState(false);
  const fetchVehicleAll = async (context) => {
    const limit = 10; //context?.queryKey && context?.queryKey[1];
    const search = context?.queryKey && context?.queryKey[2];
    const res = await VehicleServices.getAllVehicle(0, limit);
    // console.log("res ben homepage: ", res);
    return res;
  };

  const {
    isLoading,
    data: vehicles,
    isPreviousData,
  } = useQuery({
    queryKey: "vehicles",
    queryFn: fetchVehicleAll,
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });

  // console.log("vehicle bên homepage: ", vehicles?.data);
  return (
    <Loading isLoading={loading}>
      <div style={{ overflowX: "hidden" }}>
        <HersoSlider />
        <div className="container mt-5 mb-5">
          <div className="row" style={{ margin: "0 auto" }}>
            <div className="col-md-6">
              <h3
                style={{
                  fontWeight: "bold",
                }}
              >
                Vì sao bạn nên mua xe qua Dinhgiaxe.com?{" "}
              </h3>
            </div>
            <div className="col-md-6">
              <div className="container">
                <button
                  className="Buy-car"
                  onClick={() => navigate("/findcar")}
                >
                  Tìm xe ngay
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {/* <ReasonWhy /> */}
          <img style={{ margin: "0 auto" }} src={Reason} alt="" />
        </div>
        <h1
          style={{
            marginTop: "50px",
            fontWeight: "bold",
            marginLeft: "130px",
            display: "flex",
          }}
        >
          Xem xe,mua bán nhanh chóng
          <IoMdCheckmarkCircleOutline />
        </h1>
        <SliderAnimate />
        <div className="px-[30px] lg:px-[100px]">
          <h1 style={{ fontWeight: "bolder" }}>Top các xe bán chạy</h1>
          <SliderCar vehicles={vehicles?.data} />
        </div>
        <Footer />
      </div>
    </Loading>
  );
};

export default Home;
