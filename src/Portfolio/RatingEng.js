import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';

class RatingEng extends Component {
  render() {
    return (
        <div>
            <div className="black-bar"></div>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        Rating Engine
                    </div>
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