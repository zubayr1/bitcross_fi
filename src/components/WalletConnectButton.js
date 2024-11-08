import React, { useState, useEffect } from "react";

import { useModal } from "./ModalContext";

import { Button, Modal, Icon, Image } from "semantic-ui-react";

import xverse_logo from "../assets/xverse.svg";

import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { StacksDevnet } from "@stacks/network";

import "./buttonstyle.css";

function WalletConnectButton() {
  const { isModalOpen, closeModal } = useModal();

  const [modalOpen, setModalOpen] = useState(false);
  const [account, setAccount] = useState(null);

  const appConfig = new AppConfig(["store_write", "publish_data"]);
  const userSession = new UserSession({ appConfig });

  useEffect(() => {
    const storedValue = sessionStorage.getItem("account_address");
    if (storedValue) {
      setAccount(storedValue);
    }
  }, []);

  useEffect(() => {
    // Retrieve the blockstack session data from session storage
    const sessionData = localStorage.getItem("blockstack-session");
    if (sessionData) {
      try {
        const parsedData = JSON.parse(sessionData);
        const identityAddress = parsedData?.userData?.identityAddress;
        if (identityAddress) {
          setAccount(identityAddress);
        }
      } catch (error) {
        console.error("Error parsing session data:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) setModalOpen(true);
    if (!isModalOpen) setModalOpen(false);
  }, [isModalOpen]);

  const handleOpenWalletModal = () => {
    if (account === null || account === -1 || account === -2)
      setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    closeModal();
  };

  const handleWalletConnect = async (walletType) => {
    // if (walletType === "metamask") {
    //   if (window.ethereum) {
    //     const provider = new ethers.BrowserProvider(window.ethereum);

    //     try {
    //       const accounts = await provider.send("eth_requestAccounts", []);

    //       if (accounts.length > 0) {
    //         const signer = await provider.getSigner();
    //         setAccount(signer.address);
    //         sessionStorage.setItem("account_address", signer.address);
    //         setModalOpen(false);
    //       }
    //     } catch (error) {
    //       setAccount(-1);
    //       setModalOpen(false);
    //     }
    //   } else {
    //     setAccount(-2);
    //     setModalOpen(false);
    //   }
    // } else if (walletType === "polkadot") {
    //   try {
    //     // Enable the Polkadot extension
    //     const extensions = await web3Enable("BitCross.fi");
    //     if (extensions.length === 0) {
    //       setAccount(-1);
    //       setModalOpen(false);
    //     }

    //     // Retrieve accounts from the Polkadot extension
    //     const accounts = await web3Accounts();

    //     if (accounts.length > 0) {
    //       // Use the first account
    //       const account = accounts[0];
    //       setAccount(account.address);
    //       sessionStorage.setItem("account_address", account.address);
    //       setModalOpen(false);
    //     } else {
    //       setAccount(-1);
    //       setModalOpen(false);
    //     }
    //   } catch (error) {
    //     setAccount(-2);
    //     setModalOpen(false);
    //   }
    // }

    try {
      if (!userSession.isUserSignedIn() && !userSession.isSignInPending()) {
        showConnect({
          appDetails: {
            name: "BitCross.fi",
            icon: window.location.origin + "/favicon.ico",
          },
          onFinish: () => {
            let userData = userSession.loadUserData();
            setAccount(userData.identityAddress);
            sessionStorage.setItem("account_address", userData.identityAddress);

            handleCloseModal();
            window.location.reload();
          },
          userSession,
          network: new StacksDevnet(),
        });
      } else {
        setAccount(-1);
        handleCloseModal();
      }
    } catch (error) {
      setAccount(-2);
      handleCloseModal();
    }
  };

  return (
    <div>
      <Button className="custom-button" onClick={handleOpenWalletModal}>
        {account === null ? "Connect Wallet" : "Wallet Connected"}
      </Button>

      {/* Modal for Connect Wallet */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        size="small"
        style={{
          borderRadius: "10px",
          backgroundImage:
            "linear-gradient(to bottom, #060910, #162125, #060910)",
          color: "white",
        }}
      >
        <Modal.Header
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            color: "white",
            backgroundImage:
              "linear-gradient(to bottom, #060910, #162125, #060910)",
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

        <Modal.Content
          style={{
            backgroundColor: "#6f8586",
          }}
        >
          <Modal.Description style={{ color: "white", textAlign: "left" }}>
            <p style={{ fontSize: "1rem" }}>Recommended wallet</p>

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
              onClick={() => handleWalletConnect("xverse")}
            >
              <Image
                src={xverse_logo}
                size="tiny"
                style={{ marginRight: "0.5rem", width: "50px" }}
              />
              <span style={{ color: "white", marginLeft: "0.5rem" }}>
                Xverse
              </span>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default WalletConnectButton;
