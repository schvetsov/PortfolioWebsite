import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import pic1 from '../WS2ScreenShots/1.png';
import pic2 from '../WS2ScreenShots/2.png';
import ScrollButton from '../ScrollButton';

class WebScraper2 extends Component {
  render() {
    return (
        <div className="background">
            <div className="black-bar"></div>
            <ScrollButton scrollStepInPx="800" delayInMs="0"/>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        Web Scraper<br/><br/>
                        Github: <a className="github-link" target="_blank" href="https://github.com/schvetsov/WebScraper2">https://github.com/schvetsov/WebScraper2</a>
                    </div>
                </div>
                <div className="bio">
                    During my time at MedMal Direct, I created several web scrapers to automate web searches. 
                    This is one of them. This particular web scraper performs Google searches, takes a screenshot of 
                    the results, and pastes it into Excel.
                </div>
                <div className="sub-container">
                    <div className="section-title">
                        How It Works
                    </div>
                </div>
                <div className="bio">
                    Here we have a liste of addresses in Column A that we want to verify through Google. We click the 
                    button on the right called "Execute Search" and sit back and relax.
                </div>
                <img className="full-image" src={pic1} />
                <div className="sub-container">
                    <div className="section-title">
                        Results
                    </div>
                </div>
                <div className="bio">
                    As you can see, we have 20 new worksheets with screenshots of our Google searches, which we can look 
                    through instead of having to type the address into Google 20 times, and it took only 49 seconds.
                </div>
                <img className="full-image" src={pic2} />
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

export default WebScraper2;