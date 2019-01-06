import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Resume from './Resume';

class MenuBar extends Component {
  render() {
    return (
        <div>
            <div class="navbar">
                <Link to="/home"><span id="dash">-</span><span id="home">Home</span><span id="dash">-</span></Link>
                <Link to="/about"><span id="dash">-</span><span id="home">About</span><span id="dash">-</span></Link>
                <Link to="/resume"><span id="dash">-</span><span id="home">Resume</span><span id="dash">-</span></Link>
                <div className="dropdown">
                    <div className="noselect">Portfolio</div>
                    <div className="dropdown-content">
                        <Link to="/project1">QuickQuote Mobile</Link>
                        <Link to="/project2">Import Algorithm</Link>
                        <Link to="/project3">Rating Engine</Link>
                        <Link to="/project4">Web Scraper</Link>
                        <Link to="/project5">Time Value of Money Calculator</Link>
                    </div>
                </div>
            </div>
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/resume" exact component={Resume} />
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