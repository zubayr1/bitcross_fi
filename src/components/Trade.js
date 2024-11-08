import React, { useState, useEffect } from "react";

import Header from "./Header";
import TradingMethods from "./TradingMethods";
import TradingWorks from "./TradingWorks";

import "./trade.css";

function Trade() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    // Retrieve the blockstack session data from session storage
    const sessionData = localStorage.getItem("blockstack-session");

    if (sessionData) {
      try {
        const parsedData = JSON.parse(sessionData);
        const identityAddress = parsedData?.userData?.identityAddress;

        if (identityAddress) {
          setAccount(identityAddress);
        }
      } catch (error) {
        console.error("Error parsing session data:", error);
      }
    }
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(to bottom, #060910, #162125, #060910)",
        overflowX: "hidden",
      }}
    >
      <Header weblocation="trade" />

      <div className="new-header-container">
        <TradingMethods />
      </div>
      <div>
        <TradingWorks account={account} />
      </div>
    </div>
  );
}

export default Trade;
