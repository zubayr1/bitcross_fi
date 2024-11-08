import React from "react";
import { Grid, Image } from "semantic-ui-react";
import LandingFeatures from "./LandingFeatures";

// import rectangle from "../assets/rectangle.gif";
import background from "../assets/background.png";

import "./landing.css";

function Landing() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Grid centered>
        <Grid.Row only="computer" style={{ padding: "5%", height: "90vh" }}>
          <Grid.Column width={10} verticalAlign="middle">
            <Grid>
              <Grid.Row>
                <p className="heading">
                  TRUSTLESS FINANCE WITH ATOMIC EXECUTION
                </p>
              </Grid.Row>

              <Grid.Row>
                <p className="subheading">
                  Bringing Bitcoin to Defi with seamless Interoperability
                </p>
              </Grid.Row>

              <Grid.Row>
                <LandingFeatures />
              </Grid.Row>
            </Grid>
          </Grid.Column>

          <Grid.Column width={6} verticalAlign="middle">
            <Image src={background} style={{ width: "100%", height: "100%" }} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row only="tablet" style={{ padding: "5%" }}>
          <Grid>
            <Grid.Row>
              <Grid centered>
                <Grid.Row>
                  <p className="heading">
                    TRUSTLESS FINANCE WITH ATOMIC EXECUTION
                  </p>
                </Grid.Row>

                <Grid.Row>
                  <p className="subheading">
                    Bringing Bitcoin to Defi with seamless Interoperability
                  </p>
                </Grid.Row>

                <Grid.Row centered>
                  <div style={{ position: "relative", width: "100%" }}>
                    <div style={{ paddingTop: "10%" }}>
                      <Image
                        src={background}
                        size="large"
                        style={{
                          display: "block",
                          margin: "0 auto",
                          zIndex: 1,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "30%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "100%",
                        zIndex: 2,
                        textAlign: "center",
                      }}
                    >
                      <LandingFeatures />
                    </div>
                  </div>
                </Grid.Row>
              </Grid>
            </Grid.Row>
          </Grid>
        </Grid.Row>

        <Grid.Row
          only="mobile"
          style={{ paddingTop: "20%", paddingLeft: "10%", paddingRight: "10%" }}
        >
          <Grid>
            <Grid.Row>
              <Grid centered>
                <Grid.Row>
                  <p className="heading">
                    TRUSTLESS FINANCE WITH ATOMIC EXECUTION
                  </p>
                </Grid.Row>

                <Grid.Row>
                  <p className="subheading">
                    Bringing Bitcoin to Defi with seamless Interoperability
                  </p>
                </Grid.Row>

                <Grid.Row centered>
                  <LandingFeatures />
                </Grid.Row>
              </Grid>
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Landing;
