import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";
import About from "../pages/About/About";
import FindcarNow from "../pages/FindcarNow/FindcarNow";
import Detail from "../pages/Detail/Detail";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/findcar" element={<FindcarNow />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

export default Routers;
