import React, { useState, useEffect } from "react";
import "./Detail.css";
import { Mercedes } from "../../assets";
import { Mercedes1 } from "../../assets";
import { Mercedes2 } from "../../assets";
import { MdOutlineLocationOn } from "react-icons/md";
import DisplayContract from "../../components/DisplayContract/DisplayContract";
import { FaRegHeart } from "react-icons/fa";
import * as VehicleService from "../../services/VehicleService";
import { ethers } from "ethers";
import {
  carTransactionHistoryAdress,
  carmaintenanceAdress,
  caraccidentAdress,
  carTransactionHistoryABI,
  carmaintenanceABI,
  caraccidentABI,
} from "../../../Constant/constant";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaHeart } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaChargingStation } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { useParams } from "react-router-dom";
import Loading from "../../components/LoadingComponent/Loading";
import { FaRobot } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import { FaInfoCircle } from "react-icons/fa";
const Detail = () => {
  const { plate } = useParams();
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [love, setLove] = useState(false);
  const [image, setImage] = useState([]);
  const [selectedButton, setSelectedButton] = useState("detail-button");
  const [car, setCar] = useState({});
  const handleClick = (buttonType) => {
    setSelectedButton(buttonType);
  };
  const resetStateOnProductChange = () => {
    setCar({});
  };
  useEffect(() => {
    resetStateOnProductChange();
  }, [plate]);
  const fetchCar = async (plate) => {
    try {
      const res = await VehicleService.getDetailsVehicleByPlate(plate);
      if (res?.status === "OK") {
        setIsLoading(false);
        setCar(res?.data);
      } else {
        setIsLoading(false);
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      setIsLoading(false);
      // Handle error, e.g., show an error message
    }
  };
  useEffect(() => {
    if (car) {
      console.log("Data ben detail : ", car);
      // console.log("Có phải array không : ", Array.isArray(car.image));
      if (car?.image && Array.isArray(car.image) && car.image.length > 0) {
        // console.log("Type of image : ", typeof car?.image[0]);
        // console.log("Image : ", car?.image[0]);
        setImage(car?.image);
      } else {
        console.log("Image array is undefined, empty, or not an array.");
      }
      console.log("ID CUA XE: ", car?._id);
    }
  }, [car]);
  useEffect(() => {
    if (plate) {
      fetchCar(plate);
    }
  }, [plate]);

  useEffect(() => {
    console.log("Cars: ", cars);
  }, [cars]);
  useEffect(() => {}, [car?._id]);
  // const imgs = [
  //   { id: 0, value: Mercedes },
  //   { id: 1, value: Mercedes1 },
  //   { id: 2, value: Mercedes2 },
  // ];
  // const [wordData, setWordData] = useState(imgs[0]);
  // const [val, setVal] = useState(0);
  // const handleClick1 = (index) => {
  //   console.log(index);
  //   setVal(index);
  //   const wordSlider = imgs[index];
  //   setWordData(wordSlider);
  // };
  // const handleNext = () => {
  //   let index = val < imgs.length - 1 ? val + 1 : val;
  //   setVal(index);
  //   const wordSlider = imgs[index];
  //   setWordData(wordSlider);
  // };
  // const handlePrevious = () => {
  //   let index = val <= imgs.length - 1 && val > 0 ? val - 1 : val;
  //   setVal(index);
  //   const wordSlider = imgs[index];
  //   setWordData(wordSlider);
  // };
  function generateImageArray(images) {
    const generatedImages = images.map((image) => ({
      original: image,
      thumbnail: image,
    }));
    return generatedImages;
  }

  return (
    <Loading isLoading={isLoading}>
      <div className="detail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6">
              <ImageGallery items={generateImageArray(image)} />
            </div>
            <div className="col-xl-6">
              <div className="product-info">
                <div className="product-info-location">
                  <MdOutlineLocationOn size={20} />
                  <p style={{ fontWeight: "500", fontSize: "12px" }}>
                    {car?.address}
                  </p>
                </div>
                <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
                  {car?.name}
                </p>
                <p className="product-info-price">{car?.price}</p>
                <div className="product-info-more-info">
                  <p className="product-info-more-info-1">Biển số xe: </p>
                  <p className="product-info-more-info-2">{car?.plates}</p>
                </div>
                {/* <div className="product-info-option">
            <div className="product-info-options">47,000Km</div>
            <div className="product-info-options">5 chỗ</div>
            <div className="product-info-options">Số tự động</div>
            <div className="product-info-options">Sedan</div>
          </div> */}
                <div class="grid grid-cols-4 items-center gap-2">
                  <div class="rounded bg-gray-100 py-1">
                    <p class="text-gray-800 text-[12px] leading-[20px] md:text-[14px] md:leading-[20px] font-semibold text-center">
                      {car?.rolling}
                    </p>
                  </div>
                  <div class="rounded bg-gray-100 py-1">
                    <p class="text-gray-800 text-[12px] leading-[20px] md:text-[14px] md:leading-[20px] font-semibold text-center">
                      {car?.gear}
                    </p>
                  </div>
                  <div class="rounded bg-gray-100 py-1">
                    <p class="text-gray-800 text-[12px] leading-[20px] md:text-[14px] md:leading-[20px] font-semibold text-center">
                      {car?.type}
                    </p>
                  </div>
                  <div class="rounded bg-gray-100 py-1">
                    <p class="text-gray-800 text-[12px] leading-[20px] md:text-[14px] md:leading-[20px] font-semibold text-center">
                      {car?.color}
                    </p>
                  </div>
                  <div className="product-info-contact">
                    <div className="product-info-contact-compare">
                      <input
                        style={{
                          display: "inline-block",
                          width: "20%",
                        }}
                        type="checkbox"
                      />
                      <p style={{ display: "inline-block", width: "50%" }}>
                        So sánh
                      </p>
                    </div>
                    <div className="product-info-contact-count">
                      {love ? (
                        <FaRegHeart
                          className="product-info-contact-counts"
                          onClick={() => {
                            setLove(!love);
                          }}
                        />
                      ) : (
                        <FaHeart
                          className="product-info-contact-counts"
                          onClick={() => {
                            setLove(!love);
                          }}
                          style={{ color: "red" }}
                        />
                      )}

                      <p className="product-info-contact-counts">Yêu thích</p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "right",
                    justifyContent: "end",
                  }}
                >
                  <p
                    style={{
                      display: "inline-block",
                    }}
                  >
                    ID: 567
                  </p>
                </div>
              </div>
              <div className="product-book">
                <div class="flex flex-row justify-center items-center">
                  <p class="text-black font-semibold text-center text-[17px]">
                    Vehicle Warranty
                  </p>
                </div>
                <div>
                  <button className="book-button">Đặt lịch xem xe</button>
                  <button className="price-paid">Trả giá</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 mt-5">
              <div>
                <div className="product-more-info">
                  <h1>So sánh giá thị trường</h1>
                  <FaInfoCircle size={30} />
                </div>
                <div className="product-more-info-result">
                  <p>Không có thông tin giá thị trường</p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="col-xl-6 mt-5">
              <div>
                <div className="product-info-detail">
                  <h1>Thông tin về xe</h1>
                  <div>
                    <button
                      style={{ marginRight: "10px" }}
                      className={
                        selectedButton === "detail-button"
                          ? "onclick"
                          : "detail-button"
                      }
                      onClick={() => handleClick("detail-button")}
                    >
                      Thông số kỹ thuật
                    </button>
                    <button
                      className={
                        selectedButton === "describe-button"
                          ? "onclick"
                          : "describe-button"
                      }
                      onClick={() => handleClick("describe-button")}
                    >
                      Mô tả
                    </button>
                  </div>
                </div>
                {selectedButton === "detail-button" ? (
                  <div className="product-more-detail">
                    <table className="block-table">
                      <tbody>
                        <tr>
                          <td>
                            <FaCar
                              size={30}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            />{" "}
                            Model
                          </td>
                          <td>{car?.name}</td>
                        </tr>
                        <tr>
                          <td>
                            <FaTachometerAlt
                              size={30}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            />{" "}
                            Giấy phép
                          </td>
                          <td>{car?.license}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosSettings
                              size={30}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            />{" "}
                            Nhãn hàng
                          </td>
                          <td>{car?.brand}</td>
                        </tr>
                        <tr>
                          <td>
                            <FaChargingStation
                              size={30}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            />{" "}
                            Nhiên liệu
                          </td>
                          <td>{car?.fuel}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosColorPalette
                              size={30}
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                              }}
                            />{" "}
                            Kiểu dáng
                          </td>
                          <td>{car?.type}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="product-describe-more">
                    <div className="product-describe-more-more">
                      <p>
                        {car?.description ? car?.description : "Không có mô tả"}
                      </p>
                    </div>
                  </div>
                )}
                <div
                  style={{ marginTop: "20px" }}
                  className="product-describe-more"
                >
                  <div className="product-AI">
                    <FaRobot size={25} />
                    <p style={{ fontSize: "20px" }}>Hỏi trợ lý AI</p>
                  </div>
                  <div className="container product-AI-ask">
                    <div className="row gap-2">
                      <button className="col-md-3 col-4 p-2 ask-AI d-md-block">
                        Ưu và nhược điểm
                      </button>
                      <button className="col-md-3 col-4 p-2 ask-AI d-md-block">
                        Thông số kĩ thuật nâng cao
                      </button>
                      <button className="col-md-3 col-4 p-2 ask-AI d-md-block">
                        Chế độ bảo hành
                      </button>
                      <button className="col-md-3 col-4 p-2 ask-AI d-md-block">
                        Chính sách trả góp
                      </button>
                      <button className="col-md-3 col-4 p-2 ask-AI d-md-block">
                        Quy trình mua xe
                      </button>
                      <button className="col-md-3 col-4 p-2 ask-AI d-md-block">
                        Tính năng an toàn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          {car?._id ? (
            <DisplayContract type="his" carId={car?._id} />
          ) : (
            <div>Chưa có lịch sử</div>
          )}
        </div> */}
      </div>
      <Footer />
    </Loading>
  );
};

export default Detail;
