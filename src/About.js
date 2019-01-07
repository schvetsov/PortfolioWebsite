import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';

class About extends Component {
  render() {
    return (
      // <Scrollbars style={{ width: 700, height: 540, margin: 'auto' }}>
        <div className="container">
        
          <div className="sub-container">
            <div className="sub-sub-container">
              <span className="page-title">About</span>
              <p>
                  I believe the first step to accomplishing anything is to set a clear goal, on September 18, 2018, 
                  I set the goal of becoming a software developer. I began on that day to immerse myself in HTML, CSS and Javascript, 
                  and one week later I began working with React. On November 5, 2018, I showed my boss the mobile app 
                  that I was working on, and from that time on I began working on it at the office. I have 2 years of experience 
                  writing rating application in Microsoft's VBA, which is why I am sure that this is the path for me. 
                  I made this site to show off the design skills I have learned.
              </p>
            </div>
          </div>
          
        </div>
        // </Scrollbars>
        );
    }
}

export default About;