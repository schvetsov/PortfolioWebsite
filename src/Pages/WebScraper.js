import React, { Component } from 'react';
import '../App.css';
import pic1 from '../WSScreenShots/1.png';
import pic2 from '../WSScreenShots/2.png';
import pic3 from '../WSScreenShots/3.png';
import pic4 from '../WSScreenShots/4.png';
import pic5 from '../WSScreenShots/5.png';
import pic6 from '../WSScreenShots/6.png';
import vba from '../WSScreenShots/vba.png';
import ScrollButton from '../ScrollButton';

class WebScraper extends Component {
  render() {
    return (
        <div className="background">
            <div className="black-bar"></div>
            <ScrollButton scrollStepInPx="800" delayInMs="0"/>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        Web Scraper<br/><br/>
                        Github: <a className="github-link" target="_blank" href="https://github.com/schvetsov/WebScraper3">https://github.com/schvetsov/WebScraper3</a>
                    </div>
                </div>
                <div className="pictureText">
                    <img id="headshot" src={vba}/>
                    <div className="bio2">
                    During my time at MedMal Direct, I created several web scrapers to automate web searches using 
                    Microsoft's VBA programming language, and Excel. This page describes how one of those 
                    web scrapers works. We will automate searches done on this website:
                    </div>
                </div>
                <img className="full-image" src={pic6} />
                <div className="bio">
                    <br/>
                    There are form elements on the website that a user would fill out and submit, to retrieve data about a certain insured. 
                    We will be performing searches using the "License Number" field.
                </div>
                <img className="full-image" src={pic1} />
                <div className="sub-container">
                    <div className="section-title">
                        How It Works
                    </div>
                </div>
                <div className="bio">
                    This is what the web scraper looks like when we open the Excel spreadsheet. In the first column, 
                    we have our license numbers of the physicians we want to look up. To the right we have a button 
                    that executes the macro. All the columns in between will be where our results show up.
                </div>
                <div className="hover-caption">
                    (hover to enlarge)
                    <img className="zoom2" src={pic3} />
                </div>
                <div className="bio">
                    The first step the macro takes is to manipulate the url of the website. The following 
                    is what the url looks like after we do the search. The last 5 numbers is the license number, 
                    which is what we will be doing the searches with. Instead of walking through the DOM (document object model) of the website to fill in the form elements, we can just 
                    create a new url string for every search. This will save an immense amount of time and we will 
                    be able to perform multiple searches per second this way.
                </div>
                <img className="full-image" src={pic2} />
                <div className="bio">
                    This is what our search results look like when we do it manually. For this search, we are going 
                    to pull the Practice Address. I highlighted it with a red box in the image below.
                </div>
                <div className="hover-caption">
                    (hover to enlarge)
                    <img className="zoom2" src={pic5} />
                </div>
                <div className="bio">
                    The program locates the HTML element that contains the practice address, and splits the string up by 
                    address, county, state, and zip code, and places each piece in its own cell in the spreadsheet. 
                    Some addresses have multiple rows, which is why the columns don't match up in the results. As you 
                    can see, we extracted 28 addresses, in about 8 seconds. This is significantly 
                    faster than doing it manually, and saves us a lot of time.
                </div>
                <div className="hover-caption">
                    (hover to enlarge)
                    <img className="zoom2" src={pic4} />
                </div>
            </div>
            <div className="black-bar">
            </div>
        </div>
    );
  }
}

export default WebScraper;