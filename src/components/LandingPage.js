import React, { useState, useEffect } from 'react';
import Header from './Header';
import Landing from './Landing';
import Loading from './Loading';

import { useNavigate } from 'react-router-dom'

import { Grid, Image, Button } from 'semantic-ui-react'

import telegram from '../assets/telegram_icon.svg';
import twitter from '../assets/twitter_icon.svg';
import medium from '../assets/medium_icon.svg';
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
                <Grid centered>
                  <Grid.Column width={3}>
                      <Image src={telegram} size='mini' />
                  </Grid.Column>

                  <Grid.Column width={3}>
                      <Image src={twitter} size='mini' />
                  </Grid.Column>

                  <Grid.Column width={3}>
                      <Image src={medium} size='mini' />
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{marginBottom:'2%'}}>
              <Grid.Column width={14} textAlign='right' only='mobile'>
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
