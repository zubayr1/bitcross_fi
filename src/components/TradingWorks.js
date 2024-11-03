import React, { useState, useEffect } from "react";
import Swap from "./Swap";
import LimitOrder from "./LimitOrder";
import DCA from "./DCA";
import TradingView from "./TradingView";

import { Grid } from "semantic-ui-react";

import axios from "axios";

import { tokenOptions, expiryOptions, dcaOptions } from "./options";

function TradingWorks({ selectedType = 0, account = null, onConnectWallet }) {
  const [selectedValueSend, setSelectedValueSend] = useState(
    tokenOptions[0].value
  );
  const [selectedValueReceive, setSelectedValueReceive] = useState(
    tokenOptions[1].value
  );

  const [selectedValueExpiry, setSelectedValueExpiry] = useState(
    expiryOptions[0].value
  );

  const [selecteddcaOptions, setSelecteddcaOptions] = useState(
    dcaOptions[0].value
  );

  const [dates, setDates] = useState([]);

  const [inputTokenHistory, setInputTokenHistory] = useState([]);

  const [outputTokenHistory, setOutputTokenHistory] = useState([]);

  const [selectedTimeline, setSelectedTimeline] = useState("7 days");

  const [graphProcessingResult, setGraphProcessingResult] = useState(0);

  useEffect(() => {
    const fetchData = async (currency, type) => {
      try {
        const interval =
          selectedTimeline === "1 hour"
            ? "m1"
            : selectedTimeline === "6 hours"
              ? "m5"
              : selectedTimeline === "1 day"
                ? "m15"
                : "h1";

        setGraphProcessingResult(1);

        const response = await axios.get(
          `https://api.coincap.io/v2/assets/${currency}/history`,
          {
            params: {
              interval: interval,
            },
          }
        );

        const data = response.data.data;

        const now = new Date();
        let startDate;

        if (selectedTimeline === "7 days") {
          startDate = new Date(now - 7 * 24 * 60 * 60 * 1000); // 7 days ago
        } else if (selectedTimeline === "1 day") {
          startDate = new Date(now - 1 * 24 * 60 * 60 * 1000); // 1 day ago
        } else if (selectedTimeline === "6 hours") {
          startDate = new Date(now - 6 * 60 * 60 * 1000); // 6 hours ago
        } else {
          startDate = new Date(now - 1 * 60 * 60 * 1000); // 1 hour ago
        }

        // Filter data based on the calculated start date
        const filteredData = data.filter((item) => {
          const itemDate = new Date(item.time);
          return itemDate >= startDate;
        });

        const prices = filteredData.map((item) => parseFloat(item.priceUsd));

        if (type === 1) {
          // Extract dates and prices
          const dates = filteredData.map((item) =>
            new Date(item.time).toLocaleString()
          );
          setDates(dates);
          setInputTokenHistory(prices);
        } else {
          setOutputTokenHistory(prices);
        }

        setGraphProcessingResult(0);
      } catch (error) {
        setGraphProcessingResult(-1);
      }
    };

    if (selectedValueSend === "btc") {
      fetchData("bitcoin", 1);
      fetchData("solana", 2);
    } else {
      fetchData("solana", 1);
      fetchData("bitcoin", 2);
    }
  }, [selectedValueSend, selectedTimeline]);

  const handleTimelineChange = (value) => {
    setSelectedTimeline(value);
  };

  let layout = <div></div>;

  if (selectedType === 0) {
    layout = (
      <div>
        <Swap
          account={account}
          onConnectWallet={onConnectWallet}
          tokenOptions={tokenOptions}
        />
      </div>
    );
  } else if (selectedType === 1) {
    layout = (
      <div style={{ marginBottom: "1%" }}>
        <Grid centered>
          <Grid.Row only="computer" verticalAlign="middle">
            <p
              style={{
                fontSize: "2.5rem",
                color: "#ede7df",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Limit Order
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
              Limit Order
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
              Limit Order
            </p>
          </Grid.Row>

          <Grid.Row centered style={{ paddingBottom: "3%" }}>
            <Grid.Column width={14}>
              <Grid>
                <Grid.Row only="computer" verticalAlign="middle">
                  <Grid.Column width={2}></Grid.Column>

                  <Grid.Column width={8}>
                    <TradingView
                      inputToken={selectedValueSend}
                      outputToken={selectedValueReceive}
                      inputTokenHistory={inputTokenHistory}
                      outputTokenHistory={outputTokenHistory}
                      dates={dates}
                      graphProcessingResult={graphProcessingResult}
                      onTimelineChange={handleTimelineChange}
                    />
                  </Grid.Column>

                  <Grid.Column width={6}>
                    <LimitOrder
                      account={account}
                      onConnectWallet={onConnectWallet}
                      tokenOptions={tokenOptions}
                      expiryOptions={expiryOptions}
                      selectedValueSend={selectedValueSend}
                      selectedValueReceive={selectedValueReceive}
                      selectedValueExpiry={selectedValueExpiry}
                      setSelectedValueSend={setSelectedValueSend}
                      setSelectedValueReceive={setSelectedValueReceive}
                      setSelectedValueExpiry={setSelectedValueExpiry}
                    />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row only="tablet mobile" centered>
                  <Grid.Column width={16}>
                    <LimitOrder
                      account={account}
                      onConnectWallet={onConnectWallet}
                      tokenOptions={tokenOptions}
                      expiryOptions={expiryOptions}
                      selectedValueSend={selectedValueSend}
                      selectedValueReceive={selectedValueReceive}
                      selectedValueExpiry={selectedValueExpiry}
                      setSelectedValueSend={setSelectedValueSend}
                      setSelectedValueReceive={setSelectedValueReceive}
                      setSelectedValueExpiry={setSelectedValueExpiry}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  } else {
    layout = (
      <div style={{ marginBottom: "1%" }}>
        <Grid centered>
          <Grid.Row only="computer">
            <p
              style={{
                fontSize: "2.5rem",
                color: "#ede7df",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              DCA
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
              DCA
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
              DCA
            </p>
          </Grid.Row>

          <Grid.Row centered style={{ paddingBottom: "3%" }}>
            <Grid.Column width={14}>
              <Grid>
                <Grid.Row only="computer" verticalAlign="middle">
                  <Grid.Column width={2}></Grid.Column>

                  <Grid.Column width={8}>
                    <TradingView
                      inputToken={selectedValueSend}
                      outputToken={selectedValueReceive}
                      inputTokenHistory={inputTokenHistory}
                      outputTokenHistory={outputTokenHistory}
                      dates={dates}
                      graphProcessingResult={graphProcessingResult}
                      onTimelineChange={handleTimelineChange}
                    />
                  </Grid.Column>

                  <Grid.Column width={6}>
                    <DCA
                      account={account}
                      onConnectWallet={onConnectWallet}
                      tokenOptions={tokenOptions}
                      dcaOptions={dcaOptions}
                      selectedValueSend={selectedValueSend}
                      selectedValueReceive={selectedValueReceive}
                      selecteddcaOptions={selecteddcaOptions}
                      setSelectedValueSend={setSelectedValueSend}
                      setSelectedValueReceive={setSelectedValueReceive}
                      setSelecteddcaOptions={setSelecteddcaOptions}
                    />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row only="tablet mobile" centered>
                  <Grid.Column width={16}>
                    <DCA
                      account={account}
                      onConnectWallet={onConnectWallet}
                      tokenOptions={tokenOptions}
                      dcaOptions={dcaOptions}
                      selectedValueSend={selectedValueSend}
                      selectedValueReceive={selectedValueReceive}
                      selecteddcaOptions={selecteddcaOptions}
                      setSelectedValueSend={setSelectedValueSend}
                      setSelectedValueReceive={setSelectedValueReceive}
                      setSelecteddcaOptions={setSelecteddcaOptions}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          marginLeft: "4%",
          marginRight: "4%",
          marginTop: "20px",
          backgroundColor: "#36331c",
          borderRadius: "10px",
        }}
      >
        {layout}
      </div>
    </div>
  );
}

export default TradingWorks;
