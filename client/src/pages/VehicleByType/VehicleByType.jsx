import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as VehicleServices from "../../services/VehicleService.js";
import { useQuery } from "@tanstack/react-query";
import CarCard from "../../components/CarCard/CarCard.jsx";
import Loading from "../../components/LoadingComponent/Loading.jsx";
import { Skeleton } from "antd";
const VehicleByType = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [vehicles, setVehicles] = useState({});
  const handleSlideClick = (plate) => {
    navigate(`/detail/${plate}`);
    window.scrollTo(0, 0);
  };
  const fetchVehicleAll = async (name) => {
    setLoading(true);
    const limit = 10;
    try {
      const res = await VehicleServices.getAllVehicle(name, limit);
      // console.log("res ben homepage: ", res);
      if (res?.status === "OK") {
        setLoading(false);
        setVehicles(res);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log("Use parame là: ", name);
    fetchVehicleAll(name);
  }, [name]);
  useEffect(() => {
    // console.log("Vehicles là: ", vehicles?.data);
  }, [vehicles]);
  const renderVehicle = vehicles?.data?.map((car, index) => (
    <div
      className="col-xl-4 col-lg-6 mt-5"
      onClick={() => handleSlideClick(car?.plates)}
    >
      {console.log("Vo duoc render Vehicle")}
      <CarCard
        data={{
          img: car?.image[0],
          address: car?.address,
          type: car?.type,
          name: car?.name,
          engine: car?.engine,
          plate: car?.plates,
        }}
      />
    </div>
  ));
  return (
    // <Skeleton key={1} height={390} width={292.5} />
    <Loading isLoading={loading}>
      <div style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row mt-5">
            {console.log("Vehicle: ", vehicles)}
            {vehicles?.data && vehicles.data.length > 0 ? (
              renderVehicle
            ) : (
              <dvi>Chưa có dữ liệu xe</dvi>
            )}
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default VehicleByType;
