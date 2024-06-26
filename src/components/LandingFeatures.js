import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

import atomic_swap from '../assets/atomic_swap.svg';
import dca from '../assets/dca.svg';
import perps from '../assets/perps.svg';

function LandingFeatures() {
  return (
    <div style={{paddingTop:'5%'}}>
        <Grid centered>
            <Grid.Row only='computer tablet'>            
                <Grid.Column width={5}>
                    <div style={{backgroundColor:'#1f1f21', padding:'8%', borderRadius:'5%', height:'150px'}}>
                        <Grid>
                            <Grid.Column width={6} verticalAlign='middle'>
                                <Image src={atomic_swap} />
                            </Grid.Column>

                            <Grid.Column width={10}>
                                <Grid centered>
                                    <Grid.Row textAlign='middle'>
                                        <p style={{color:'white', fontSize:'1.4rem'}}>Atomic Swap</p>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <p style={{color:'#dcdce3', lineHeight:'1'}}>Move assets between chains without any trusted intermediaries</p>
                                    </Grid.Row>
                                </Grid>
                                
                            </Grid.Column>
                        </Grid>

                    </div>
                </Grid.Column>

                <Grid.Column width={5}>
                    <div style={{backgroundColor:'#1f1f21', padding:'8%', borderRadius:'5%', height:'150px'}}>
                        <Grid>
                            <Grid.Column width={6} verticalAlign='middle'>
                                <Image src={dca} />
                            </Grid.Column>

                            <Grid.Column width={10} verticalAlign='middle'>
                                <Grid centered>
                                    <Grid.Row verticalAlign='middle'>
                                        <p style={{color:'white', fontSize:'1.4rem'}}>DCA</p>
                                    </Grid.Row>
                                    <Grid.Row verticalAlign='middle'>
                                        <p style={{color:'#dcdce3', lineHeight:'1'}}>Enabling users to generate consistent profit by automating their trades</p>
                                    </Grid.Row>
                                </Grid>
                                
                            </Grid.Column>
                        </Grid>

                    </div>
                </Grid.Column>

                <Grid.Column width={5}>
                    <div style={{backgroundColor:'#1f1f21', padding:'8%', borderRadius:'5%', height:'150px'}}>
                        <Grid>
                            <Grid.Column width={5} verticalAlign='middle'>
                                <Image src={perps} />
                            </Grid.Column>

                            <Grid.Column width={11} verticalAlign='middle'>
                                <Grid centered>
                                    <Grid.Row verticalAlign='middle'>
                                        <p style={{color:'white', fontSize:'1.4rem'}}>Perps</p>
                                    </Grid.Row>
                                    <Grid.Row verticalAlign='middle'>
                                        <p style={{color:'#dcdce3', lineHeight:'1'}}>Expereince a LP to trader perpetual exchange by utilizing LP pool liquidity and oracles</p>
                                    </Grid.Row>
                                </Grid>
                                
                            </Grid.Column>
                        </Grid>

                    </div>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row only='mobile' style={{marginLeft:'12%', marginRight:'12%'}}>
                <Grid>
                    <Grid.Row>
                        <div style={{backgroundColor:'#1f1f21', padding:'2%', borderRadius:'5%',}}>
                            <Grid>
                                <Grid.Row centered>
                                    <Image src={atomic_swap} />
                                </Grid.Row>

                                <Grid.Row centered>
                                    <p style={{color:'white', fontSize:'1.4rem'}}>Atomic Swap</p>
                                </Grid.Row>
                                <Grid.Row>
                                    <p style={{color:'#dcdce3', lineHeight:'1', marginLeft:'3%', marginRight:'3%'}}>Move assets between chains without any trusted intermediaries</p>
                                </Grid.Row>

                            </Grid>

                        </div>
                    </Grid.Row>

                    <Grid.Row>
                        <div style={{backgroundColor:'#1f1f21', padding:'2%', borderRadius:'5%',}}>
                            <Grid>
                                <Grid.Row centered>
                                    <Image src={dca} />
                                </Grid.Row>

                                <Grid.Row centered>
                                    <p style={{color:'white', fontSize:'1.4rem'}}>DCA</p>
                                </Grid.Row>
                                <Grid.Row>
                                    <p style={{color:'#dcdce3', lineHeight:'1', marginLeft:'3%', marginRight:'3%'}}>Enabling users to generate consistent profit by automating their trades</p>
                                </Grid.Row>

                            </Grid>
                        </div>
                    </Grid.Row>

                    <Grid.Row>
                        <div style={{backgroundColor:'#1f1f21', padding:'2%', borderRadius:'5%',}}>
                            <Grid>
                                <Grid.Row centered>
                                    <Image src={perps} />
                                </Grid.Row>

                                <Grid.Row centered>
                                    <p style={{color:'white', fontSize:'1.4rem'}}>Perps</p>
                                </Grid.Row>
                                <Grid.Row>
                                    <p style={{color:'#dcdce3', lineHeight:'1', marginLeft:'3%', marginRight:'3%'}}>Expereince a LP to trader perpetual exchange by utilizing LP pool liquidity and oracles</p>
                                </Grid.Row>

                            </Grid>
                        </div>
                    </Grid.Row>
                </Grid>

            </Grid.Row>
        </Grid>
    </div>
  )
}

export default LandingFeatures