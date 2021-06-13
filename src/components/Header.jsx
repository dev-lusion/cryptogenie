import React, { useState, useEffect } from "react";
import logo from "./../Vector3.png";
import cg from "./../logo2.png";
import "boxicons";
import Login from "./Login";
import SelectCurrency from "./SelectCurrency";
import { useSelector } from "react-redux";
import { selectCurrency } from "../store/currencySlice";

const Header = ({ login }) => {
  const curr = useSelector(selectCurrency);
  const [expand, setExpand] = useState(false);
  const [showDropdown, setShowDropDown] = useState(false);
  const [currency, setCurrency] = useState("INR");

  useEffect(() => {
    if (localStorage.getItem("currency")) {
      setCurrency(localStorage.getItem("currency"));
    }
  }, [localStorage.getItem("currency")]);
  console.log(currency);
  return (
    <div className="header">
      <div className="header__main">
        <div className="header__main__logo">
          {/* <h1>
            <span>crypto</span>.<span>genie</span>
          </h1> */}
          <img src={cg} alt="logo" />
        </div>
        <div className="header__main__search">
          <div className={`header__main__search__in ${expand ? "expand" : ""}`}>
            <div className="header__main__search__in__icon ">
              <box-icon name="search" color="#dbdbdb"></box-icon>
            </div>
            <input
              type="text"
              placeholder="Search cryptocurrency..."
              onClick={() => setExpand(!expand)}
            />
          </div>
        </div>
        <div className="selectcurrency">
          <div
            className="selectcurrency__currency"
            onClick={() => {
              setShowDropDown(!showDropdown);
            }}
          >
            {curr}
          </div>
        </div>
        {showDropdown && (
          <SelectCurrency
            showDropdown={showDropdown}
            setShowDropDown={setShowDropDown}
          ></SelectCurrency>
        )}
      </div>
      {login ? (
        <Login></Login>
      ) : (
        <>
          <div className="header__user">
            <div className="header__user__notify">
              <box-icon name="bell" color="#dbdbdb"></box-icon>
            </div>

            <div className="header__user__avatar">
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14Gj-IJeCFLlxdot5OBlWsXYdmFHzLTm4QoQjyp91XQ=s96-c"
                alt=""
              />
              <h3>Ayush Maurya</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Header;
