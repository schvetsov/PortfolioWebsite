import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';

class Portfolio extends Component {
  render() {
    return (
        <div className="background2">
            <div className="black-bar"></div>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        Portfolio Website<br/><br/>
                        Github: <a className="github-link" target="_blank" href="https://github.com/schvetsov/PortfolioWebsite">https://github.com/schvetsov/PortfolioWebsite</a>
                    </div>
                </div>
                <div className="bio">
                    I built this website using React and React Router, as a single page application. 
                </div>
            </div>
            <div className="black-bar">
            </div>
            <div className="footer-fixed">
                    Credits: Photo: Taken by Mark Chvetsov, Font: Nauman by Jonathan Hill, Icons: FontAwesome
            </div>
        </div>
    );
  }
}

export default Portfolio;