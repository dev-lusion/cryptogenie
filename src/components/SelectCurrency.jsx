import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { updateCurrency } from "../store/currencySlice";
import data from ".././data.json";
const SelectCurrency = ({ showDropdown, setShowDropDown }) => {
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  const currencies = Object.keys(data).map((name) => ({
    name,
    symbol: data[name],
  }));
  const [searchCurrency, setSearchCurrency] = useState("");
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchRef.current]);
  useEffect(() => {
    const filtered = currencies.filter((curr) => {
      return curr.name.includes(searchCurrency.toLowerCase());
    });
    if (filtered) {
      setFilteredCurrencies(filtered);
    } else {
      setFilteredCurrencies(currencies);
    }
  }, [searchCurrency]);

  const handleClick = (symbol) => {
    setShowDropDown(!showDropdown);
    setFilteredCurrencies(currencies);
    dispatch(updateCurrency(symbol));
    localStorage.setItem("currency", symbol);
  };

  const filterCurrencies = (event) => {
    setSearchCurrency(event.target.value);
  };

  return (
    <div className="selectcurrency__wrapper">
      <div className={`selectcurrency__currency__dropdown`}>
        <div className="selectcurrency__currency__top">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search currency"
            onChange={filterCurrencies}
          />
          <div
            className="selectcurrency__currency__dropdown__close"
            onClick={() => setShowDropDown(!showDropdown)}
          >
            <box-icon name="x" color="#f52f57" size="30px"></box-icon>
          </div>
        </div>
        <div className="selectcurrency__currency__dropdown__list">
          {filteredCurrencies?.map((curr, idx) => {
            return (
              <li onClick={() => handleClick(curr.name)} key={idx}>
                {curr.name}

                <p>{curr.symbol}</p>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectCurrency;
