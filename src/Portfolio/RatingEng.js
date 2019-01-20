import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import ScrollButton from '../ScrollButton';

class RatingEng extends Component {

  render() {
    return (
        <div>
            <div className="black-bar"></div>
            <ScrollButton scrollStepInPx="800" delayInMs="0"/>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        Rating Engine
                    </div>
                </div>
                <div className="bio">
                    The rating engine is a macro I wrote that goes row by row through a database, 
                    pulls information, and creates a rating with a final premium, and a quote form 
                    with a binding quote for the insured. The Excel file with the rating and the Word 
                    document with the form is saved in a destination folder. When this macro was ran 
                    it managed to process 3000 insureds per hour.
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

export default RatingEng;