import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { IoSearchSharp } from "react-icons/io5";
import { BsTelephoneInbound } from "react-icons/bs";

import "./Navbar.css";
const navLinks = [
  {
    path: "/home",
    display: "Trang chủ",
  },
  {
    path: "/findcar",
    display: "Tìm xe ngay",
  },
  {
    path: "/about",
    display: "Chứng Nhận ",
  },
  {
    path: "/register",
    display: "Đăng kí",
  },
];

const Navbar = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  return (
    <div
      className="main_navbar"
      style={{
        position: "fixed",
        right: "0",
        left: "0",
        top: "0",
        zIndex: "10000",
      }} >

      <div className="logo-1">
      </div>
      < div className="navigation" ref={menuRef} onClick={toggleMenu}>
        <div className="menu">
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              className={(a) =>
                a.isActive ? "nav_item nav_active" : "nav_item"
              }
              key={index}
            >
              { item.display}
            </NavLink>
          ))}
        </div>
        <button className="signIn-button">Đăng Nhập</button>
        <div className="navbar_search">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-btn"> <IoSearchSharp /></button>
        </div>
      </div>
      <div style={{color: 'white' , marginTop: '7px' , width: '90%',marginRight:'150px'}}>
      <div><h6> Hotline <p style={{color:'white',display:'flex'}}>0942917989</p> </h6></div>
      </div>
      
    </div>
  );
};

export default Navbar;
