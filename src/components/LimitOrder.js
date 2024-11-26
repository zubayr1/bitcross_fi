import React, { useState, useEffect, useRef } from "react";

import { useModal } from "./ModalContext";

import { Message, Dropdown, Input, Image, Button } from "semantic-ui-react";
import flip from "../assets/flip.svg";

import "./methods.css";
import "./buttonstyle.css";

function LimitOrder({
  account = null,
  tokenOptions,
  limitOrderOptions,
  selectedValueSend,
  setSelectedValueSend,
  selectedValueReceive,
  setSelectedValueReceive,
  selectedValueLimitOrder,
  setSelectedValueLimitOrder,
}) {
  const containerRef = useRef(null);

  const { openModal } = useModal();

  const [highlightedDivId, setHighlightedDivId] = useState(null);
  const [inputAmount, setInputAmount] = useState(0);
  const [outputAmount, setOutputAmount] = useState(0);
  const [rate, setRate] = useState(0);
  useState(selectedValueLimitOrder);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // If clicked outside the divs container, remove the highlight
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setHighlightedDivId(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleClick = (id) => {
    // Set the clicked div as the only highlighted div
    setHighlightedDivId(id);
  };

  const handleChangeSend = (e, { value }) => {
    setSelectedValueSend(value);
  };

  const handleChangeReceive = (e, { value }) => {
    setSelectedValueReceive(value);
  };

  const handleChangeLimitOrder = (e, { value }) => {
    setSelectedValueLimitOrder(value);
  };

  const handleFlip = () => {
    setSelectedValueSend((prevValue) => {
      setSelectedValueReceive(selectedValueSend);
      return selectedValueReceive;
    });
  };

  const handleProceed = () => {
    console.log(inputAmount, outputAmount, rate, selectedValueLimitOrder);
  };

  let nested_layout = (
    <div
      style={{
        backgroundColor: "#162125",
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
        ref={containerRef}
        key={1}
        className={`inputDiv ${highlightedDivId === 1 ? "borderHighlight" : ""}`}
        onClick={() => handleClick(1)}
        style={{
          backgroundColor: "#1f4452",
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
              backgroundColor: "#0d303d",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
              width: "140px",
              marginRight: "10px",
            }}
          />

          <Input
            className="inputContent"
            placeholder="0.00"
            size="mini"
            type="number"
            onChange={(e) => setInputAmount(e.target.value)}
            input={{
              style: {
                backgroundColor: "#1f4452",
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
        ref={containerRef}
        key={2}
        className={`inputDiv ${highlightedDivId === 2 ? "borderHighlight" : ""}`}
        onClick={() => handleClick(2)}
        style={{
          backgroundColor: "#0d303d",
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
              backgroundColor: "#1f4452",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
              width: "140px",
              marginRight: "10px",
            }}
          />

          <Input
            className="inputContent"
            placeholder="0.00"
            size="mini"
            type="number"
            onChange={(e) => setOutputAmount(e.target.value)}
            input={{
              style: {
                backgroundColor: "#0d303d",
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
        <div
          ref={containerRef}
          key={3}
          className={`inputDiv ${highlightedDivId === 3 ? "borderHighlight" : ""}`}
          onClick={() => handleClick(3)}
          style={{
            flex: "3",
            backgroundColor: "#1f4452",
            color: "white",
            border: "none",
            borderRadius: "10px",
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
                backgroundColor: "#1f4452",
                marginTop: "2%",
              }}
            >
              <Input
                size="mini"
                className="limitorderDiv"
                onChange={(e) => setRate(e.target.value)}
                input={{
                  style: {
                    backgroundColor: "#1f4452",
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
              {/* <span
                style={{
                  color: "green",
                }}
              >
                ~ 110.556
              </span> */}
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
          ref={containerRef}
          key={4}
          className={`inputDiv ${highlightedDivId === 4 ? "borderHighlight" : ""}`}
          onClick={() => handleClick(4)}
          style={{
            flex: "1",
            backgroundColor: "#1f4452",
            padding: "2%",
            borderRadius: "10px",
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
            Type:
          </p>
          <Dropdown
            fluid
            selection
            options={limitOrderOptions}
            value={selectedValueLimitOrder}
            onChange={handleChangeLimitOrder}
            style={{
              backgroundColor: "#0d303d",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
            }}
          />
        </div>
      </div>

      <Button
        className="custom-button"
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
      </Button>
    </div>
  );

  let layout = <div></div>;

  if (account === null) {
    layout = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          className="custom-button"
          onClick={openModal}
          style={{ padding: "2%" }}
        >
          Connect Wallet
        </Button>
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
