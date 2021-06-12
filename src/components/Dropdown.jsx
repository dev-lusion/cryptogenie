import React from "react";
import { useRef, useEffect } from "react";
import data from ".././data.json";
const Dropdown = ({ filterCurrencies, setShowDropDown }) => {
  const searchRef = useRef(null);

  const currencies = Object.keys(data).map((name) => ({
    name,
    symbol: data[name],
  }));
  const [currency, setCurrency] = useState("INR");
  const [searchCurrency, setSearchCurrency] = useState("");
  const [showDropdown, setShowDropDown] = useState(false);
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchRef.current]);
  useEffect(() => {
    if (localStorage.getItem("currency")) {
      setCurrency(localStorage.getItem("currency"));
    }
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
    localStorage.setItem("currency", symbol);
    setCurrency(symbol);
  };

  const filterCurrencies = (event) => {
    setSearchCurrency(event.target.value);
  };
  return (
    <div className={`selectcurrency__currency__dropdown`}>
      <div className="selectcurrency__currency__top">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search currency"
          onChange={filterCurrencies}
        />
        <button onClick={() => searchRef.current.focus()}> focus</button>
        {/* focus on click */}

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
  );
};

export default Dropdown;
