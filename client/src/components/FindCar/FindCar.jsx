import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAddress, abi } from "../../constant/constant";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import plate from "./plate.svg";
import "./FindCar.css";
import VehicleByType from "../../pages/VehicleByType/VehicleByType";
import { Skeleton } from "antd";
// Component hiển thị nội dung khi chọn theo hãng
// Component hiển thị nội dung khi chọn theo nhu cầu
const ByNeedsContent = () => {
  return (
    <div className="content-theo-nhu-cau">
      <div className="nhucau xe-gia-dinh"></div>
      <div className="nhucau xe-luot"></div>
      <div className="nhucau xe-flex"></div>
    </div>
  );
};

// Component hiển thị nội dung khi chọn theo trả góp
const ByInstallmentsContent = () => {
  return (
    <div className="content-theo-tra-gop">
      <div className="tragop truoc"></div>
      <div className="tragop dinhky"></div>
      <div></div>
    </div>
  );
};

// Component hiển thị nội dung khi chọn theo kiểu dáng
const ByStyleContent = () => {
  return (
    <div className="content-theo-kieu-dang">
      <div class="kieu sedan"></div>
      <div class="kieu hatchback"></div>
      <div class="kieu suv"></div>
      <div class="kieu mpv"></div>
      <div class="kieu van"></div>
      <div class="kieu pickup"></div>
      <div class="kieu crossover"></div>
    </div>
  );
};

const FindCar = (props) => {
  const [provider, setProvider] = useState(null);
  const navigate = useNavigate(); // Move useNavigate hook here
  const [vehicleinfor, setVehicleinfor] = useState(null);
  const [origin, setOrigin] = useState("");
  const [condition, setCondition] = useState("");
  const [carModel, setCarModel] = useState("");
  const [exteriorColor, setExteriorColor] = useState("");
  const [interiorColor, setInteriorColor] = useState("");
  const [numDoor, setNumDoor] = useState(0);
  const [numSeat, setNumSeat] = useState(0);
  const [engine, setEngine] = useState("");
  const [capacity, setCapacity] = useState(0.0);
  const [drivetype, setDriveType] = useState("");
  const [inputCar, setInputCar] = useState([]);
  const [plates, setPlates] = useState(null);
  const [mileague, setMileague] = useState(0.0);
  const [brand, setBrand] = useState(null);
  const [grade, setGrade] = useState(null);
  const [nameCar, setNameCar] = useState(null);
  const [yearManufac, setYearManufac] = useState(null);
  const [consumption, setConsumption] = useState(0);
  const [findCar, setFindcar] = useState(null);
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const numberPLate = document.querySelector("#message").value;
      const provider = new ethers.providers.JsonRpcProvider(
        "https://eth-sepolia.g.alchemy.com/v2/MPMfIIQQw3C8j6ZPKtmlX-dBPCSE7rmU"
      );
      const contract = new ethers.Contract(contractAddress, abi, provider);
      const results = await contract.getVehicleInfo(numberPLate);
      setVehicleinfor(results);
      console.log(results);
      props.addInfo(results);
    } catch (error) {
      console.error("Error fetching cars from contract:", error);
    }
  }
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (button) => {
    if (button !== activeButton) {
      setActiveButton(button);
    }
  };
  const handleOnClick = (name) => {
    console.log("Name: ", name);
    navigate(`/vehicle-type/${name}`);
  };
  const ByBrandContent = () => {
    return (
      <div className="content-theo-hang">
        <div
          class="item toyota"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("toyota")}
        ></div>
        <div
          class="item honda"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("honda")}
        ></div>
        <div
          class="item huyndai"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("hyundai")}
        ></div>
        <div
          class="item kia"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("kia")}
        ></div>
        <div
          class="item madza"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("madza")}
        ></div>
        <div
          class="item ford"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("ford")}
        ></div>
        <div
          class="item audi"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("audi")}
        ></div>
        <div
          class="item bmw"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("bmw")}
        ></div>
        <div
          class="item chervolet"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("chervolet")}
        ></div>
        <div
          class="item mercedes"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("mercedes")}
        ></div>
        <div
          class="item mitsubishi"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("mitsubishi")}
        ></div>
        <div
          class="item suzuki"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("suzuki")}
        ></div>
        <div
          class="item vin"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("vin")}
        ></div>
        <div
          class="item lamborghini"
          style={{ cursor: "pointer" }}
          onClick={() => handleOnClick("lamborghini")}
        ></div>
      </div>
    );
  };
  // Render component phù hợp dựa trên activeButton
  const renderContent = () => {
    switch (activeButton) {
      case "theo-hang":
        return <ByBrandContent />;
      case "theo-nhu-cau":
        return <ByNeedsContent />;
      case "theo-tra-gop":
        return <ByInstallmentsContent />;
      case "theo-kieu-dang":
        return <ByStyleContent />;
      default:
        return <ByBrandContent />;
    }
  };
  const handleInput = (e) => {
    setPlates(e.target.value);
  };
  const handleMileague = (e) => {
    const value = Number(e.target.value);
    setMileague(value);
    if (value > 0) {
      setCondition("Xe đã dùng");
    } else {
      setCondition("Xe mới"); // Reset condition if mileague is not greater than 0
    }
  };
  const handleBrand = (e) => {
    setBrand(e.target.value);
  };
  const handleGrade = (e) => {
    setGrade(e.target.value);
  };
  const handleNameCar = (e) => {
    setNameCar(e.target.value);
  };
  const handleYearManufac = (e) => {
    setYearManufac(e.target.value);
  };
  const handleEngine = (e) => {
    setEngine(e.target.value);
  };
  const handleChangeOrigin = (event) => {
    setOrigin(event.target.value);
  };
  const handleConsumption = (e) => {
    setConsumption(Number(e.target.value));
  };
  const handleCondition = (e) => {
    setCondition(e.target.value);
  };
  const handleCarModel = (e) => {
    setCarModel(e.target.value);
  };
  const handleExteriorColor = (e) => {
    setExteriorColor(e.target.value);
  };
  const handleInterirorColor = (e) => {
    setInteriorColor(e.target.value);
  };
  const handleNumdoor = (e) => {
    setNumDoor(Number(e.target.value));
  };
  const handleNumseat = (e) => {
    setNumSeat(Number(e.target.value));
  };
  const handleCapacity = (e) => {
    setCapacity(Number(e.target.value));
  };
  const handleDriveType = (e) => {
    setDriveType(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setFindcar(plates);
    setPlates(null);
    // console.log("Plates: ", plates);
  };
  useEffect(() => {
    console.log("input car", inputCar);
  }, [inputCar]);
  const onPredict = (e) => {
    e.preventDefault();
    console.log("brand", brand);
    setInputCar([
      mileague,
      brand,
      grade,
      nameCar,
      yearManufac,
      origin,
      condition,
      carModel,
      exteriorColor,
      interiorColor,
      numDoor,
      numSeat,
      engine,
      capacity,
      drivetype,
      consumption,
    ]);

    // console.log("Plates: ", plates);
  };
  useEffect(() => {
    console.log("Plates: ", findCar);
  }, [findCar]);
  const reset = () => {
    setPlates(null);
    setFindcar(null);
  };
  return (
    <div className="findcar-container">
      <div className="container filter-option">
        <div className="row mt-5 mb-5">
          <div className="col-xl-4 d-none d-xl-block">
            <h6 style={{ fontWeight: "bold", marginBottom: "18px" }}>
              Theo khoảng giá
            </h6>
            <div className="price-box">
              <a className="bttn-600-800">
                {/* <img style={{ width: "50%",   }} src={car1} alt="" /> */}
              </a>
              <div class="box2">
                <button className="bttn-800-1m"></button>
                <button className="bttn-1m"></button>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="option-container-button">
              <button
                className={`btnn-theo-hang ${
                  activeButton === "theo-hang" ? "active" : ""
                }`}
                onClick={() => handleClick("theo-hang")}
              >
                Theo hãng
              </button>
              <button
                className={`btnn-theo-hang ${
                  activeButton === "theo-nhu-cau" ? "active" : ""
                }`}
                onClick={() => handleClick("theo-nhu-cau")}
              >
                Theo nhu cầu
              </button>
              <button
                className={`btnn-theo-hang ${
                  activeButton === "theo-tra-gop" ? "active" : ""
                }`}
                onClick={() => handleClick("theo-tra-gop")}
              >
                Theo trả góp
              </button>
              <button
                className={`btnn-theo-hang ${
                  activeButton === "theo-kieu-dang" ? "active" : ""
                }`}
                onClick={() => handleClick("theo-kieu-dang")}
              >
                Theo kiểu dáng
              </button>
            </div>
            <div className="option-result">{renderContent()}</div>
          </div>
          <div className="col-xl-4">
            <div className="all-car">
              <span>Xem tất cả xe</span>
              <MdOutlineArrowCircleRight />
            </div>
            <div className="support-find-car">
              <div>
                <p style={{ fontSize: "15px", marginBottom: "6px" }}>
                  Bạn cần hỗ trợ tìm xe?
                </p>
                <p style={{ color: "#029AF2" }}>Hãy để chúng tôi giúp bạn</p>
              </div>
              <div className="img-support"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-5 filter-plates mb-6">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-lg-6" style={{ width: "600px" }}>
            <img src={plate} alt="" />
          </div>
          <div className="col-lg-6" style={{ width: "600px" }}>
            <form action="" onSubmit={onSubmit}>
              <div>
                <h1 style={{ fontWeight: "800" }}>Tìm Kiếm Xe Trực Tuyến</h1>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    marginTop: "0px",
                  }}
                >
                  Bạn đã có biển số xe? Hãy tìm kiếm ngay nhé!
                </p>
              </div>
              <div className="input-group">
                <input
                  onChange={handleInput}
                  className="input bienso"
                  type="text"
                  value={plates ? plates : ""}
                  placeholder="Nhập Biển Số Xe"
                />

                <div className="input-option">
                  <select className="input" placeholder="Loại xe">
                    <option value="" style={{ color: "black" }}>
                      Loại xe
                    </option>
                    <option style={{ color: "black" }} value="">
                      Sedan
                    </option>
                    <option style={{ color: "black" }} value="">
                      SUV
                    </option>
                    <option style={{ color: "black" }} value="">
                      Hatchback
                    </option>
                  </select>
                  <input
                    className="input thanhpho"
                    type="text"
                    placeholder="Nhập Thành Phố"
                  />
                </div>
              </div>
              <div style={{ marginTop: "10px" }}>
                <button className="bttn-search">Tìm Kiếm Ngay</button>
              </div>
            </form>
            <button onClick={reset} className="hoantac">
              Hoàn Tác
            </button>
          </div>
          {/* here */}
        </div>
      </div>
      <div className="container p-5 filter-plates mb-6">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-lg-6" style={{ width: "600px" }}>
            <form action="" onSubmit={onPredict}>
              <div>
                <h1 style={{ fontWeight: "800" }}>Tra giá xe bằng AI</h1>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    marginTop: "0px",
                  }}
                >
                  Bạn đã có biển số xe? Hãy tìm kiếm ngay nhé!
                </p>
              </div>
              <div className="container">
                <div className="input-group">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row align-items-center">
                        <p
                          className="col-lg-7"
                          style={{ padding: "5px 30px", color:"white", fontSize:"16px", fontWeight:"bolder", margin: 0 }}
                        >
                          Số km đã đi :
                        </p>
                        <input
                          onChange={handleMileague}
                          className="col-lg-3 input bienso"
                          type="number"
                          value={mileague ? mileague : 0}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/* <select
                        className="input"
                        placeholder="Tình trạng"
                        value={condition}
                        disabled={true}
                      >
                        <option style={{ color: "black" }} value="Xe mới">
                          Xe mới
                        </option>
                        <option style={{ color: "black" }} value="Xe đã dùng">
                          Xe đã dùng
                        </option>
                      </select> */}
                      <input
                        onChange={handleMileague}
                        className="input bienso"
                        style={{ fontFamily: "cursive", fontSize: "30px" }}
                        // type="text"
                        value={condition ? condition : "Xe mới"}
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        onChange={handleBrand}
                        className="input bienso"
                        type="text"
                        value={brand ? brand : ""}
                        placeholder="Hãng"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        onChange={handleGrade}
                        className="input bienso"
                        type="text"
                        value={grade ? grade : ""}
                        placeholder="Grade"
                      />
                    </div>
                  </div>
                  {/* <input
                        onChange={handleBrand}
                        className="input bienso"
                        type="text"
                        value={brand ? brand : ""}
                        placeholder="Hãng"
                      /> */}
                  <div className="row" style={{ width: "550px" }}>
                    <div className="col-lg-9">
                      <input
                        onChange={handleNameCar}
                        className="input bienso"
                        type="text"
                        value={nameCar ? nameCar : ""}
                        placeholder="Tên xe"
                      />
                    </div>

                    <div className="col-lg-3">
                      <input
                        onChange={handleYearManufac}
                        className="input bienso"
                        type="text"
                        value={yearManufac ? yearManufac : ""}
                        placeholder="Năm sản xuất"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="row">
                      <div className="col-lg-6">
                        <select
                          className="input"
                          placeholder="Xuất xứ"
                          value={origin}
                          onChange={handleChangeOrigin}
                        >
                          <option value={"Xuất xứ"} style={{ color: "black" }}>
                            Xuất xứ
                          </option>
                          <option
                            style={{ color: "black" }}
                            value="Lắp ráp trong nước"
                          >
                            Lắp ráp trong nước
                          </option>
                          <option style={{ color: "black" }} value="Nhập khẩu">
                            Nhập khẩu
                          </option>
                        </select>
                      </div>
                      <div className="col-lg-6">
                        <select
                          className="input"
                          placeholder="Dòng xe"
                          value={carModel}
                          onChange={handleCarModel}
                        >
                          <option value="Dòng xe" style={{ color: "black" }}>
                            Dòng xe
                          </option>
                          <option style={{ color: "black" }} value="SUV">
                            SUV
                          </option>
                          <option style={{ color: "black" }} value="Crossover">
                            Crossover
                          </option>
                          <option
                            style={{ color: "black" }}
                            value="Van/Minivan"
                          >
                            Van/Minivan
                          </option>
                          <option
                            style={{ color: "black" }}
                            value="Bán tải / Pickup"
                          >
                            Bán tải / Pickup
                          </option>
                          <option style={{ color: "black" }} value="Sedan">
                            Sedan
                          </option>
                          <option style={{ color: "black" }} value="Hatchback">
                            Hatchback
                          </option>
                          <option style={{ color: "black" }} value="Wagon">
                            Wagon
                          </option>
                          <option style={{ color: "black" }} value="Coupe">
                            Coupe
                          </option>
                          <option
                            style={{ color: "black" }}
                            value="Convertible/Cabriolet"
                          >
                            Convertible/Cabriolet
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        {" "}
                        <select
                          className="input"
                          placeholder="Màu ngoại thất"
                          value={exteriorColor}
                          onChange={handleExteriorColor}
                        >
                          <option
                            value="Màu ngoại thất"
                            disabled
                            selected
                            hidden
                          >
                            Màu ngoại thất
                          </option>
                          <option style={{ color: "black" }} value="Trắng">
                            Trắng
                          </option>
                          <option style={{ color: "black" }} value="Đen">
                            Đen
                          </option>
                          <option style={{ color: "black" }} value="Bạc">
                            Bạc
                          </option>
                          <option style={{ color: "black" }} value="Đồng">
                            Đồng
                          </option>
                          <option style={{ color: "black" }} value="Xám">
                            Xám
                          </option>
                          <option style={{ color: "black" }} value="Đỏ">
                            Đỏ
                          </option>
                          <option style={{ color: "black" }} value="Nâu">
                            Nâu
                          </option>
                          <option style={{ color: "black" }} value="Xanh">
                            Xanh
                          </option>
                          <option style={{ color: "black" }} value="Ghi">
                            Ghi
                          </option>
                          <option style={{ color: "black" }} value="Cam">
                            Cam
                          </option>
                          <option style={{ color: "black" }} value="Vàng">
                            Vàng
                          </option>
                          <option style={{ color: "black" }} value="Cát">
                            Cát
                          </option>
                          <option style={{ color: "black" }} value="Nhiều màu">
                            Nhiều màu
                          </option>
                          <option style={{ color: "black" }} value="Kem">
                            Kem
                          </option>
                          <option style={{ color: "black" }} value="Hồng">
                            Hồng
                          </option>
                          <option style={{ color: "black" }} value="Tím">
                            Tím
                          </option>
                          <option style={{ color: "black" }} value="Màu khác">
                            Màu khác
                          </option>
                        </select>
                      </div>
                      <div className="col-lg-4">
                        <select
                          className="input"
                          placeholder="Màu nội thất"
                          value={interiorColor}
                          onChange={handleInterirorColor}
                        >
                          <option
                            value="Màu nội thất"
                            style={{ color: "black" }}
                          >
                            Màu nội thất
                          </option>
                          <option style={{ color: "black" }} value="Ghi">
                            Ghi
                          </option>
                          <option style={{ color: "black" }} value="Đen">
                            Đen
                          </option>
                          <option style={{ color: "black" }} value="Nâu">
                            Nâu
                          </option>
                          <option style={{ color: "black" }} value="Kem">
                            Kem
                          </option>
                          <option style={{ color: "black" }} value="Vàng">
                            Vàng
                          </option>
                          <option style={{ color: "black" }} value="Nhiều màu">
                            Nhiều màu
                          </option>
                          <option style={{ color: "black" }} value="Cát">
                            Cát
                          </option>
                          <option style={{ color: "black" }} value="Xám">
                            Xám
                          </option>
                          <option style={{ color: "black" }} value="Đỏ">
                            Đỏ
                          </option>
                          <option style={{ color: "black" }} value="Bạc">
                            Bạc
                          </option>
                          <option style={{ color: "black" }} value="Xanh">
                            Xanh
                          </option>
                          <option style={{ color: "black" }} value="Cam">
                            Cam
                          </option>
                          <option style={{ color: "black" }} value="Đồng">
                            Đồng
                          </option>
                          <option style={{ color: "black" }} value="Hồng">
                            Hồng
                          </option>
                          <option style={{ color: "black" }} value="Tím">
                            Tím
                          </option>
                          <option style={{ color: "black" }} value="Màu khác">
                            Màu khác
                          </option>
                        </select>
                      </div>
                      <div className="col-lg-4">
                        <select
                          className="input"
                          placeholder="Số cửa"
                          value={numDoor}
                          onChange={handleNumdoor}
                        >
                          <option
                            value={Number(null)}
                            style={{ color: "black" }}
                          >
                            Số cửa
                          </option>
                          <option style={{ color: "black" }} value={2}>
                            2
                          </option>
                          <option style={{ color: "black" }} value={5}>
                            5
                          </option>
                          <option style={{ color: "black" }} value={4}>
                            4
                          </option>
                          <option style={{ color: "black" }} value={6}>
                            6
                          </option>
                          <option style={{ color: "black" }} value={1}>
                            1
                          </option>
                          <option style={{ color: "black" }} value={3}>
                            3
                          </option>
                          <option style={{ color: "black" }} value={45}>
                            45
                          </option>
                          <option style={{ color: "black" }} value={44}>
                            44
                          </option>
                          <option style={{ color: "black" }} value={7}>
                            7
                          </option>
                          <option style={{ color: "black" }} value={54}>
                            54
                          </option>
                          <option style={{ color: "black" }} value={0}>
                            0
                          </option>
                          <option style={{ color: "black" }} value={42}>
                            42
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <select
                          className="input"
                          placeholder="Số chỗ ngồi"
                          value={numSeat}
                          onChange={handleNumseat}
                        >
                          <option
                            value={Number(null)}
                            style={{ color: "black" }}
                          >
                            Số chỗ ngồi
                          </option>
                          <option style={{ color: "black" }} value={2}>
                            2
                          </option>
                          <option style={{ color: "black" }} value={7}>
                            7
                          </option>
                          <option style={{ color: "black" }} value={8}>
                            8
                          </option>
                          <option style={{ color: "black" }} value={5}>
                            5
                          </option>
                          <option style={{ color: "black" }} value={3}>
                            3
                          </option>
                          <option style={{ color: "black" }} value={4}>
                            4
                          </option>
                          <option style={{ color: "black" }} value={6}>
                            6
                          </option>
                          <option style={{ color: "black" }} value={16}>
                            16
                          </option>
                          <option style={{ color: "black" }} value={20}>
                            20
                          </option>
                          <option style={{ color: "black" }} value={47}>
                            47
                          </option>
                          <option style={{ color: "black" }} value={10}>
                            10
                          </option>
                          <option style={{ color: "black" }} value={29}>
                            29
                          </option>
                          <option style={{ color: "black" }} value={11}>
                            11
                          </option>
                          <option style={{ color: "black" }} value={9}>
                            9
                          </option>
                          <option style={{ color: "black" }} value={42}>
                            42
                          </option>
                          <option style={{ color: "black" }} value={15}>
                            15
                          </option>
                          <option style={{ color: "black" }} value={17}>
                            17
                          </option>
                          <option style={{ color: "black" }} value={12}>
                            12
                          </option>
                          <option style={{ color: "black" }} value={38}>
                            38
                          </option>
                          <option style={{ color: "black" }} value={40}>
                            40
                          </option>
                          <option style={{ color: "black" }} value={1}>
                            1
                          </option>
                          <option style={{ color: "black" }} value={44}>
                            44
                          </option>
                          <option style={{ color: "black" }} value={46}>
                            46
                          </option>
                        </select>
                      </div>
                      <div className="col-lg-4">
                        <select
                          className="input"
                          placeholder="Động cơ"
                          value={engine}
                          onChange={handleEngine}
                        >
                          <option value="Động cơ" style={{ color: "black" }}>
                            Động cơ
                          </option>
                          <option style={{ color: "black" }} value="Xăng">
                            Xăng
                          </option>
                          <option style={{ color: "black" }} value="Dầu">
                            Dầu
                          </option>
                          <option style={{ color: "black" }} value="Hybrid">
                            Hybrid
                          </option>
                        </select>
                      </div>
                      <div className="col-lg-4">
                        <select
                          className="input"
                          placeholder="Dung tích"
                          value={capacity}
                          onChange={handleCapacity}
                        >
                          <option
                            value={Number(null)}
                            style={{ color: "black" }}
                          >
                            Dung tích
                          </option>
                          <option style={{ color: "black" }} value={1.0}>
                            1.0
                          </option>
                          <option style={{ color: "black" }} value={3.4}>
                            3.4
                          </option>
                          <option style={{ color: "black" }} value={2.0}>
                            2.0
                          </option>
                          <option style={{ color: "black" }} value={1.8}>
                            1.8
                          </option>
                          <option style={{ color: "black" }} value={1.5}>
                            1.5
                          </option>
                          <option style={{ color: "black" }} value={2.7}>
                            2.7
                          </option>
                          <option style={{ color: "black" }} value={2.2}>
                            2.2
                          </option>
                          <option style={{ color: "black" }} value={1.25}>
                            1.25
                          </option>
                          <option style={{ color: "black" }} value={11.1}>
                            11.1
                          </option>
                          <option style={{ color: "black" }} value={3.5}>
                            3.5
                          </option>
                          <option style={{ color: "black" }} value={2.8}>
                            2.8
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                        <select
                          className="input"
                          placeholder="Dẫn động"
                          value={drivetype}
                          onChange={handleDriveType}
                        >
                          <option value="Dẫn động" style={{ color: "black" }}>
                            Dẫn động
                          </option>
                          <option
                            style={{ color: "black" }}
                            value="RFD - Dẫn động cầu sau"
                          >
                            RFD - Dẫn động cầu sau
                          </option>
                          <option
                            style={{ color: "black" }}
                            value="AWD - 4 bánh toàn thời gian"
                          >
                            AWD - 4 bánh toàn thời gian
                          </option>
                          <option
                            style={{ color: "black" }}
                            value="FWD - Dẫn động cầu trước"
                          >
                            FWD - Dẫn động cầu trước
                          </option>
                          <option
                            style={{ color: "black" }}
                            value="4WD - Dẫn động 4 bánh"
                          >
                            4WD - Dẫn động 4 bánh
                          </option>
                          <option
                            style={{ color: "black" }}
                            value="4WD hoặc AWD"
                          >
                            4WD hoặc AWD
                          </option>
                        </select>
                      </div>
                      <div className="col-lg-4">
                        <input
                          onChange={handleConsumption}
                          className="input bienso"
                          type="text"
                          value={consumption ? consumption : ""}
                          placeholder="Tiêu thụ nhiên liệu"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "10px" }}>
                <button className="bttn-search">Tham khảo giá</button>
              </div>
            </form>
            <button onClick={reset} className="hoantac">
              Hoàn Tác
            </button>
          </div>
          <div className="col-lg-6" style={{ width: "600px" }}>
            <img src={plate} alt="" />
          </div>

          {/* here */}
        </div>
      </div>
      {findCar ? <VehicleByType plates={findCar} /> : <></>}
    </div>
  );
};

export default FindCar;
