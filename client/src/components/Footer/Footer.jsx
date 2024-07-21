import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="container-fluid ">
        <div
          className="row"
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          <div className="rent-car col-md-6 col-xl-3 mt-5">
            <div className="footer_header-content">
              <div className="rent-car_header">
               HỆ THỐNG ĐỊNH GIÁ VÀ LƯU TRỮ DỮ LIỆU
              </div>
            </div>
            <p className="footer_content" id="rent-car-content">
              "Chúng tôi cung cấp các giải pháp định giá chính xác và tin cậy
              bằng trí tuệ nhân tạo, kết hợp với công nghệ blockchain để đảm bảo
              tính bảo mật và minh bạch của dữ liệu."
            </p>
          </div>
          <div className="quick-links col-md-6 col-xl-3 mt-5">
            <div className="footer_header-content">Quick Links</div>

            <div className="footer_content">
              <div id="quick-links">About</div>
              <div id="quick-links">Privacy Podivcy</div>
              <div id="quick-links">Car Listing</div>
              <div id="quick-links">Blog</div>
              <div id="quick-links">Contact</div>
            </div>
          </div>

          <div className="head-office col-md-6 col-xl-3 mt-5">
            <div className="footer_header-content">Head Office</div>

            <div className="footer_content">
              <div>Trường Đại Học Công Nghệ Thông Tin</div>
              <div>Phone: 0942917989</div>
              <div>Email: tuanqcao1406@gmail.com</div>
              <div>Office Time: 10am - 7pm</div>
            </div>
          </div>

          <div className="newsletter col-md-6 col-xl-3 mt-5">
            <div className="footer_header-content">Newsletter</div>

            <div className="footer_content" style={{ marginTop: "10px" }}>
              <div>Subscribe our newsletter</div>
            </div>

            <div className="input_container">
              <input type="text" className="email_input" placeholder="Email" />
              <button className="btn_input"></button>
            </div>
          </div>
        </div>

        <div className="copyright">
          <hr />
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
