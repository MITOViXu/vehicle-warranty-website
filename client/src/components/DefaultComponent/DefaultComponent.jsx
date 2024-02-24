import React from "react";
import Navbar from "../NavBar/Navbar";

const DefaultComponent = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DefaultComponent;
