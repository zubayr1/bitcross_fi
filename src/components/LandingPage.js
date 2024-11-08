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
              <Grid.Column width={12} only="mobile">
                <Grid centered columns={3} style={{ marginTop: "5%" }}>
                  <Grid.Row centered>
                    <Grid.Column width={3}>
                      <div onClick={() => handleIconClick("x")}>
                        <Image
                          src={twitter}
                          size="mini"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </Grid.Column>

                    <Grid.Column width={3}>
                      <div onClick={() => handleIconClick("gitbook")}>
                        <Image
                          src={gitbook}
                          size="mini"
                          style={{ cursor: "pointer", filter: "invert(95%)" }}
                        />
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered style={{ marginBottom: "2%" }}>
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
