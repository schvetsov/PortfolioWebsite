import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import pic1 from '../WS3ScreenShots/1.png';
import pic2 from '../WS3ScreenShots/2.png';
import pic3 from '../WS3ScreenShots/3.png';
import pic4 from '../WS3ScreenShots/4.png';
import pic5 from '../WS3ScreenShots/5.png';
import pic6 from '../WS3ScreenShots/6.png';
import vba from '../vba.png';
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
                    Microsoft's Visual Basic for Application's programming language. I would use XML and HTTP libraries 
                    to be able to send xmlHTTP requests and walk through the webpages to pull data, and transfer 
                    the data into an Excel spreadsheet. This particular web scraper automates searches done on this website:
                    </div>
                </div>
                <img className="full-image" src={pic6} />
                <div className="bio">
                    <br/>
                    This is the form on the website we would fill out for the search:
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
                <img className="full-image" src={pic3} />
                <div className="bio">
                    The first step the macro takes is to manipulate the url of the website. The following 
                    is what the url looks like after we do the search. The last 5 numbers is the license number, 
                    which is what we will be doing the searches with. Instead of walking through the DOM (document object model) of the website to fill in the form elements, we can just 
                    create a new url string for every search. This will save an immense amount of time and we will 
                    be able to perform multiple searches per second this way.
                </div>
                <img className="full-image" src={pic2} />
                <div className="bio">
                    This is what our search result looks like when we do it manually. For this search, we are going 
                    to pull the Practice Address. As you can see, it is under the name of the physician.
                </div>
                <img className="full-image" src={pic5} />
                <div className="bio">
                    The program locates the element that contains the practice address, and splits the string up by 
                    address, county, state, and zip code, and places each piece in its own cell in the spreadsheet. 
                    Some addresses have multiple rows, which is why the columns don't match up in the results. As you 
                    can see, we extracted 28 addresses by license numbers, in about 8 seconds. This is significantly 
                    faster than doing it manually, and save a lot of time.
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