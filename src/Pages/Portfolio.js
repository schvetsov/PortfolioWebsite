import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import pic1 from '../PWScreenShots/reactrouter.png';
import pic2 from '../PWScreenShots/react.png';
import pic3 from '../PWScreenShots/firebase.png';
import ScrollButton from '../ScrollButton';

class Portfolio extends Component {
  render() {
    return (
        <div className="background">
            <div className="black-bar"></div>
            <ScrollButton scrollStepInPx="800" delayInMs="0"/>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        Portfolio Website<br/><br/>
                        Github: <a className="github-link" target="_blank" href="https://github.com/schvetsov/PortfolioWebsite">https://github.com/schvetsov/PortfolioWebsite</a>
                    </div>
                </div>
                <div className="pictureText">
                    <img className="logo1" src={pic2} />
                    <div className="logo1">
                        I built this website completely from scratch with HTML, CSS, and Javascript using React. 
                        I did not use any templates or Bootstrap, because I wanted to learn the fundamentals of 
                        web design.
                    </div>
                </div>
                <div className="pictureText">
                    <img className="logo2" src={pic1} />
                    <div className="logo2">
                        This website was built as a single page application (SPA), which is made possible by React Router.
                    </div>
                </div>
                <div className="pictureText">
                    <img className="logo3" src={pic3} />
                    <div className="logo3">
                        I chose Google's Firebase for deployment.
                    </div>
                </div>
            </div>
            <div className="black-bar">
            </div>
        </div>
    );
  }
}

export default Portfolio;