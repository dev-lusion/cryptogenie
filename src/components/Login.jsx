import React, { useState, useEffect } from "react";
import SelectCurrency from "./SelectCurrency";
import "boxicons";

const Login = () => {
  return (
    <div className="login">
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
