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
    if (selectedType === "pool" || selectedType === "yield") {
      if (selectedOperationType === 0) {
        setMethod(selectedType);
      } else {
        setMethod("swap");
        setSelectedType("swap");
      }
    } else if (
      selectedType === "swap" ||
      selectedType === "lo" ||
      selectedType === "dca"
    ) {
      if (selectedOperationType === 1) {
        setMethod(selectedType);
      } else {
        setMethod("pool");
        setSelectedType("pool");
      }
    } else {
      if (selectedOperationType === 2) {
        setMethod("perps");
        setSelectedType("perps");
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
                cursor: "pointer",
                borderBottom: method === "pool" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "pool" ? "#0e1d24" : "",
              }}
              onClick={() => handleSelectType("pool")}
            >
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    border: method === "pool" ? "1px solid grey" : "none",
                    padding: "2px",
                    borderRadius: "5px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#19292f",
                      padding: "6px",
                      margin: "2%",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={pool}
                      size="small"
                      style={{ width: "120px", height: "30px" }}
                    />
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
                cursor: "pointer",
                borderBottom: method === "yield" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "yield" ? "#0e1d24" : "",
              }}
              onClick={() => handleSelectType("yield")}
            >
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    border: method === "yield" ? "1px solid grey" : "none",
                    padding: "2px",
                    borderRadius: "5px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#19292f",
                      padding: "6px",
                      margin: "2%",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={stake}
                      size="small"
                      style={{ width: "120px", height: "30px" }}
                    />
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="middle">
                <div className="new-header-text">
                  <p>yield</p>
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
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              className="methodsDiv"
              centered
              style={{
                borderBottom: method === "pool" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "pool" ? "#0e1d24" : "",
                width: "100%",
                height: "8em",
                cursor: "pointer",
              }}
              onClick={() => handleSelectType("pool")}
            >
              <Grid.Row>
                <div
                  style={{
                    border: method === "pool" ? "1px solid grey" : "none",
                    borderRadius: "5px",
                    padding: ".2rem",
                  }}
                >
                  <Image
                    src={pool}
                    size="mini"
                    style={{
                      width: "4em",
                      height: "4em",
                    }}
                  />

                  <div className="new-header-text">
                    <p>Pool</p>
                  </div>
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
                borderBottom: method === "yield" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "yield" ? "#0e1d24" : "",
                width: "100%",
                height: "8em",
                cursor: "pointer",
              }}
              onClick={() => handleSelectType("yield")}
            >
              <Grid.Row>
                <div
                  style={{
                    border: method === "yield" ? "1px solid grey" : "none",
                    borderRadius: "5px",
                    padding: ".2rem",
                  }}
                >
                  <Image
                    src={stake}
                    size="mini"
                    style={{
                      width: "4em",
                      height: "4em",
                    }}
                  />

                  <div className="new-header-text">
                    <p>yield</p>
                  </div>
                </div>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  } else if (selectedOperationType === 1) {
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
                cursor: "pointer",
              }}
              onClick={() => handleSelectType("swap")}
            >
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    border: method === "swap" ? "1px solid grey" : "none",
                    padding: "2px",
                    borderRadius: "5px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#19292f",
                      padding: "6px",
                      margin: "2%",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={swap_order}
                      size="small"
                      style={{ width: "120px", height: "30px" }}
                    />
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
                cursor: "pointer",
              }}
              onClick={() => handleSelectType("lo")}
            >
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    border: method === "lo" ? "1px solid grey" : "none",
                    padding: "2px",
                    borderRadius: "5px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#19292f",
                      padding: "6px",
                      margin: "2%",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={limited_order}
                      size="small"
                      style={{ width: "120px", height: "30px" }}
                    />
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
                cursor: "pointer",
              }}
              onClick={() => handleSelectType("dca")}
            >
              <Grid.Column width={5} verticalAlign="middle">
                <div
                  style={{
                    border: method === "dca" ? "1px solid grey" : "none",
                    padding: "2px",
                    borderRadius: "5px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#19292f",
                      padding: "6px",
                      margin: "2%",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={dca_order}
                      size="small"
                      style={{ width: "120px", height: "30px" }}
                    />
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
                height: "8em",
                cursor: "pointer",
              }}
              onClick={() => handleSelectType("swap")}
            >
              <Grid.Row>
                <div
                  style={{
                    border: method === "swap" ? "1px solid grey" : "none",
                    // padding: method === 0 ? "10px" : "0",
                    borderRadius: "5px",
                    padding: ".2rem",
                  }}
                >
                  <Image
                    src={swap_order}
                    size="mini"
                    style={{
                      width: "4em",
                      height: "4em",
                    }}
                  />

                  <div className="new-header-text">
                    <p>Swap</p>
                  </div>
                </div>
              </Grid.Row>
            </Grid>
          </Grid.Column>

          <Grid.Column
            width={5}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              className="methodsDiv"
              centered
              style={{
                borderBottom: method === "lo" ? "2px solid #6f8586" : "none",
                backgroundColor: method === "lo" ? "#0e1d24" : "",
                width: "100%",
                height: "8em",
                cursor: "pointer",
              }}
              onClick={() => handleSelectType("lo")}
            >
              <Grid.Row width={5}>
                <div
                  style={{
                    border: method === "lo" ? "1px solid grey" : "none",
                    // padding: method === 1 ? "10px" : "0",
                    borderRadius: "5px",
                    padding: ".2rem",
                  }}
                >
                  <Image
                    centered
                    src={limited_order}
                    size="mini"
                    style={{
                      width: "4em",
                      height: "4em",
                    }}
                  />

                  <div className="new-header-text">
                    <p>Limit Order</p>
                  </div>
                </div>
              </Grid.Row>
              <Grid.Row width={8}></Grid.Row>
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
                height: "8em",
                cursor: "pointer",
              }}
              onClick={() => handleSelectType("dca")}
            >
              <Grid.Row width={5}>
                <div
                  style={{
                    border: method === "dca" ? "1px solid grey" : "none",
                    // padding: method === 2 ? "10px" : "0",
                    borderRadius: "5px",
                    padding: ".2rem",
                  }}
                >
                  <Image
                    src={dca_order}
                    size="mini"
                    style={{
                      width: "4em",
                      height: "4em",
                    }}
                  />

                  <div className="new-header-text">
                    <p>DCA</p>
                  </div>
                </div>
              </Grid.Row>
              <Grid.Row width={8}></Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  } else {
    layout = <></>;
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
