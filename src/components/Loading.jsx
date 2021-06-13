import React from "react";
import { BallSpinner } from "react-spinners-kit";
import logo from "./../logo3.svg";
const Loading = () => {
  return (
    <div className="loading">
      <img src={logo} alt="" />
      <BallSpinner size={30} color="#f52f57"></BallSpinner>
    </div>
  );
};

export default Loading;
