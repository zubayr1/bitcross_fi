import React from "react";
import { Grid, Image } from "semantic-ui-react";

import atomic_swap from "../assets/atomic_swap.svg";
import dca from "../assets/dca.svg";
import perps from "../assets/perps.svg";
import "./landingfeatures.css";

function LandingFeatures() {
  return (
    <div style={{ paddingTop: "5%" }}>
      <Grid centered>
        <Grid.Row only="computer tablet">
          <div className="feature-wrapper">
            <div className="feature-column">
              <div className="feature-container">
                <Grid className="feature-content">
                  <Grid.Column width={5} verticalAlign="middle">
                    <Image
                      src={atomic_swap}
                      style={{ verticalAlign: "middle" }}
                    />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <Grid centered>
                      <Grid.Row>
                        <p className="feature-heading">Atomic Swap</p>
                      </Grid.Row>
                      <Grid.Row style={{ marginTop: "-5%" }}>
                        <Grid.Column width={16}>
                          <p className="feature-text">
                            Trustless asset transfer between chains
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid>
              </div>
            </div>
            <div className="feature-column">
              <div className="feature-container">
                <Grid className="feature-content">
                  <Grid.Column width={5} verticalAlign="middle">
                    <Image src={dca} style={{ verticalAlign: "middle" }} />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <Grid centered>
                      <Grid.Row>
                        <p className="feature-heading">DCA</p>
                      </Grid.Row>
                      <Grid.Row style={{ marginTop: "-5%" }}>
                        <Grid.Column width={16}>
                          <p className="feature-text">
                            Automated trades for consistent profit
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid>
              </div>
            </div>
            <div className="feature-column">
              <div className="feature-container">
                <Grid className="feature-content">
                  <Grid.Column width={5} verticalAlign="middle">
                    <Image src={perps} style={{ verticalAlign: "middle" }} />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <Grid centered>
                      <Grid.Row>
                        <p className="feature-heading">Perps</p>
                      </Grid.Row>
                      <Grid.Row style={{ marginTop: "-5%" }}>
                        <Grid.Column width={16}>
                          <p className="feature-text">
                            Experience LP-to-trader exchange
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid>
              </div>
            </div>
          </div>
        </Grid.Row>

        <Grid.Row
          only="mobile"
          style={{ marginLeft: "14%", marginRight: "14%" }}
        >
          <Grid>
            <Grid.Row>
              <div className="feature-container">
                <Grid>
                  <Grid.Row centered>
                    <Image
                      src={atomic_swap}
                      style={{ verticalAlign: "middle" }}
                    />
                  </Grid.Row>
                  <Grid.Row centered>
                    <p className="feature-heading">Atomic Swap</p>
                  </Grid.Row>
                  <Grid.Row centered>
                    <Grid.Column width={14}>
                      <p className="feature-text">
                        Trustless asset transfer between chains
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </Grid.Row>
            <Grid.Row>
              <div className="feature-container">
                <Grid>
                  <Grid.Row centered>
                    <Image src={dca} style={{ verticalAlign: "middle" }} />
                  </Grid.Row>
                  <Grid.Row centered>
                    <p className="feature-heading">DCA</p>
                  </Grid.Row>
                  <Grid.Row centered>
                    <Grid.Column width={14}>
                      <p className="feature-text">
                        Automated trades for consistent profit
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </Grid.Row>
            <Grid.Row>
              <div className="feature-container">
                <Grid>
                  <Grid.Row centered>
                    <Image src={perps} style={{ verticalAlign: "middle" }} />
                  </Grid.Row>
                  <Grid.Row centered>
                    <p className="feature-heading">Perps</p>
                  </Grid.Row>
                  <Grid.Row centered>
                    <Grid.Column width={14}>
                      <p className="feature-text">
                        Experience LP-to-trader exchange
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default LandingFeatures;
