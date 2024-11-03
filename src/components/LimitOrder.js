import React, { useState } from "react";
import { Message, Dropdown, Input, Image } from "semantic-ui-react";
import flip from "../assets/flip.svg";

import "./methods.css";

function LimitOrder({
  account = null,
  onConnectWallet,
  tokenOptions,
  expiryOptions,
  selectedValueSend,
  setSelectedValueSend,
  selectedValueReceive,
  setSelectedValueReceive,
  selectedValueExpiry,
  setSelectedValueExpiry,
}) {
  const [inputAmount, setInputAmount] = useState(0);
  const [outputAmount, setOutputAmount] = useState(0);
  const [rate, setRate] = useState(0);
  useState(selectedValueExpiry);

  const handleChangeSend = (e, { value }) => {
    setSelectedValueSend(value);
  };

  const handleChangeReceive = (e, { value }) => {
    setSelectedValueReceive(value);
  };

  const handleChangeExpiry = (e, { value }) => {
    setSelectedValueExpiry(value);
  };

  const handleFlip = () => {
    setSelectedValueSend((prevValue) => {
      setSelectedValueReceive(selectedValueSend);
      return selectedValueReceive;
    });
  };

  const handleConnectWallet = () => {
    onConnectWallet(true);
  };

  const handleProceed = () => {
    console.log(inputAmount, outputAmount, rate, selectedValueExpiry);
  };

  let nested_layout = (
    <div
      style={{
        backgroundColor: "#565030",
        padding: "5%",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          color: "#ede7df",
          fontFamily: "'Raleway', sans-serif",
          textAlign: "left",
        }}
      >
        You're paying
      </p>

      <div
        style={{
          backgroundColor: "#2b2d19",
          padding: "2%",
          borderRadius: "10px",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Dropdown
            fluid
            selection
            options={tokenOptions}
            value={selectedValueSend}
            onChange={handleChangeSend}
            style={{
              backgroundColor: "#403e2c",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
              width: "140px",
              marginRight: "10px",
            }}
          />

          <Input
            className="inputDiv"
            placeholder="0.00"
            size="mini"
            type="number"
            onChange={(e) => setInputAmount(e.target.value)}
            input={{
              style: {
                backgroundColor: "#2b2d19",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "5px",
                fontSize: "1.6rem",
              },
            }}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: "4%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <hr style={{ width: "100%", borderTop: "1px solid #41402f" }} />
        <Image
          src={flip}
          onClick={handleFlip}
          style={{
            position: "absolute",
            top: "-50%",
            cursor: "pointer",
          }}
        />
      </div>

      <p
        style={{
          color: "#ede7df",
          fontFamily: "'Raleway', sans-serif",
          textAlign: "left",
          marginTop: "3%",
        }}
      >
        To receive
      </p>
      <div
        style={{
          backgroundColor: "#403e2c",
          padding: "2%",
          borderRadius: "10px",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Dropdown
            fluid
            selection
            options={tokenOptions}
            value={selectedValueReceive}
            onChange={handleChangeReceive}
            style={{
              backgroundColor: "#2b2d19",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
              width: "140px",
              marginRight: "10px",
            }}
          />

          <Input
            className="inputDiv"
            placeholder="0.00"
            size="mini"
            type="number"
            onChange={(e) => setOutputAmount(e.target.value)}
            input={{
              style: {
                backgroundColor: "#403e2c",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "5px",
                fontSize: "1.6rem",
              },
            }}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: "2%",
          display: "flex",
          gap: "2%",
          alignItems: "stretch",
        }}
      >
        {/* Rate info div */}
        <div
          style={{
            flex: "3",
            backgroundColor: "#2b2d19",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "2%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="limitorderDiv" style={{ margin: 0 }}>
              Buy at rate
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#2b2d19",
                marginTop: "2%",
              }}
            >
              <Input
                size="mini"
                className="limitorderDiv"
                onChange={(e) => setRate(e.target.value)}
                input={{
                  style: {
                    backgroundColor: "#2b2d19",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "1px",
                    fontSize: "1.2rem",
                    width: "80px",
                  },
                }}
                placeholder="0.00"
              />
              <span
                style={{
                  color: "green",
                }}
              >
                ~ 110.556
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              className="limitorderDiv rate-text"
              style={{ margin: 0, color: "#a8a292", cursor: "pointer" }}
            ></p>
            <p
              className="limitorderDiv"
              style={{ margin: 0, color: "#00A3E0", marginTop: "2%" }}
            >
              USDC
            </p>
          </div>
        </div>

        <div
          style={{
            flex: "1",
            backgroundColor: "#2b2d19",
            padding: "2%",
            borderRadius: "4px",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 5px 0",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            Expiry:
          </p>
          <Dropdown
            fluid
            selection
            options={expiryOptions}
            value={selectedValueExpiry}
            onChange={handleChangeExpiry}
            style={{
              backgroundColor: "#403e2c",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
            }}
          />
        </div>
      </div>

      <button
        className="methodbutton"
        onClick={handleProceed}
        style={{
          marginTop: "3%",
          width: "100%",
          borderRadius: "4px",
          padding: "2%",
          backgroundColor: "#2b2d19",
          color: "#ede7df",
          fontFamily: "'Raleway', sans-serif",
          fontSize: "1.6rem",
        }}
      >
        Proceed
      </button>
    </div>
  );

  let layout = <div></div>;

  if (account === null) {
    layout = (
      <div style={{ cursor: "pointer" }} onClick={handleConnectWallet}>
        <Message negative>Connect Wallet First</Message>
      </div>
    );
  } else if (account === -1) {
    layout = <Message negative>Error connecting to Wallet</Message>;
  } else if (account === -2) {
    layout = <Message negative>Wallet is not installed</Message>;
  } else {
    layout = <div style={{ width: "100%" }}>{nested_layout}</div>;
  }

  return <div>{layout}</div>;
}

export default LimitOrder;
