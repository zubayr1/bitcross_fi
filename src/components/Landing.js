import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import rectangle from '../assets/rectangle.svg';

import './landing.css';
import LandingFeatures from './LandingFeatures';

function Landing() {
  return (
    <div style={{padding:'6%', overflow:'hidden'}}>
        <Grid centered>
            <Grid.Row only='computer' style={{padding:'5%'}}>
                <Grid.Column width={10} verticalAlign='middle'>
                    <Grid >
                        <Grid.Row>
                            <p className='heading'>ATOMIC EXECUTION WITH ZK SECURITY</p>
                        </Grid.Row>

                        <Grid.Row>
                            <p className='subheading'>Bringing Bitcoin to DeFi with the Trustless Interoperability</p>
                        </Grid.Row>

                        <Grid.Row>
                            <LandingFeatures />
                        </Grid.Row>

                    </Grid>

                </Grid.Column>

                <Grid.Column width={6} verticalAlign='middle'>
                    <Image src={rectangle}/>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row only='tablet'>
                <Grid>
                    <Grid.Row>
                        <Grid centered>
                            <Grid.Row centered>
                                <Image src={rectangle}/>
                            </Grid.Row>

                            <Grid.Row>
                                <p className='heading'>ATOMIC EXECUTION WITH ZK SECURITY</p>
                            </Grid.Row>

                            <Grid.Row>
                                <p className='subheading'>Bringing Bitcoin to DeFi with the Trustless Interoperability</p>
                            </Grid.Row>

                            <Grid.Row centered>
                                <LandingFeatures />
                            </Grid.Row>
                        </Grid>
                    </Grid.Row>
                </Grid>
            </Grid.Row>

            <Grid.Row only='mobile' style={{padding:'5%'}}>
                <Grid>
                    <Grid.Row>
                        <Grid centered>
                            <Grid.Row centered>
                                <Image src={rectangle} size='small'/>
                            </Grid.Row>

                            <Grid.Row>
                                <p className='heading'>ATOMIC EXECUTION WITH ZK SECURITY</p>
                            </Grid.Row>

                            <Grid.Row>
                                <p className='subheading'>Bringing Bitcoin to DeFi with the Trustless Interoperability</p>
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
