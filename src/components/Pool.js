import React, { useState, useEffect, useRef } from "react";

import { useModal } from "./ModalContext";

import {
  Grid,
  Message,
  Dropdown,
  Input,
  Button,
  Radio,
} from "semantic-ui-react";

import "./methods.css";
import "./buttonstyle.css";

function Pool({ account = null, tokenOptions }) {
  const { openModal } = useModal();

  const containerRef = useRef(null);

  const [highlightedDivId, setHighlightedDivId] = useState(null);

  const [selectedValue, setSelectedValue] = useState(tokenOptions[0].value);

  const [isToggled, setIsToggled] = useState(false);

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
    setSelectedValue(value);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
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
          Add or Remove liquidity
        </p>

        <div style={{ textAlign: "right" }}>
          <p
            style={{
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
              marginBottom: "5px",
            }}
          >
            {isToggled ? "Toggle back to Remove" : "Toggle to Add"}
          </p>
          <Radio toggle checked={isToggled} onChange={handleToggle} />
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
        {isToggled ? "Add Liquidity" : "Remove Liquidity"}
      </Button>
    </div>
  );

  let layout = <div></div>;

  if (account === null) {
    layout = (
      <Button
        className="custom-button"
        onClick={openModal}
        style={{ padding: "2%" }}
      >
        Connect Wallet First
      </Button>
    );
  } else if (account === -1) {
    layout = <Message negative>Error connecting to Wallet</Message>;
  } else if (account === -2) {
    layout = <Message negative>Wallet is not installed</Message>;
  } else {
    layout = (
      <Grid centered>
        <Grid.Row only="computer">
          <Grid.Column width={8}>{nested_layout}</Grid.Column>
        </Grid.Row>
        <Grid.Row only="tablet">
          <Grid.Column width={10}>{nested_layout}</Grid.Column>
        </Grid.Row>
        <Grid.Row only="mobile">
          <Grid.Column width={14}>{nested_layout}</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  return <div>{layout}</div>;
}

export default Pool;
