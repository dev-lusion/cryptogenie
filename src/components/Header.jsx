import React, { useState, useEffect } from "react";
import logo from "./../Vector3.png";
import cg from "./../logo2.png";
import "boxicons";
import Login from "./Login";
import SelectCurrency from "./SelectCurrency";
import { useSelector } from "react-redux";
import { selectCurrency } from "../store/currencySlice";
import Sidebar from "./Sidebar";

const Header = ({ login }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const curr = useSelector(selectCurrency);
  const [expand, setExpand] = useState(false);
  const [showDropdown, setShowDropDown] = useState(false);

  const [currency, setCurrency] = useState("INR");

  useEffect(() => {
    if (localStorage.getItem("currency")) {
      setCurrency(localStorage.getItem("currency"));
    }
  }, [localStorage.getItem("currency")]);

  return (
    <div className="header">
      <div className="header__main">
        <div className="header__main__logo">
          <h2>
            crypto<span>genie</span>
          </h2>
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
      {!login ? (
        <Login></Login>
      ) : (
        <>
          <div
            className="sidebar__main__btn"
            onClick={() => {
              setShowSidebar(!showSidebar);
              console.log("clicked");
            }}
          >
            <box-icon name="menu-alt-right" color="red"></box-icon>
          </div>

          {showSidebar && (
            <Sidebar
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
            ></Sidebar>
          )}

          {/* <div className="header__user">
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
          </div> */}
        </>
      )}
    </div>
  );
};
export default Header;
