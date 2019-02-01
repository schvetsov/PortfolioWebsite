import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import pic1 from '../reactrouter.png';
import pic2 from '../react.png';
import pic3 from '../firebase.png';

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
                    <p>Built in React</p>
                </div>
                <div className="pictureText">
                    <img className="logo" src={pic1} />
                    <p>Used React Router for routing</p>
                </div>
                <div className="pictureText">
                    <img className="logo" src={pic3} />
                    <p>Deployed with Firebase</p>
                </div>
                <div className="bio">
                    I wrote the CSS manually with a lot of help from W3schools.com and stackoverflow.com 
                    The slideshow was created with keyframes. The header created with flexbox.
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