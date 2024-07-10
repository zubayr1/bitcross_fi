import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

import atomic_swap from '../assets/atomic_swap.svg';
import dca from '../assets/dca.svg';
import perps from '../assets/perps.svg';
import './landingfeatures.css';

function LandingFeatures() {
  return (
    <div style={{ paddingTop: '5%' }}>
      <Grid centered>
        <Grid.Row only="computer tablet">
          <Grid.Column width={5}>
            <div className="feature-container">
              <Grid>
                <Grid.Column width={5} verticalAlign="middle">
                  <Image src={atomic_swap} />
                </Grid.Column>
                <Grid.Column width={11}>
                  <Grid centered>
                    <Grid.Row textAlign="middle">
                      <p className="feature-heading">Atomic Swap</p>
                    </Grid.Row>
                    <Grid.Row style={{marginTop:'-7%'}}>
                      <p className="feature-text">
                        Move assets between chains without any trusted intermediaries
                      </p>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <div className="feature-container">
              <Grid>
                <Grid.Column width={5} verticalAlign="middle">
                  <Image src={dca} />
                </Grid.Column>
                <Grid.Column width={11} verticalAlign="middle">
                  <Grid centered>
                    <Grid.Row verticalAlign="middle">
                      <p className="feature-heading">DCA</p>
                    </Grid.Row>
                    <Grid.Row style={{marginTop:'-7%'}}>
                      <p className="feature-text">
                        Enabling users to generate consistent profit by automating their trades
                      </p>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <div className="feature-container">
              <Grid>
                <Grid.Column width={5} verticalAlign="middle">
                  <Image src={perps} />
                </Grid.Column>
                <Grid.Column width={11} verticalAlign="middle">
                  <Grid centered>
                    <Grid.Row verticalAlign="middle">
                      <p className="feature-heading">Perps</p>
                    </Grid.Row>
                    <Grid.Row style={{marginTop:'-7%'}}>
                      <p className="feature-text">
                        Experience a LP to trader perpetual exchange by utilizing LP pool liquidity and oracles
                      </p>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only="mobile" style={{ marginLeft: '12%', marginRight: '12%' }}>
          <Grid>
            <Grid.Row>
              <div className="feature-container">
                <Grid>
                  <Grid.Row centered>
                    <Image src={atomic_swap} />
                  </Grid.Row>
                  <Grid.Row centered style={{marginTop:'-7%'}}>
                    <p className="feature-heading">Atomic Swap</p>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'-7%'}}>
                    <p className="feature-text">
                      Move assets between chains without any trusted intermediaries
                    </p>
                  </Grid.Row>
                </Grid>
              </div>
            </Grid.Row>
            <Grid.Row>
              <div className="feature-container">
                <Grid>
                  <Grid.Row centered>
                    <Image src={dca} />
                  </Grid.Row>
                  <Grid.Row centered style={{marginTop:'-7%'}}>
                    <p className="feature-heading">DCA</p>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'-7%'}}>
                    <p className="feature-text">
                      Enabling users to generate consistent profit by automating their trades
                    </p>
                  </Grid.Row>
                </Grid>
              </div>
            </Grid.Row>
            <Grid.Row>
              <div className="feature-container">
                <Grid>
                  <Grid.Row centered>
                    <Image src={perps} />
                  </Grid.Row>
                  <Grid.Row centered style={{marginTop:'-7%'}}>
                    <p className="feature-heading">Perps</p>
                  </Grid.Row>
                  <Grid.Row style={{marginTop:'-7%'}}>
                    <p className="feature-text">
                      Experience a LP to trader perpetual exchange by utilizing LP pool liquidity and oracles
                    </p>
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
