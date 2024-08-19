import React, { useState } from "react";
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

function Swap({ account = null, onConnectWallet }) {
  const options = [
    {
      key: "btc",
      text: "btc",
      value: "btc",
      image: { avatar: true, src: bitcoin_logo },
    },
    {
      key: "sol",
      text: "sol",
      value: "sol",
      image: { avatar: true, src: solana_logo },
    },
  ];

  const [selectedValueSend, setSelectedValueSend] = useState(options[0].value);
  const [selectedValueReceive, setSelectedValueReceive] = useState(
    options[1].value
  );

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

  const handleConnectWallet = () => {
    onConnectWallet(true);
  };

  let layout = <div></div>;

  if (account === null) {
    layout = (
      <div style={{ cursor: "pointer" }} onClick={handleConnectWallet}>
        <Message negative>Connect Wallet First</Message>
      </div>
    );
  } else if (account === -1) {
    layout = <Message negative>Error connecting to MetaMask</Message>;
  } else if (account === -2) {
    layout = <Message negative>MetaMask is not installed</Message>;
  } else {
    layout = (
      <div>
        <Grid centered>
          <p style={{ color: "#ede7df", fontFamily: "'Raleway', sans-serif" }}>
            Account Address: <span />{" "}
            <span
              style={{
                display: "inline-block",
                border: "1px solid white",
                padding: "1%",
                borderRadius: "5px",
              }}
            >
              {account}
            </span>
          </p>

          <Grid.Row>
            <div
              style={{
                backgroundColor: "#565030",
                padding: "5%",
                borderRadius: "10px",
                width: "80%",
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
                    options={options}
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
                    placeholder="0.00"
                    size="mini"
                    type="number"
                    style={{
                      width: "100%",
                    }}
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
                    options={options}
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
                    placeholder="0.00"
                    size="mini"
                    type="number"
                    style={{
                      width: "100%",
                    }}
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

              <Button
                style={{
                  marginTop: "3%",
                  width: "100%",
                  height: "20%",
                  backgroundColor: "#2b2d19",
                  color: "#ede7df",
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "1.6rem",
                }}
              >
                Swap
              </Button>
            </div>
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

        <Grid.Row>{layout}</Grid.Row>
      </Grid>
    </div>
  );
}

export default Swap;
