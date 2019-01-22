import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import pic1 from '../QQScreenShots/11.png';
import pic2 from '../QQScreenShots/12.png';
import pic3 from '../QQScreenShots/13.png';
import pic4 from '../QQScreenShots/14.png';
import pic5 from '../QQScreenShots/15.png';
import pic6 from '../QQScreenShots/16.png';
import pic7 from '../QQScreenShots/17.png';
import pic8 from '../QQScreenShots/18.png';
import pic9 from '../QQScreenShots/27.png';
import pic10 from '../QQScreenShots/28.png';
import pic11 from '../QQScreenShots/29.png';
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
                        Github: <a className="github-link" target="_blank" href="https://github.com/schvetsov/WebScraper1">https://github.com/schvetsov/WebScraper1</a>
                    </div>
                </div>
                <div className="bio">
                    During my time at MedMal Direct, I created several web scrapers to automate web searches. 
                    This is one of them.  
                    This particular web scraper automates searches done on this website: 
                </div>
                <img className="full-image" src={pic1} />
                <div className="sub-container">
                    <div className="section-title">
                        How It Works
                    </div>
                </div>
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
                <div className="bio">
                    Once the connection is established, we can walk through the webpage's HTML elements, and find 
                    the one that contains the NPI. But first, since we want the accuracy to be 100%, we have to exclude 
                    the searches that produce 0 NPI's and more than 1 NPI.
                </div>
                <div className="bio">
                    We don't want this:
                </div>
                <img className="full-image" src={pic7} />
                <div className="bio">
                    Or this:
                </div>
                <img className="full-image" src={pic8} />
                <div className="bio">
                    This is how we skip these entries:
                </div>
                <img className="full-image" src={pic5} />
                <div className="bio">
                    If there is only 1 NPI in the search results, it is the correct one and we pull it out of the 
                    webpage, and store it in a cell on the spreadsheet. The program then goes down a row on the spreadsheet 
                    to the next name, and does it until there are no more entries left. This macro also runs with a timer, 
                    and a message box will appear at the end telling you how many seconds it took for the code to run. 
                    This macro can process about 2-4 searches per second, which is much faster than doing it manually.
                </div>
                <img className="full-image" src={pic6} />
                <div className="sub-container">
                    <div className="section-title">
                        Results
                    </div>
                </div>
                <div className="bio">
                    When the macro is ran, it reads the information from Columns A, B, C, and D, and stores them in 
                    variables to do the searches. This is what it looks like before we run it:
                </div>
                <img className="full-image" src={pic9} />
                <div className="bio">
                    And this is what it looks like after. As you can see, the NPI's are placed in column E. A little more 
                    than 60% of the NPI's are found, which leaves us with only 18 manual searches, instead of 50. It also 
                    performs this in 24 seconds, which is about 2 searches per second.
                </div>
                <img className="full-image" src={pic10} />
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