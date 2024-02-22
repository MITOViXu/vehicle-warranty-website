import React, { useState } from "react";
import "./Detail.css";
import { Mercedes } from "../../assets";
import { Mercedes1 } from "../../assets";
import { Mercedes2 } from "../../assets";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaHeart } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaChargingStation } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

import { FaRobot } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
const Detail = () => {
  const [love, setLove] = useState(false);
  const [selectedButton, setSelectedButton] = useState("detail-button");

  const handleClick = (buttonType) => {
    setSelectedButton(buttonType);
  };
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
  const images = [
    {
      original: Mercedes,
      thumbnail: Mercedes,
    },
    {
      original: Mercedes1,
      thumbnail: Mercedes1,
    },
    {
      original: Mercedes2,
      thumbnail: Mercedes2,
    },
    {
      original: Mercedes2,
      thumbnail: Mercedes2,
    },
    {
      original: Mercedes2,
      thumbnail: Mercedes2,
    },
    {
      original: Mercedes2,
      thumbnail: Mercedes2,
    },
    {
      original: Mercedes2,
      thumbnail: Mercedes2,
    },
    {
      original: Mercedes2,
      thumbnail: Mercedes2,
    },
    {
      original: Mercedes2,
      thumbnail: Mercedes2,
    },
    {
      original: Mercedes2,
      thumbnail: Mercedes2,
    },
  ];
  return (
    <div className="detail">
      <aside className="car-intro">
        <ImageGallery items={images} />;
      </aside>
      <aside className="product-side">
        <div className="product-info">
          <div className="product-info-location">
            <MdOutlineLocationOn size={20} />
            <p style={{ fontWeight: "500", fontSize: "12px" }}>
              TP. Hồ Chí Minh
            </p>
          </div>
          <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
            Mercedes E 300 2011
          </p>
          <p className="product-info-price">599 triệu VND</p>
          <div className="product-info-more-info">
            <p className="product-info-more-info-1">Trả góp từ:</p>
            <p className="product-info-more-info-2">5.1 triệu / tháng</p>
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
                47,000 km
              </p>
            </div>
            <div class="rounded bg-gray-100 py-1">
              <p class="text-gray-800 text-[12px] leading-[20px] md:text-[14px] md:leading-[20px] font-semibold text-center">
                5 chỗ
              </p>
            </div>
            <div class="rounded bg-gray-100 py-1">
              <p class="text-gray-800 text-[12px] leading-[20px] md:text-[14px] md:leading-[20px] font-semibold text-center">
                Số tự động
              </p>
            </div>
            <div class="rounded bg-gray-100 py-1">
              <p class="text-gray-800 text-[12px] leading-[20px] md:text-[14px] md:leading-[20px] font-semibold text-center">
                Sedan
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
                <p style={{ display: "inline-block", width: "50%" }}>So sánh</p>
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
      </aside>
      <div
        style={{
          display: "flex",
          // height: "80vh",
          // backgroundColor: "red",
        }}
      >
        <aside
          style={{
            width: "50%",
            display: "inline-block",
            padding: "10px 20px",
            margin: "20px 0px",
          }}
        >
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
        </aside>
        <aside
          style={{
            width: "50%",
            display: "inline-block",
            padding: "10px 20px",
            margin: "20px 0px",
          }}
        >
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
                      <td>E 300</td>
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
                        Công tơ mét
                      </td>
                      <td>47,000 km</td>
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
                        Loại hộp số
                      </td>
                      <td>Hộp số tự động</td>
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
                      <td>Xăng</td>
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
                      <td>SEDAN</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="product-describe-more">
                <div className="product-describe-more-more">
                  <p>
                    Xe được mua từ một đại lý chính hãng, có đầy đủ giấy tờ, bảo
                    hành.
                  </p>
                  <p>
                    Xe đã được bảo dưỡng định kỳ theo đúng khuyến cáo của nhà
                    sản xuất.
                  </p>
                  <p>
                    Xe có ngoại thất còn khá mới, nội thất có thể bị xuống cấp
                    nhẹ do sử dụng.
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
              <div className="product-AI-ask">
                <button className="ask-AI">Ưu và nhược điểm</button>
                <button className="ask-AI">Thông số kĩ thuật nâng cao</button>
                <button className="ask-AI">Chế độ bảo hành</button>
                <button className="ask-AI">Chính sách trả góp</button>
                <button className="ask-AI">Quy trình mua xe</button>
                <button className="ask-AI">Tính năng an toàn</button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Detail;
