import React, { useState, useEffect } from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'

import logo from '../assets/logo.svg';
// import telegram from '../assets/telegram_icon.svg';
import twitter from '../assets/twitter_icon.svg';
import gitbook from '../assets/gitbook.svg';
// import medium from '../assets/medium_icon.svg';
import launch_icon from '../assets/launch_icon.svg';

import { useNavigate, useLocation } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const [currentLocation, setCurrentLocation] = useState('/');

    const handleButtonClick = () =>
    {
        if(currentLocation === '/')
        {
            navigate('/trade');
        }
        else
        {
            navigate('/');
        }
    }

    useEffect(() => {
        setCurrentLocation(location.pathname);
      }, [location]);

    const handleIconClick = (link) => {
        if (link === 'x') {
            window.open('https://x.com/bitcrossfi', '_blank');
        } else if (link === 'gitbook') {
            window.open('https://bitcross-organization.gitbook.io/bitcross', '_blank');
        }
    }

  return (
    <div style={{paddingTop:'2%', paddingLeft:'6%', paddingRight:'6%', overflow:'hidden'}}>
        <Grid verticalAlign='middle' columns={3} centered>
            <Grid.Row only='computer'>
                <Grid.Column width={3} floated='left'>
                    <Image src={logo} size='small' style={{width:'35%', height:'auto'}}/>
                </Grid.Column>

                <Grid.Column width={8} floated='right' verticalAlign='middle'>
                    <Grid>
                        <Grid.Column width={3} floated='right' verticalAlign='middle'>
                            <Grid>
                                {/* <Grid.Column width={3}>
                                    <Image src={telegram} size='mini' style={{cursor: 'pointer'}}/>
                                </Grid.Column> */}

                                <Grid.Column width={8}>
                                    <div onClick={()=> handleIconClick('x')}>
                                        <Image src={twitter} size='mini' style={{cursor: 'pointer'}}/>
                                    </div>
                                </Grid.Column>

                                <Grid.Column width={8}>
                                    <div onClick={()=> handleIconClick('gitbook')}>
                                        <Image src={gitbook} size='mini' style={{ cursor: 'pointer', filter: 'invert(95%)' }}/>
                                    </div>
                                </Grid.Column>

                                {/* <Grid.Column width={3}>
                                    <Image src={medium} size='mini' style={{cursor: 'pointer'}}/>
                                </Grid.Column> */}                                
                            </Grid>                            
                        </Grid.Column>

                        <Grid.Column width={6} floated='right' verticalAlign='middle'>
                            <Button onClick={handleButtonClick} 
                                style={{ backgroundColor: 'rgba(88, 76, 34, 0.3)', 
                                    color: 'white',
                                    border: '2px solid #584C22' 
                                }}>
                                    {currentLocation === '/' ? (
                                        <>
                                        Launch App
                                        <Image src={launch_icon} avatar />
                                        </>
                                    ) : (
                                        'Back'
                                    )}
                                </Button>
                        </Grid.Column>                        
                    </Grid>
                </Grid.Column>
            </Grid.Row>


            <Grid.Row only='tablet'>
                <Grid.Column width={4}  floated='left'>
                    <Image src={logo} size='small' style={{width:'50%', height:'auto'}}/>
                </Grid.Column>

                <Grid.Column width={5} floated='right'>
                    <Grid>
                        {/* <Grid.Column width={3}>
                            <Image src={telegram} size='mini' style={{cursor: 'pointer'}}/>
                        </Grid.Column> */}

                        <Grid.Column width={6}>
                            <div onClick={()=> handleIconClick('x')}>
                                <Image src={twitter} size='mini' style={{cursor: 'pointer'}}/>
                            </div>
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <div onClick={()=> handleIconClick('gitbook')}>
                                <Image src={gitbook} size='mini' style={{ cursor: 'pointer', filter: 'invert(95%)' }}/>
                            </div>
                        </Grid.Column>

                        {/* <Grid.Column width={3}>
                            <Image src={medium} size='mini' style={{cursor: 'pointer'}}/>
                        </Grid.Column> */}
                    </Grid>
                </Grid.Column>

            </Grid.Row>


            <Grid.Row only='mobile'>
                <Grid.Column width={4} floated='left' style={{marginTop:'4%'}}>
                    <Image src={logo} size='small' floated='left'/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
  )
}

export default Header
