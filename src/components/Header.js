import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="navigation-main-div">
        <p>Art</p>
        <p>Business</p>
        <p>Crime</p>
        <p>Food</p>
        <p>Music</p>
        <p>Movies</p>
        <p>Startup</p>
        <p>Technology</p>
      
      </div>
    );
  }
}

export default Header;