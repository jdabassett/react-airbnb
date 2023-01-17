import React from 'react';
import logo from '../images/airbnb-logo.png';


function Navbar() {
  return (
    <nav className="navbar-container">
      <img className="navbar-logo" src={logo} alt="logo" width="150px"/>
    </nav>
  )
}

export default Navbar;