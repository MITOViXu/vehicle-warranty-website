import React, { useState, useEffect } from "react";
import "./SignIn.css";
import { NavLink, useNavigate } from "react-router-dom";
import audi from "../../assets/audirs7.jpg";
import mclaren from "../../assets/mclaren.jpg";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/InputForm/InputForm";
import { jwtDecode } from "jwt-decode";
import * as UserService from "../../services/UserService";
import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Loading from "../../components/LoadingComponent/Loading";
import { useMutationHooks } from "../../hooks/useMutationHook";

const SignInPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const location = useLocation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };
  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  const { data, isPending, isSuccess } = mutation;
  console.log("mutation: ", mutation);
  const handleSignIn = () => {
    console.log("logingloin");
    mutation.mutate({
      email,
      password,
    });
  };
  const handleGetDetailsUser = async (id, token) => {
    const storage = localStorage.getItem("refresh_token");
    const refreshToken = JSON.parse(storage);

    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token, refreshToken }));
  };
  useEffect(() => {
    if (isSuccess) {
      if (location?.state) {
        navigate(location?.state);
      } else {
        navigate("/");
      }
      localStorage.setItem("access_token", JSON.stringify(data?.access_token));
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(data?.refresh_token)
      );
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token);
        }
      }
    }
  }, [isSuccess]);

  return (
    <div className="sin">
      <div className="sin-header">
        <div className="sin-header-title">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
            <h1>Web site đăng kiểm</h1>
          </NavLink>
          <h1 style={{ color: "red" }}>Đăng Nhập</h1>
        </div>
        <p>Bạn cần giúp đỡ ?</p>
      </div>
      <div className="sin-content">
        <div className="sin-content-image">
          <img style={{ width: "70%" }} src={audi} alt="" />
          <img style={{ width: "70%" }} src={mclaren} alt="" />
        </div>
        <div className="sin-content-form">
          <div>
            <h1 className="sin-content-form-title">Đăng nhập</h1>
          </div>
          <div>
            <InputForm
              style={{
                marginBottom: "10px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
              placeholder="abc@gmail.com"
              value={email}
              onChange={handleOnchangeEmail}
            />
          </div>
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "30%",

                right: "8px",
              }}
            >
              {isShowPassword ? (
                <FaRegEyeSlash size={20} />
              ) : (
                <FaRegEye size={20} />
              )}
            </span>
            <InputForm
              placeholder="password..."
              style={{ fontSize: "15px", fontWeight: "bold" }}
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnchangePassword}
            />
          </div>
          {data?.status === "ERR" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}
          <Loading isLoading={isPending}>
            <ButtonComponent
              disabled={!email.length || !password.length}
              onClick={handleSignIn}
              size={40}
              styleButton={{
                background: "rgb(255, 57, 69)",
                height: "48px",
                width: "100%",
                border: "none",
                borderRadius: "4px",
                margin: "26px 0 10px",
              }}
              textbutton={"Đăng nhập"}
              styleTextButton={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          </Loading>
          <div className="sin-content-form-try">
            <a className="sin-content-form-try-pass">Quên mật khẩu ?</a>
            <a className="sin-content-form-try-pass">Đăng nhập với SMS</a>
          </div>
          <div className="sin-content-form-sup">
            <p>Bạn mới sử dụng VehicleWarranty</p>
            <NavLink to="/sign-up">Đăng kí</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
