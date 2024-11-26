import React, { useState, useEffect, useRef } from "react";

import { useModal } from "./ModalContext";

import { Grid, Message, Dropdown, Input, Button } from "semantic-ui-react";

import { yieldOptions } from "./options";

import "./methods.css";
import "./buttonstyle.css";

function YieldCalculation({ account = null, tokenOptions }) {
  const { openModal } = useModal();

  const containerRef = useRef(null);

  const [highlightedDivId, setHighlightedDivId] = useState(null);

  const [selectedValue, setSelectedValue] = useState(tokenOptions[0].value);

  const [selectedYieldValue, setSelectedYieldValue] = useState(
    yieldOptions[0].value
  );

  useEffect(() => {
    const handleOutsideClick = (event) => {
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
    setHighlightedDivId(id);
  };

  const handleChangeSend = (e, { value }) => {
    setSelectedValue(value);
  };

  const handleChangeYield = (e, { value }) => {
    setSelectedYieldValue(value);
  };

  let nested_layout = (
    <div
      style={{
        backgroundColor: "#162125",
        padding: "5%",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <p
          style={{
            color: "#ede7df",
            fontFamily: "'Raleway', sans-serif",
            textAlign: "left",
            marginBottom: 0,
          }}
        >
          yield Management
        </p>

        <div style={{ textAlign: "right" }}>
          <Dropdown
            fluid
            selection
            options={yieldOptions}
            value={selectedYieldValue}
            onChange={handleChangeYield}
            style={{
              backgroundColor: "#0d303d",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
              width: "auto",
            }}
          />
        </div>
      </div>

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
            disabled={selectedYieldValue === "claim"}
            fluid
            selection
            options={tokenOptions}
            value={selectedValue}
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
            disabled={selectedYieldValue === "claim"}
            className="inputContent"
            placeholder="0.00"
            size="mini"
            type="number"
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

      <Button
        className="custom-button"
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
          style={{ padding: "4%" }}
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
    layout = nested_layout;
  }

  return (
    <div style={{ paddingBottom: "2%" }}>
      <Grid centered>
        <Grid.Row only="computer">
          <p
            style={{
              fontSize: "2.5rem",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            yield
          </p>
        </Grid.Row>
        <Grid.Row only="tablet">
          <p
            style={{
              fontSize: "2rem",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            yield
          </p>
        </Grid.Row>
        <Grid.Row only="mobile">
          <p
            style={{
              fontSize: "1.5rem",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            yield
          </p>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column only="computer" width={8}>
            {layout}
          </Grid.Column>
          <Grid.Column only="tablet" width={12}>
            {layout}
          </Grid.Column>
          <Grid.Column only="mobile" width={14}>
            {layout}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default YieldCalculation;
