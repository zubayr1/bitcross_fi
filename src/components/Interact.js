import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { cryptoWaitReady } from "@polkadot/util-crypto";

import { Keyring } from "@polkadot/keyring";
import { LegacyClient, WsProvider } from "dedot";
import { Contract } from "dedot/contracts";
import contractAbi from "../assets/contractAbi.json";

const CONTRACT_ADDRESS = "5CGR7WSLPExGZbEo21Ji6ePTMRXB3K8KsQZmNa9EbybNi2Rh";
const WS_URI = "wss://ws.test.azero.dev";

function Interact({account}) {
  const [contractState, setContractState] = useState(null);
  const [contract, setContract] = useState(null);
  const [pair, setPair] = useState(null);
  const [userAccount, setUserAccount] = useState(null);

  useEffect(() => {
    setUserAccount(account);
    const initializeContract = async () => {
      try {
        await cryptoWaitReady();
        const keyring = new Keyring({ type: "sr25519" });
        const userPair = keyring.addFromUri("//Alice");

        setPair(userPair);

        const client = await LegacyClient.new(new WsProvider(WS_URI));
        const contractInstance = new Contract(
          client,
          contractAbi,
          CONTRACT_ADDRESS
        );
        setContract(contractInstance);
      } catch (error) {
        console.error("Failed to initialize contract:", error);
      }
    };

    initializeContract();
  }, [account]);

  const handleFlip = async () => {
    if (!contract || !userAccount) return;

    try {
      const { data, raw } = await contract.query.flip({ caller: userAccount });

      if (data.isErr) {
        console.log("Cannot make transaction due to error:", data.err);
        return;
      }
      console.log(data, raw);

      await contract.tx
      .flip({ gasLimit: raw.gasRequired })
      .signAndSend(pair, ({ status, events }) => {
        if (status.type === 'BestChainBlockIncluded' || status.type === 'Finalized'){
          console.log("Transaction status:", status.type);

          const flippedEvent = events.find(({ event }) => event.method === 'Flipped');
          if (flippedEvent) {
            console.log("Old value:", flippedEvent.event.data.old);
            console.log("New value:", flippedEvent.event.data.new);
          } else {
            console.log("Flipped event not found in transaction events.");
          }
        } else {
          console.log("Transaction status:", status.type);
        }
      });
    } catch (error) {
      console.error("Flip operation failed:", error);
    }
  };

  const handleGet = async () => {
    if (!contract || !userAccount) return;

    try {
      const { data: state } = await contract.query.get({ caller: userAccount });
      console.log("Current state:", state);
      setContractState(state);
    } catch (error) {
      console.error("Get operation failed:", error);
    }
  };

  return (
    <div className="header-container">
      <Button className="custom-button" onClick={handleFlip}>
        Flip
      </Button>
      <Button
        className="custom-button"
        onClick={handleGet}
        style={{ marginLeft: "10px" }}
      >
        Get State
      </Button>
      {contractState !== null && (
        <div style={{ marginTop: "20px", color: "white" }}>
          <p>Current Contract State: {JSON.stringify(contractState)}</p>
        </div>
      )}
    </div>
  );
}

export default Interact;
