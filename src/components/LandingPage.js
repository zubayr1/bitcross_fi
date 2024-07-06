import React, { useState, useEffect } from 'react';
import Header from './Header';
import Landing from './Landing';
import Loading from './Loading';

function LandingPage() {
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

  return (
    <div style={{ backgroundColor: 'black' }}>
      {loading ? (
        <Loading onGifEnd={handleGifEnd} />
      ) : (
        <>
          <Header />
          <Landing />
        </>
      )}
    </div>
  );
}

export default LandingPage;
