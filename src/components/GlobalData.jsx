import React, { useState, useEffect } from "react";
const GlobalData = ({ coins, totalMarketCap, dominance, defaultCurrency }) => {
  return (
    <div className="globaldata">
      <div className="globaldata__content">
        <div className="globaldata__coins">
          <h4>
            Coins: <span>{coins?.toLocaleString()}</span>
          </h4>
        </div>
        <div className="globaldata__marketcap">
          <h4>
            Market Cap:{" "}
            <span>
              {totalMarketCap?.toLocaleString()} <span>{defaultCurrency}</span>
            </span>
          </h4>
        </div>
        <div className="globaldata__dominace">
          <h4>
            Dominace:{" "}
            <span>
              BTC {dominance?.btc.toFixed(2)}% ETH {dominance?.eth.toFixed(2)}%
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GlobalData;
