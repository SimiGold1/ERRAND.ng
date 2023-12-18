import React from 'react';
import  truckGif from '../assets/van.gif'
import '../App.css'

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={truckGif} alt="Loading" />
      <div className="loading-text">
        <span>ERRAND.ng</span>
        <span className="loading-dots">...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;