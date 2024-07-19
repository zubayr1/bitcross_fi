import React, { useState, useEffect } from 'react';
import Header from './Header';
import Landing from './Landing';
import Loading from './Loading';

import { useNavigate } from 'react-router-dom'

import { Grid, Image, Button } from 'semantic-ui-react'

// import telegram from '../assets/telegram_icon.svg';
import twitter from '../assets/twitter_icon.svg';
import gitbook from '../assets/gitbook.svg';
// import medium from '../assets/medium_icon.svg';
import launch_icon from '../assets/launch_icon.svg';

function LandingPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the GIF has already been shown in the current session
    const hasSeenGif = sessionStorage.getItem('hasSeenGif');
    if (hasSeenGif) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, []);

  const handleGifEnd = () => {
    // Mark the GIF as shown in sessionStorage
    sessionStorage.setItem('hasSeenGif', 'true');
    setLoading(false);
  };

  const handleButtonClick = () =>
    {
      navigate('/trade');
    }

  const handleIconClick = (link) => {
      if (link === 'x') {
          window.open('https://x.com/bitcrossfi', '_blank');
      } else if (link === 'gitbook') {
          window.open('https://bitcross-organization.gitbook.io/bitcross', '_blank');
      }
  }

  return (
    <div style={{ backgroundColor: 'black', minHeight:'100vh', overflow:'hidden' }}>
      {loading ? (
        <Loading onGifEnd={handleGifEnd} />
      ) : (
        <>
          <Header />
          <Landing />

          <Grid centered>
            <Grid.Row centered>
              <Grid.Column width={12} only='mobile'>
                <Grid centered columns={3}>
                  <Grid.Row centered>
                    {/* <Grid.Column width={3}>
                        <Image src={telegram} size='mini' style={{cursor: 'pointer'}}/>
                    </Grid.Column> */}

                    <Grid.Column width={3}>
                      <div onClick={()=> handleIconClick('x')}>
                          <Image src={twitter} size='mini' style={{cursor: 'pointer'}}/>
                      </div>
                    </Grid.Column>

                    <Grid.Column width={3}>
                      <div onClick={()=> handleIconClick('gitbook')}>
                          <Image src={gitbook} size='mini' style={{ cursor: 'pointer', filter: 'invert(95%)' }}/>
                      </div>
                    </Grid.Column>

                    {/* <Grid.Column width={3}>
                        <Image src={medium} size='mini' style={{cursor: 'pointer'}}/>
                    </Grid.Column> */}
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{marginBottom:'2%'}}>
              <Grid.Column width={14} textAlign='right' only='mobile tablet'>
                <Button onClick={()=> handleButtonClick()} style={{width:'100%', backgroundColor: '#584C22', color: 'white'}}>
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
