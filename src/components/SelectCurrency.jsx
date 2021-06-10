import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const api_key = "5ea4dfc6-17d5-482c-8345-57b80ed444d5";
const SelectCurrency = () => {
  const [currencies, setCurrencies] = useState([]);
  const [currency, setCurrency] = useState("");
  const [showDropdown, setShowDropDown] = useState(false);
  const fetchCurrencies = async () => {
    if (!currency) {
      setCurrency(localStorage.getItem("currency"));
    }

    const res = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/fiat/map",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "5ea4dfc6-17d5-482c-8345-57b80ed444d5",
          "Access-Control-Allow-Origin": "*",
          crossorigin: "true",
        },
      }
    );
    const result = res.data;

    setCurrencies(result.data);
    // console.log(res.data.data);

    // const res = await fetch(
    //   "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    // );
    // const data = await res.json();
    // setCurrencies(data);
  };
  useEffect(() => {
    fetchCurrencies();
  }, []);

  const handleClick = (symbol) => {
    setShowDropDown(!showDropdown);

    localStorage.setItem("currency", symbol);
    setCurrency(symbol);
  };
  return (
    <div className="selectcurrency">
      <div
        className="selectcurrency__currency"
        onClick={() => setShowDropDown(!showDropdown)}
      >
        {currency}
      </div>
      {showDropdown && (
        <div className="selectcurrency__currency__dropdown">
          <div className="selectcurrency__currency__top">
            <div>
              <h2>Select currency</h2>
            </div>
            <div
              className="selectcurrency__currency__dropdown__close"
              onClick={() => setShowDropDown(!showDropdown)}
            >
              <box-icon name="x" color="#f52f57" size="30px"></box-icon>
            </div>
          </div>
          {/* TODO add currency flags */}
          <div className="selectcurrency__currency__dropdown__list">
            {currencies?.map((curr, idx) => {
              return (
                <li onClick={() => handleClick(curr.symbol)} key={idx}>
                  {curr.name}
                  <p>
                    {curr.sign} <span>{curr.symbol}</span>
                  </p>
                </li>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectCurrency;
