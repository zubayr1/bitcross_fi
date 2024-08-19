import React, { useState, useEffect } from "react";
import {
  Grid,
  Menu,
  Button,
  Icon,
  Dropdown,
  Image,
  Modal,
} from "semantic-ui-react";
import metamask_logo from "../assets/metamask_logo.svg";
import polkadot_logo from "../assets/polkadot_logo.svg";
import { ethers } from "ethers";

import { web3Enable, web3Accounts } from "@polkadot/extension-dapp";


import "./trade.css";
import Header from "./Header";
import TradingMethods from "./TradingMethods";
import TradingWorks from "./TradingWorks";
import Interact from "./Interact";


function Trade() {
  const [selectedType, setSelectedType] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [account, setAccount] = useState(null);


  useEffect(() => {
    const storedValue = sessionStorage.getItem("account_address");
    if (storedValue) {
      setAccount(storedValue);
    }
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        handleWalletConnect();
      });
      window.ethereum.on("accountsChanged", () => {
        handleWalletConnect();
      });
    }
  }, []);

  const handleSelectedTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleOpenWalletModal = () => {
    if (account === null || account === -1 || account === -2)
      setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleWalletConnect = async (walletType) => {
    if (walletType === "metamask") {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);

        try {
          const accounts = await provider.send("eth_requestAccounts", []);

          if (accounts.length > 0) {
            const signer = await provider.getSigner();
            setAccount(signer.address);
            sessionStorage.setItem("account_address", signer.address);
            setModalOpen(false);
          }
        } catch (error) {
          setAccount(-1);
          setModalOpen(false);
        }
      } else {
        setAccount(-2);
        setModalOpen(false);
      }
    } else if (walletType === "polkadot") {
      try {
        // Enable the Polkadot extension
        const extensions = await web3Enable("BitCross.fi");
        if (extensions.length === 0) {
          setAccount(-1);
          setModalOpen(false);
        }

        // Retrieve accounts from the Polkadot extension
        const accounts = await web3Accounts();

        if (accounts.length > 0) {
          // Use the first account
          const account = accounts[0];
          setAccount(account.address);
          sessionStorage.setItem("account_address", account.address);
          setModalOpen(false);


        } else {
          setAccount(-1);
          setModalOpen(false);
        }
      } catch (error) {
        setAccount(-1);
        setModalOpen(false);
      }
    }
  };


  return (
    <div
      className="header-container"
      style={{ height: "100vh", backgroundColor: "black", overflow: "hidden" }}
    >
      <Header />
      <div className="new-header-container" style={{ marginTop: "1%" }}>
        <Grid verticalAlign="middle">
          <Grid.Row columns={3} only="computer">
            {/* Left Column */}
            <Grid.Column></Grid.Column>

            {/* Middle Menu Items */}
            <Grid.Column textAlign="center">
              <Menu secondary className="center-menu">
                <Menu.Item name="trade" className="menu-item">
                  Trade
                </Menu.Item>
                <Dropdown text="Preps" pointing className="link item menu-item">
                  <Dropdown.Menu className="custom-dropdown">
                    <Dropdown.Item
                      text="Coming Soon"
                      className="custom-dropdown-item"
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu>
            </Grid.Column>

            {/* Right Side Buttons */}
            <Grid.Column textAlign="right">
              <Button className="custom-button">Priority: Fast</Button>
              <Button className="custom-button">
                <Icon name="settings" />
              </Button>
              <Button className="custom-button" onClick={handleOpenWalletModal}>
                {account !== null ? "Wallet Connected" : "Connect Wallet"}
              </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={3} only="tablet mobile">
            {/* Left Column */}
            <Grid.Column></Grid.Column>

            {/* Middle Menu Items */}
            <Grid.Column textAlign="center">
              <Menu secondary className="center-menu">
                <Menu.Item name="trade" className="menu-item">
                  Trade
                </Menu.Item>
                <Dropdown text="Preps" pointing className="link item menu-item">
                  <Dropdown.Menu className="custom-dropdown">
                    <Dropdown.Item
                      text="Coming Soon"
                      className="custom-dropdown-item"
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu>
            </Grid.Column>

            {/* Right Side Buttons */}
            <Grid.Column textAlign="right">
              <Dropdown
                item
                icon="bars"
                direction="left"
                simple
                style={{ paddingRight: "5%", color: "white" }}
              >
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Icon name="fire" />
                    Priority: Fast
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Icon name="settings" />
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleOpenWalletModal}>
                    {account !== null ? "Wallet Connected" : "Connect Wallet"}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <div className="new-header-container">
        <TradingMethods onTypeChange={handleSelectedTypeChange} />
      </div>
      <div>
        <TradingWorks
          selectedType={selectedType}
          account={account}
          onConnectWallet={handleOpenWalletModal}
        />
      </div>

      <Interact account={account}/>
      {/* Modal for Connect Wallet */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        size="small"
        style={{
          borderRadius: "10px",
          backgroundColor: "#7d754a",
          color: "white",
        }}
      >
        <Modal.Header
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            color: "white",
            backgroundColor: "#7d754a",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Connect Wallet</span>
            <Icon
              name="close"
              style={{ cursor: "pointer" }}
              onClick={handleCloseModal}
            />
          </div>
        </Modal.Header>

        <Modal.Content style={{ backgroundColor: "#7d754a" }}>
          <Modal.Description style={{ color: "white", textAlign: "left" }}>
            <p style={{ fontSize: "1rem" }}>Recommended wallets</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
                padding: "10px",
                border: "1px solid white",
                borderRadius: "5px",
                // cursor: "pointer",
              }}
              // onClick={() => handleWalletConnect("metamask")}
            >
              <Image
                src={metamask_logo}
                size="tiny"
                style={{ marginRight: "0.5rem", width: "50px" }}
                disabled
              />
              <span style={{ color: "white", marginLeft: "0.5rem" }}>
                Metamask
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
                padding: "10px",
                border: "1px solid white",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => handleWalletConnect("polkadot")}
            >
              <Image
                src={polkadot_logo}
                size="tiny"
                style={{ marginRight: "0.5rem", width: "50px" }}
              />
              <span style={{ color: "white", marginLeft: "0.5rem" }}>
                Polkadot
              </span>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default Trade;
