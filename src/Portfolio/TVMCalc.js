import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';

class TVMCalc extends Component {
  render() {
    return (
        <div>
            <div className="black-bar"></div>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        Time Value of Money Calculator
                    </div>
                </div>
                <div className="bio">
                    This is a program I wrote in Java. It asks a series of questions in 
                    the terminal, and the user answers. It takes a starter loan, asks the type of 
                    interest and for how long do you want to take the loan out for, and calculates the loan.
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

export default TVMCalc;