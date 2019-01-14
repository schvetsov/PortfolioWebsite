import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Resume from './Resume';
// import QuickQuote from './Portfolio/QuickQuote';

class MenuBar extends Component {
  render() {
    return (
        <div className="navbar-sticky">
        </div>
    );
  }
}

export default MenuBar;

/*          
<li className="dropdown">
              <a href="" class="dropbtn">Portfolio</a>
              <div className="dropdown-content">
              <Link to="/project1">Project1</Link>
              <Link to="/project2">Project2</Link>
              <Link to="/project3">Project3</Link>
              <Link to="/project4">Project4</Link>
              </div>
          </li> */