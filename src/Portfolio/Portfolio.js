import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import pic1 from '../reactrouter.png';
import pic2 from '../react.png';

class Portfolio extends Component {
  render() {
    return (
        <div  className="background">
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
                <div className="pictureText">
                    <img className="logo" src={pic2} />
                    <img className="logo" src={pic1} />
                </div>
                <div className="bio">
                    <br/><br/><br/><br/><br/><br/>
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