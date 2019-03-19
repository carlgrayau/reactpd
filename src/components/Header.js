import React, { Component } from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="navigation-main-div">
        <Link to="/topic/art"><p>Art</p></Link> 
        <Link to="/topic/business"><p>Business</p></Link>
        <Link to="/topic/crime"><p>Crime</p></Link>
        <Link to="/topic/food"><p>Food</p></Link>
        <Link to="/topic/movies"><p>Movies</p></Link>
        <Link to="/topic/music"><p>Music</p></Link>
        <Link to="/topic/startup"><p>Startup</p></Link>
        <Link to="/topic/technology"><p>Technology</p></Link>
      
      </div>
    );
  }
}

export default Header;