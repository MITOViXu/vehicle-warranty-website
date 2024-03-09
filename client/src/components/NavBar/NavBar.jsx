import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { Badge, Button, Popover } from "antd";
import { resetUser } from "../../redux/slides/userSlide";
import * as UserService from "../../services/UserService";
import {
  WrapperContentPopup,
  WrapperHeader,
  WrapperHeaderAccout,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BsTelephoneInbound } from "react-icons/bs";

import "./NavBar.css";
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
  // {
  //   path: "/register",
  //   display: "Đăng kí",
  // },
];

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  // console.log("use bên navbar", user);
  const menuRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const handleLogout = async () => {
    setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/");
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    setUserName(user?.name);
    setLoading(false);
  }, [user?.name, user?.avatar]);
  const handleClickNavigate = (type) => {
    if (type === "admin") {
      navigate("/admin");
    } else {
      handleLogout();
    }
    setIsOpenPopup(false);
  };
  const content = (
    <div>
      {user?.isAdmin && (
        <WrapperContentPopup onClick={() => handleClickNavigate("admin")}>
          Quản lí hệ thống
        </WrapperContentPopup>
      )}
      <WrapperContentPopup onClick={() => handleClickNavigate()}>
        Đăng xuất
      </WrapperContentPopup>
    </div>
  );

  return (
    <div
      className="main_navbar"
      style={{
        position: "fixed",
        right: "0",
        left: "0",
        top: "0",
        zIndex: "10000",
      }}
    >
      <div
        className="logo-1"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      ></div>
      <div className="navigation" ref={menuRef} onClick={toggleMenu}>
        <div className="menu">
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              className={(a) =>
                a.isActive ? "nav_item nav_active" : "nav_item"
              }
              key={index}
            >
              {item.display}
            </NavLink>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {user?.name ? (
            <>
              <Popover content={content} trigger="click" open={isOpenPopup}>
                <div
                  style={{
                    cursor: "pointer",
                    maxWidth: 100,
                    overflow: "hidden",
                    color: "white",
                    paddingLeft: "60px",
                    paddingTop: "12px",
                    fontSize: "20px",
                    fontWeight: "700",
                    textOverflow: "ellipsis",
                  }}
                  onClick={() => setIsOpenPopup((prev) => !prev)}
                >
                  <p>{userName?.length ? userName : user?.email}</p>
                </div>
              </Popover>
            </>
          ) : (
            <button
              className="signIn-button"
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              Đăng Nhập
            </button>
          )}
        </div>

        <div className="navbar_search">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-btn">
            {" "}
            <IoSearchSharp />
          </button>
        </div>
      </div>
      <div
        style={{
          color: "white",
          marginTop: "7px",
          width: "90%",
          marginRight: "150px",
        }}
      >
        <div>
          <h6>
            {" "}
            Hotline{" "}
            <p style={{ color: "white", display: "flex" }}>0942917989</p>{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
