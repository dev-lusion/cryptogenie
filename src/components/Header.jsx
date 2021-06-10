import React, { useState } from "react";
import logo from "./../Vector3.png";
import "boxicons";
import Login from "./Login";
import SelectCurrency from "./SelectCurrency";
const Header = ({ login }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="header">
      <div className="header__main">
        <div className="header__main__logo">
          <h1>
            <span>crypto</span>.<span>genie</span>
          </h1>
          {/* <img src={logo} alt="logo" /> */}
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
        <SelectCurrency />
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
