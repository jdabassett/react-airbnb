/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import largeImage from '../images/photo-grid.png';


function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <img className="hero-image" src={largeImage} alt="image" width="500px" />
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-paragraph"> Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
      </div>
    </div>
  )
}

export default Hero;