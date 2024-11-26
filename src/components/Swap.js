import React, { useState, useEffect, useRef } from "react";

import { useModal } from "./ModalContext";

import axios from "axios";

import {
  Grid,
  Message,
  Dropdown,
  Input,
  Image,
  Button,
} from "semantic-ui-react";
import bitcoin_logo from "../assets/bitcoin.svg";
import solana_logo from "../assets/solana.svg";
import flip from "../assets/flip.svg";

import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

import "./methods.css";
import "./buttonstyle.css";

function Swap({ account = null, tokenOptions }) {
  Chart.register(CategoryScale);

  const { openModal } = useModal();

  const containerRef = useRef(null);

  const [highlightedDivId, setHighlightedDivId] = useState(null);

  const [selectedValueSend, setSelectedValueSend] = useState(
    tokenOptions[0].value
  );
  const [selectedValueReceive, setSelectedValueReceive] = useState(
    tokenOptions[1].value
  );

  const [selectedValueSendRate, setSelectedValueSendRate] = useState(0);
  const [selectedValueReceiveRate, setSelectedValueReceiveRate] = useState(0);

  const [firstchartData, setFirstChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  });

  const [secondchartData, setSecondChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  });

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

  useEffect(() => {
    const fetchData = async (currency, type, v1, v2, v3, v4) => {
      try {
        const response = await axios.get(
          `https://api.coincap.io/v2/assets/${currency}/history`,
          {
            params: {
              interval: "h1", // Hourly interval
            },
          }
        );

        const data = response.data.data;

        // Extract the last 7 days of data
        const now = new Date();
        const oneWeekAgo = new Date(now - 24 * 60 * 60 * 1000); // 1 day in the past

        const filteredData = data.filter((item) => {
          const itemDate = new Date(item.time);
          return itemDate >= oneWeekAgo;
        });

        // Check if we have enough data to calculate the increase rate
        if (filteredData.length > 0) {
          const latestValue = parseFloat(
            filteredData[filteredData.length - 1].priceUsd
          ); // Latest value
          const firstValue = parseFloat(filteredData[0].priceUsd); // First value

          // Calculate the increase rate
          const increaseRate = ((latestValue - firstValue) / firstValue) * 100; // Percentage increase

          // Format to two decimal places
          const formattedIncreaseRate = increaseRate.toFixed(3);

          if (type === 1) {
            setSelectedValueSendRate(formattedIncreaseRate);
          } else {
            setSelectedValueReceiveRate(formattedIncreaseRate);
          }
        }

        // Extract dates and prices
        const dates = filteredData.map((item) =>
          new Date(item.time).toLocaleString()
        );
        const prices = filteredData.map((item) => parseFloat(item.priceUsd));

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, v1);
        gradientStroke.addColorStop(0.2, v2);
        gradientStroke.addColorStop(0.5, v3);
        gradientStroke.addColorStop(1, v4);

        if (type === 1) {
          setFirstChartData({
            labels: dates,
            datasets: [
              {
                label: "(Hourly)",
                data: prices,
                borderColor: gradientStroke,
                fill: false,
                borderWidth: 4,
                pointRadius: 0,
              },
            ],
          });
        } else {
          setSecondChartData({
            labels: dates,
            datasets: [
              {
                label: "(Hourly)",
                data: prices,
                borderColor: gradientStroke,
                fill: false,
                borderWidth: 4,
                pointRadius: 0,
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching BTC data:", error);
      }
    };

    if (selectedValueSend === "btc") {
      fetchData("bitcoin", 1, "#F7931A", "#94d973", "#fad874", "#f49080");
      fetchData("solana", 2, "#0e052e", "#b644c9", "#b01946", "#09093b");
    } else {
      fetchData("solana", 1, "#0e052e", "#b644c9", "#b01946", "#09093b");
      fetchData("bitcoin", 2, "#F7931A", "#94d973", "#fad874", "#f49080");
    }
  }, [selectedValueSend]);

  const handleClick = (id) => {
    // Set the clicked div as the only highlighted div
    setHighlightedDivId(id);
  };

  const chartoptions = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      backgroundColor: "#fff",
    },
  };

  const handleChangeSend = (e, { value }) => {
    setSelectedValueSend(value);
  };

  const handleChangeReceive = (e, { value }) => {
    setSelectedValueReceive(value);
  };

  const handleFlip = () => {
    setSelectedValueSend((prevValue) => {
      setSelectedValueReceive(selectedValueSend);
      return selectedValueReceive;
    });
  };

  function shortenString(str) {
    if (str.length <= 6) {
      return str; // If already shorten
    }
    return str.slice(0, 5) + "..." + str.slice(-5);
  }

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

      <Grid centered style={{ marginTop: "2%" }}>
        <Grid.Column width={8}>
          <Button
            className="connect-button"
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
            Swap from Pool
          </Button>
        </Grid.Column>

        <Grid.Column width={8}>
          <Button
            className="connect-button"
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
            Swap from Vault
          </Button>
        </Grid.Column>
      </Grid>
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
        Connect Wallet
      </Button>
    );
  } else if (account === -1) {
    layout = <Message negative>Error connecting to Wallet</Message>;
  } else if (account === -2) {
    layout = <Message negative>Wallet is not installed</Message>;
  } else {
    layout = (
      <div style={{ width: "100%" }}>
        <Grid centered>
          <Grid.Row centered>
            <Grid.Column only="computer" width={14}>
              <Grid centered>
                <Grid.Row centered>
                  <Grid.Column width={4} floated="left">
                    <div></div>
                  </Grid.Column>

                  <Grid.Column width={8}>{nested_layout}</Grid.Column>

                  <Grid.Column width={4} floated="right">
                    <Grid centered>
                      <Grid.Row centered>
                        <p
                          style={{
                            color: "#ede7df",
                            fontFamily: "'Raleway', sans-serif",
                            fontSize: "1.2rem",
                          }}
                        >
                          <span
                            style={{
                              display: "inline-block",
                              border: "1px solid white",
                              padding: "1%",
                              borderRadius: "5px",
                              backgroundColor: "#2b2d19",
                            }}
                          >
                            {shortenString(account)}
                          </span>
                        </p>
                      </Grid.Row>
                      <Grid.Row centered>
                        <Grid.Column width={3} verticalAlign="middle">
                          <Image
                            src={
                              selectedValueSend === "btc"
                                ? bitcoin_logo
                                : solana_logo
                            }
                            size="mini"
                          />
                        </Grid.Column>
                        <Grid.Column width={10}>
                          {firstchartData ? (
                            <Line
                              data={firstchartData}
                              options={chartoptions}
                            />
                          ) : (
                            <p>Loading data...</p>
                          )}
                        </Grid.Column>
                        <Grid.Column>
                          <p
                            style={{
                              fontSize: "1.2rem",
                              color:
                                selectedValueSendRate < 0
                                  ? "red"
                                  : selectedValueSendRate < 1
                                    ? "yellow"
                                    : selectedValueSendRate <= 3
                                      ? "orange"
                                      : "green",
                            }}
                          >
                            {selectedValueSendRate + "%"}
                          </p>
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row centered>
                        <Grid.Column width={3} verticalAlign="middle">
                          <Image
                            src={
                              selectedValueReceive === "btc"
                                ? bitcoin_logo
                                : solana_logo
                            }
                            size="mini"
                          />
                        </Grid.Column>
                        <Grid.Column width={10}>
                          {secondchartData ? (
                            <Line
                              data={secondchartData}
                              options={chartoptions}
                            />
                          ) : (
                            <p>Loading data...</p>
                          )}
                        </Grid.Column>

                        <Grid.Column>
                          <p
                            style={{
                              fontSize: "1.2rem",
                              color:
                                selectedValueReceiveRate < 0
                                  ? "red"
                                  : selectedValueReceiveRate < 1
                                    ? "yellow"
                                    : selectedValueReceiveRate <= 3
                                      ? "orange"
                                      : "green",
                            }}
                          >
                            {selectedValueReceiveRate + "%"}
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column only="tablet" width={10}>
              {nested_layout}
            </Grid.Column>
            <Grid.Column only="mobile" width={14}>
              {nested_layout}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
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
            Swap
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
            Swap
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
            Swap
          </p>
        </Grid.Row>

        <Grid.Row centered>{layout}</Grid.Row>
      </Grid>
    </div>
  );
}

export default Swap;
