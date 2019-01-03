import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';

class MenuBar extends Component {
  render() {
    return (
        <div>
            <div class="navbar">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <a href="#">Resume</a>
                <a href="#">Portfolio</a>
            </div>
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
        </div>
    );
  }
}

export default MenuBar;