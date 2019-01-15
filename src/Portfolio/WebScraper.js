import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';

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
                    This is a web scraper I created when I was at MedMal. It's purpose 
                    is to search and retrieve NPI's (National Provider Identifier) which are a 10 digit 
                    number assigned to every physician. The webscraper accomplishes this by establishing 
                    a connection with the online database using an XMLHTTP request, and walking through the 
                    document object model to find the NPI, storing it in a variable, and pasting it in the 
                    spreadsheet. For this to work, the XML and HTTP libraries have to be enabled in VBA. 
                    The searches are done by making an addendum to the URL, to include First Name, Last Name, 
                    and State.
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

export default WebScraper;