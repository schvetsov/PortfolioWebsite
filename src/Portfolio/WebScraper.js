import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import pic1 from '../QQScreenShots/11.png';
import pic2 from '../QQScreenShots/12.png';
import pic3 from '../QQScreenShots/13.png';
import pic4 from '../QQScreenShots/14.png';

class WebScraper extends Component {
  render() {
    return (
        <div>
            <div className="black-bar"></div>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        Web Scraper
                    </div>
                </div>
                <div className="bio">
                    During my time at MedMal Direct, I created several web scrapers to automate web searches. 
                    This is one of them. This particular web scraper automates searches done on this website: 
                </div>
                <img className="full-image" src={pic1} />
                <div className="bio">
                    The first step the macro takes is to manipulate the url of the website.
                </div>
                <img className="full-image" src={pic2} />
                <div className="bio">
                    Instead of walking through the DOM (document object model) of the website to fill in the form elements, we can just 
                    create a new url string for every search. This will save an immense amount of time and we will 
                    be able to perform multiple searches per second this way.
                </div>
                <img className="full-image" src={pic3} />
                <div className="bio">
                    The next step the program takes is to establish a connection to the webpage's server. This is accomplished 
                    by enabling the XML and HTTP libraries in Excel VBA, and performing an xmlHTTP get request.
                </div>
                <img className="full-image" src={pic4} />
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

export default WebScraper;