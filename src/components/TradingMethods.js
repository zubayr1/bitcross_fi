import React, { useState, useEffect } from "react";

import { useModal } from "./ModalContext";

import { Grid, Image } from "semantic-ui-react";

import swap_order from "../assets/swap_order.svg";
import limited_order from "../assets/limited_order.svg";
import dca_order from "../assets/dca_order.svg";
import pool from "../assets/pool.svg";
import stake from "../assets/stake.svg";

import "./trade.css";

function TradingMethods() {
  const { selectedOperationType, selectedType, setSelectedType } = useModal();

  const [method, setMethod] = useState("pool");

  useEffect(() => {
    if (selectedType === "pool" || selectedType === "stake") {
      if (selectedOperationType === 0) {
        setMethod(selectedType);
      } else {
        setMethod("swap");
        setSelectedType("swap");
      }
    } else {
      if (selectedOperationType === 1) {
        setMethod(selectedType);
      } else {
        setMethod("pool");
        setSelectedType("pool");
      }
    }
  }, [selectedOperationType, selectedType, setSelectedType]);

  // Directly handle setting `selectedType` if needed based on the conditions
  const handleSelectType = (type) => {
    setSelectedType(type);
    sessionStorage.setItem("selectedType", type); // Ensure persistence
  };

  let layout;

  if (selectedOperationType === 0) {
    layout = (
      <Grid style={{ width: "100%" }}>
        <Grid.Row only="computer tablet" style={{ justifyContent: "center" }}>
          <Grid.Column
            width={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid
              className="methodsDiv"
              style={{
                borderBottom: method === "pool" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "pool" ? "#0e1d24" : "",
              }}
            >
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    cursor: "pointer",
                    border: method === "pool" ? "1px solid grey" : "none",
                    padding: "10px", // Consistent padding
                    borderRadius: "5px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => handleSelectType("pool")}
                >
                  <div
                    style={{
                      backgroundColor: "#19292f",
                      padding: "20px", // Consistent padding
                      margin: "2%",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "80px", // Fixed width
                      height: "80px", // Fixed height
                    }}
                  >
                    <Image src={pool} size="small" />
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="middle">
                <div className="new-header-text">
                  <p>Pool</p>
                  <p>Invest in liquidity</p>
                </div>
              </Grid.Column>
            </Grid>
          </Grid.Column>

          <Grid.Column
            width={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid
              className="methodsDiv"
              style={{
                borderBottom: method === "stake" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "stake" ? "#0e1d24" : "",
              }}
            >
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    cursor: "pointer",
                    border: method === "stake" ? "1px solid grey" : "none",
                    padding: "10px", // Consistent padding
                    borderRadius: "5px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => handleSelectType("stake")}
                >
                  <div
                    style={{
                      backgroundColor: "#19292f",
                      padding: "20px", // Consistent padding
                      margin: "2%",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "80px", // Fixed width
                      height: "80px", // Fixed height
                    }}
                  >
                    <Image src={stake} size="small" />
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="middle">
                <div className="new-header-text">
                  <p>Stake</p>
                  <p>Earn rewards</p>
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
                borderBottom: method === "pool" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "pool" ? "#0e1d24" : "",
                width: "100%",
              }}
            >
              <Grid.Row>
                <div
                  style={{
                    cursor: "pointer",
                    border: method === "pool" ? "1px solid grey" : "none",
                    // padding: method === 0 ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                >
                  <Image
                    src={pool}
                    size="mini"
                    onClick={() => handleSelectType("pool")}
                  />
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className="new-header-text">
                  <p>Pool</p>
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
                borderBottom: method === "stake" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "stake" ? "#0e1d24" : "",
                width: "100%",
              }}
            >
              <Grid.Row width={5}>
                <div
                  style={{
                    cursor: "pointer",
                    border: method === "stake" ? "1px solid grey" : "none",
                    // padding: method === 1 ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                  onClick={() => handleSelectType("stake")}
                >
                  <Image src={stake} size="mini" />
                </div>
              </Grid.Row>
              <Grid.Row width={8}>
                <div className="new-header-text">
                  <p>Stake</p>
                </div>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  } else {
    layout = (
      <Grid style={{ width: "100%" }}>
        <Grid.Row only="computer tablet" style={{ justifyContent: "center" }}>
          <Grid.Column
            width={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid
              className="methodsDiv"
              style={{
                borderBottom: method === "swap" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "swap" ? "#0e1d24" : "",
              }}
            >
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    cursor: "pointer",
                    border: method === "swap" ? "1px solid grey" : "none",
                    padding: method === "swap" ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                  onClick={() => handleSelectType("swap")}
                >
                  <div
                    style={{
                      backgroundColor: "#19292f",
                      padding: "20%",
                      margin: "2%",
                      borderRadius: "8px",
                    }}
                  >
                    <Image src={swap_order} size="small" />
                  </div>
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
                borderBottom: method === "lo" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "lo" ? "#0e1d24" : "",
              }}
            >
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    cursor: "pointer",
                    border: method === "lo" ? "1px solid grey" : "none",
                    padding: method === "lo" ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                  onClick={() => handleSelectType("lo")}
                >
                  <div
                    style={{
                      backgroundColor: "#19292f",
                      padding: "20%",
                      margin: "2%",
                      borderRadius: "8px",
                    }}
                  >
                    <Image src={limited_order} size="small" />
                  </div>
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
                borderBottom: method === "dca" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "dca" ? "#0e1d24" : "",
              }}
            >
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    cursor: "pointer",
                    border: method === "dca" ? "1px solid grey" : "none",
                    padding: method === "dca" ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                  onClick={() => handleSelectType("dca")}
                >
                  <div
                    style={{
                      backgroundColor: "#19292f",
                      padding: "20%",
                      margin: "2%",
                      borderRadius: "8px",
                    }}
                  >
                    <Image src={dca_order} size="small" />
                  </div>
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
                borderBottom: method === "swap" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "swap" ? "#0e1d24" : "",
                width: "100%",
              }}
            >
              <Grid.Row>
                <div
                  style={{
                    cursor: "pointer",
                    border: method === "swap" ? "1px solid grey" : "none",
                    // padding: method === 0 ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                >
                  <Image
                    src={swap_order}
                    size="mini"
                    onClick={() => handleSelectType("swap")}
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
                borderBottom: method === "lo" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "lo" ? "#0e1d24" : "",
                width: "100%",
              }}
            >
              <Grid.Row width={5}>
                <div
                  style={{
                    cursor: "pointer",
                    border: method === "lo" ? "1px solid grey" : "none",
                    // padding: method === 1 ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                  onClick={() => handleSelectType("lo")}
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
                borderBottom: method === "dca" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "dca" ? "#0e1d24" : "",
                width: "100%",
              }}
            >
              <Grid.Row width={5}>
                <div
                  style={{
                    cursor: "pointer",
                    border: method === "dca" ? "1px solid grey" : "none",
                    // padding: method === 2 ? "10px" : "0",
                    borderRadius: "5px",
                  }}
                  onClick={() => handleSelectType("dca")}
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
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {layout}
    </div>
  );
}

export default TradingMethods;
