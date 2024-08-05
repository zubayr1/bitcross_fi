import React, { useEffect } from 'react';
import xLogoGif from '../assets/x_logo.gif'; // Ensure the path is correct

function Loading({ onGifEnd = null }) {
  useEffect(() => {
    // Set a timeout equal to the duration of the GIF to simulate the end of the GIF
    const timeout = setTimeout(() => {
      onGifEnd();
    }, 5200); // Replace 3000 with the duration of your GIF in milliseconds

    return () => clearTimeout(timeout);
  }, [onGifEnd]);

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={xLogoGif} alt="Loading" style={{ width: '80%', height: 'auto' }} />
    </div>
  );
}

export default Loading;
