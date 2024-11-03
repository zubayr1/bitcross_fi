import React, { useState, useEffect } from "react";
import { Grid, Image } from "semantic-ui-react";
import swap_order from "../assets/swap_order.svg";
import limited_order from "../assets/limited_order.svg";
import dca_order from "../assets/dca_order.svg";

import "./trade.css";

function TradingMethods({ onTypeChange = 0 }) {
  const [method, setMethod] = useState(0);

  useEffect(() => {
    const selectedType = sessionStorage.getItem("selectedType");
    if (selectedType) {
      setMethod(parseInt(selectedType));
    }
  }, []);

  const setSelectedType = (type) => {
    setMethod(type);
    onTypeChange(type);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid style={{ width: "100%" }}>
        <Grid.Row only="computer tablet" style={{ justifyContent: "center" }}>
          <Grid.Column
            width={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid
              className="methodsDiv"
              style={{
                borderBottom: method === 0 ? "2px solid #625611" : "none",
                backgroundColor: method === 0 ? "#2e2908" : "",
              }}
            >
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    cursor: "pointer",
                    border: method === 0 ? "1px solid grey" : "none",
                    padding: method === 0 ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                  onClick={() => setSelectedType(0)}
                  onhov
                >
                  <Image src={swap_order} size="small" />
                </div>
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="middle">
                <div className="new-header-text">
                  <p>Swap</p>
                  <p>The best price</p>
                </div>
              </Grid.Column>
            </Grid>
          </Grid.Column>

          <Grid.Column
            width={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid
              className="methodsDiv"
              style={{
                borderBottom: method === 1 ? "2px solid #625611" : "none",
                backgroundColor: method === 1 ? "#2e2908" : "",
              }}
            >
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    cursor: "pointer",
                    border: method === 1 ? "1px solid grey" : "none",
                    padding: method === 1 ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                  onClick={() => setSelectedType(1)}
                >
                  <Image src={limited_order} size="small" />
                </div>
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="middle">
                <div className="new-header-text">
                  <p>Limit Order</p>
                  <p>Set your price</p>
                </div>
              </Grid.Column>
            </Grid>
          </Grid.Column>

          <Grid.Column
            width={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid
              className="methodsDiv"
              style={{
                borderBottom: method === 2 ? "2px solid #625611" : "none",
                backgroundColor: method === 2 ? "#2e2908" : "",
              }}
            >
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    cursor: "pointer",
                    border: method === 2 ? "1px solid grey" : "none",
                    padding: method === 2 ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                  onClick={() => setSelectedType(2)}
                >
                  <Image src={dca_order} size="small" />
                </div>
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="middle">
                <div className="new-header-text">
                  <p>DCA</p>
                  <p>Set and forget</p>
                </div>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row only="mobile" style={{ justifyContent: "center" }}>
          <Grid.Column
            verticalAlign="middle"
            width={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid
              className="methodsDiv"
              centered
              style={{
                borderBottom: method === 0 ? "2px solid #625611" : "none",
                backgroundColor: method === 0 ? "#2e2908" : "",
                width: "100%",
              }}
            >
              <Grid.Row>
                <div
                  style={{
                    cursor: "pointer",
                    border: method === 0 ? "1px solid grey" : "none",
                    // padding: method === 0 ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                >
                  <Image
                    src={swap_order}
                    size="mini"
                    onClick={() => setSelectedType(0)}
                  />
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className="new-header-text">
                  <p>Swap</p>
                </div>
              </Grid.Row>
            </Grid>
          </Grid.Column>

          <Grid.Column
            width={5}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "2px",
            }}
          >
            <Grid
              className="methodsDiv"
              centered
              style={{
                borderBottom: method === 1 ? "2px solid #625611" : "none",
                backgroundColor: method === 1 ? "#2e2908" : "",
                width: "100%",
              }}
            >
              <Grid.Row width={5}>
                <div
                  style={{
                    cursor: "pointer",
                    border: method === 1 ? "1px solid grey" : "none",
                    // padding: method === 1 ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                  onClick={() => setSelectedType(1)}
                >
                  <Image src={limited_order} size="mini" />
                </div>
              </Grid.Row>
              <Grid.Row width={8}>
                <div className="new-header-text">
                  <p>Limit Order</p>
                </div>
              </Grid.Row>
            </Grid>
          </Grid.Column>

          <Grid.Column
            width={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid
              className="methodsDiv"
              centered
              style={{
                borderBottom: method === 2 ? "2px solid #625611" : "none",
                backgroundColor: method === 2 ? "#2e2908" : "",
                width: "100%",
              }}
            >
              <Grid.Row width={5}>
                <div
                  style={{
                    cursor: "pointer",
                    border: method === 2 ? "1px solid grey" : "none",
                    // padding: method === 2 ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                  onClick={() => setSelectedType(2)}
                >
                  <Image src={dca_order} size="mini" />
                </div>
              </Grid.Row>
              <Grid.Row width={8}>
                <div className="new-header-text">
                  <p>DCA</p>
                </div>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default TradingMethods;
