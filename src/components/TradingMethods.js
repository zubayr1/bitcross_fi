import React, { useState } from "react";
import { Grid, Image } from "semantic-ui-react";
import swap_order from "../assets/swap_order.svg";
import limited_order from "../assets/limited_order.svg";
import dca_order from "../assets/dca_order.svg";

function TradingMethods({ onTypeChange }) {
  const [method, setMethod] = useState(0);

  const setSelectedType = (type) => {
    setMethod(type);
    onTypeChange(type); // Call the parent callback function
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
            <Grid>
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    cursor: "pointer",
                    border: method === 0 ? "1px solid grey" : "none",
                    padding: method === 0 ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                  onClick={() => setSelectedType(0)}
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
            <Grid>
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
            <Grid>
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
          <Grid.Column verticalAlign="middle"
            width={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid centered>
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
            style={{ display: "flex", justifyContent: "center", paddingTop:'2px' }}
          >
            <Grid centered>
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
            <Grid centered>
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
