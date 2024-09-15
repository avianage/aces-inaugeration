import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [clicks, setClicks] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(false);

  const handleLockClick = () => {
    if (clicks < 2) {
      setClicks(clicks + 1);
    } else {
      setIsUnlocked(true);
      setTimeout(() => setShowVideo(true), 1000); // Delay for lock open animation
    }
  };

  const handleVideoEnd = () => {
    // Video has ended, trigger animation
    setShowVideo(false);
    setTimeout(() => setShowLandingPage(true), 1000); // Delay for animation
  };

  return (
    <div className="app">
      {!isUnlocked && !showVideo && !showLandingPage && (
        <div className={`lock-container ${clicks > 0 ? `shake-${clicks}` : ''}`}>
          <img
            src="lock-image.jpg"
            alt="Lock"
            onClick={handleLockClick}
            className={`lock ${isUnlocked ? 'unlock' : ''}`}
          />
        </div>
      )}

      {showVideo && (
        <div className="video-container">
          <video
            width="100%"
            height="100%"
            controls
            onEnded={handleVideoEnd}
            autoPlay
          >
            <source src="your-video.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {showLandingPage && (
        <div className="landing-page">
          <h1>Welcome to the amazing super duper crazy a$$ ACES Inaugeration</h1>
          <p>CHEEEM TAPAK DUM DUM</p>
        </div>
      )}
    </div>
  );
};

export default App;
