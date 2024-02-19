import React, { useState } from "react";
import { ethers } from "ethers";
import { contractAddress, abi } from "../../constant/constant";
import "./FindCar.css";
const FindCar = (props) => {
  const [provider, setProvider] = useState(null);
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
    setActiveButton(button);
  };
  return (
    <div className="findcar-container">
      <div className="filter-option">
        <div className="price-range">
          <h6 style={{ fontWeight: "bold" }}>Theo khoảng giá</h6>
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
          <div className="option-result"></div>
        </div>
        <div className="support-range"></div>
      </div>
      <div className="filter-plates"></div>
    </div>
  );
};

export default FindCar;
