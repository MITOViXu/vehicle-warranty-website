import React, { useState } from "react";
import { ethers } from "ethers";
import { contractAddress, abi } from "../../constant/constant";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./FindCar.css";
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
  return (
    <div className="findcar-container">
      <div className="filter-option">
        <div className="price-range">
          <h6 style={{ fontWeight: "bold", marginBottom: "18px" }}>
            Theo khoảng giá
          </h6>
          <div className="price-box">
            <button className="bttn-600-800"></button>
            <div class="box2">
              <button className="bttn-800-1m"></button>
              <button className="bttn-1m"></button>
            </div>
          </div>
        </div>
        <div className="option-range">
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
        <div className="support-range">
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
      <div className="filter-plates">
        <div className="plates">
          <div className="plates-img"></div>
          <div className="plates-find">
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
              <div style={{ width: "100%" }}>
                <input
                  className="input bienso"
                  type="text"
                  placeholder="Nhập Biển Số Xe"
                />
              </div>
              <div className="input-option">
                <select className="input" placeholder="Loại xe">
                  <option value="" disabled selected hidden>
                    Loại xe
                  </option>
                  <option value="">Sedan</option>
                  <option value="">SUV</option>
                  <option value="">Hatchback</option>
                </select>
                <input
                  className="input thanhpho"
                  type="text"
                  placeholder="Nhập Thành Phố"
                />
              </div>
              <div style={{ width: "100%" }}>
                <button className="bttn-search">Tìm Kiếm Ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCar;
