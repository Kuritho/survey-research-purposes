import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoConfession = () => {
  const navigate = useNavigate();
  
  return (
    <div className="confession-container">
      <div className="confession-content">
        <h1>NGIIIIIII !!! 😍</h1>
        <p>Ikaw ha! pero Here's something special for you:</p>
        
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <p>Message me on Facebook and let's talk!</p>
        
        <a 
          href="https://www.facebook.com/Kurt.BlackMamba24/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="facebook-button"
        >
          Message Me on Facebook 💌
        </a>
        
        <button 
          onClick={() => navigate('/')} 
          className="back-button"
        >
          Go Back
        </button>
      </div>
      
      <div className="floating-hearts">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="floating-heart" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 20 + 10}px`
          }}>👾</div>
        ))}
      </div>
    </div>
  );
};

export default VideoConfession;