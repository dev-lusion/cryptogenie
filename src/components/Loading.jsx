import React from "react";
import { BallSpinner } from "react-spinners-kit";
import logo from "./../final_genie.svg";
const Loading = () => {
  return (
    <div className="loading">
      <img src={logo} alt="" />
      <h4>
        crypto<span>genie</span>
      </h4>
      <BallSpinner size={30} color="#2a95ff"></BallSpinner>
    </div>
  );
};

export default Loading;
