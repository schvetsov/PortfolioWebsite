import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';

class Portfolio extends Component {
  render() {
    return (
        <div>
            <div className="black-bar"></div>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        Portfolio Website
                    </div>
                </div>
                <div className="bio">
                    I built this website using React and React Router, as a single page application. 
                    The Github repository can be viewed here: <a target="_blank" href="https://github.com/schvetsov/PortfolioWebsite">https://github.com/schvetsov/PortfolioWebsite</a>
                </div>
            </div>
            <div className="black-bar">
            </div>
            <div className="footer">
                    Credits: Photo: Taken by Mark Chvetsov, Font: Nauman by Jonathan Hill, Icons: FontAwesome
            </div>
        </div>
    );
  }
}

export default Portfolio;