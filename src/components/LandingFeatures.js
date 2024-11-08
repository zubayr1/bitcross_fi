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
        <Grid.Row only="computer">
          <div className="feature-wrapper">
            <div className="feature-column">
              <div className="feature-container">
                <Grid className="feature-content">
                  <Grid.Column width={4} verticalAlign="middle">
                    <Image
                      src={atomic_swap}
                      style={{ verticalAlign: "middle" }}
                    />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Grid centered>
                      <Grid.Row>
                        <Grid.Column>
                          <p className="feature-heading">Atomic Swap</p>
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
                  <Grid.Column width={4} verticalAlign="middle">
                    <Image src={dca} style={{ verticalAlign: "middle" }} />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Grid centered>
                      <Grid.Row>
                        <Grid.Column>
                          <p className="feature-heading">DCA</p>
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
                  <Grid.Column width={4} verticalAlign="middle">
                    <Image src={perps} style={{ verticalAlign: "middle" }} />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Grid centered>
                      <Grid.Row>
                        <Grid.Column>
                          <p className="feature-heading">Perps</p>
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

        <Grid.Row only="tablet">
          <Grid centered>
            <Grid.Row>
              <div className="feature-container">
                <Grid className="feature-content">
                  <Grid.Column width={4} verticalAlign="middle">
                    <Image
                      src={atomic_swap}
                      style={{ verticalAlign: "middle" }}
                    />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Grid centered>
                      <Grid.Row>
                        <Grid.Column>
                          <p className="feature-heading">Atomic Swap</p>
                          <p className="feature-text">
                            Trustless asset transfer between chains
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid>
              </div>
            </Grid.Row>

            <Grid.Row>
              <div className="feature-container">
                <Grid className="feature-content">
                  <Grid.Column width={4} verticalAlign="middle">
                    <Image src={dca} style={{ verticalAlign: "middle" }} />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Grid centered>
                      <Grid.Row>
                        <Grid.Column>
                          <p className="feature-heading">DCA</p>
                          <p className="feature-text">
                            Automated trades for consistent profit
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid>
              </div>
            </Grid.Row>

            <Grid.Row>
              <div className="feature-container">
                <Grid className="feature-content">
                  <Grid.Column width={4} verticalAlign="middle">
                    <Image src={perps} style={{ verticalAlign: "middle" }} />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Grid centered>
                      <Grid.Row>
                        <Grid.Column>
                          <p className="feature-heading">Perps</p>
                          <p className="feature-text">
                            Experience LP-to-trader exchange
                          </p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid>
              </div>
            </Grid.Row>
          </Grid>
        </Grid.Row>

        <Grid.Row
          only="mobile"
          style={{ marginLeft: "14%", marginRight: "14%" }}
        >
          <Grid centered>
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
                    <Grid.Column>
                      <p className="feature-heading">Atomic Swap</p>
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
                    <Grid.Column>
                      <p className="feature-heading">DCA</p>
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
                    <Grid.Column>
                      <p className="feature-heading">Perps</p>
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
