import React, { useState, useEffect } from "react";
import Header from "./Header";
import Landing from "./Landing";
import Loading from "./Loading";

import { useNavigate } from "react-router-dom";

import { Grid, Image, Button } from "semantic-ui-react";

import twitter from "../assets/twitter_icon.svg";
import gitbook from "../assets/gitbook.svg";
import launch_icon from "../assets/launch_icon.svg";

import "./buttonstyle.css";

function LandingPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasSeenGif = sessionStorage.getItem("hasSeenGif");
    if (hasSeenGif) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, []);

  const handleGifEnd = () => {
    sessionStorage.setItem("hasSeenGif", "true");
    setLoading(false);
  };

  const handleButtonClick = () => {
    navigate("/trade");
  };

  const handleIconClick = (link) => {
    if (link === "x") {
      window.open("https://x.com/bitcrossfi", "_blank");
    } else if (link === "gitbook") {
      window.open(
        "https://bitcross-organization.gitbook.io/bitcross",
        "_blank"
      );
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #060910, #162125, #060910)",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {loading ? (
        <Loading onGifEnd={handleGifEnd} />
      ) : (
        <>
          <Header weblocation="landingpage" />
          <Landing />

          <Grid centered>
            <Grid.Row centered>
              <Grid.Column width={12} only="mobile" style={{ marginTop: "6%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    onClick={() => handleIconClick("x")}
                    style={{ margin: "0 16px", cursor: "pointer" }}
                  >
                    <Image src={twitter} size="mini" />
                  </div>

                  <div
                    onClick={() => handleIconClick("gitbook")}
                    style={{
                      margin: "0 16px",
                      cursor: "pointer",
                      filter: "invert(95%)",
                    }}
                  >
                    <Image src={gitbook} size="mini" />
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered style={{ marginBottom: "5%", marginTop: "-5%" }}>
              <Grid.Column width={14} only="mobile tablet">
                <Button
                  onClick={() => handleButtonClick()}
                  className="custom-button"
                  style={{ width: "100%" }}
                >
                  <>
                    Launch App
                    <Image src={launch_icon} avatar />
                  </>
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </>
      )}
    </div>
  );
}

export default LandingPage;
