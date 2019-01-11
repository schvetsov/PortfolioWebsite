import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';

class About extends Component {
  render() {
    return (
      // <Scrollbars style={{ width: 700, height: 540, margin: 'auto' }}>
        <div>
        
          <div className='container'>

            </div>
          <div className="about-container">
              <span className="page-title">About</span>
              <p>
              I am an aspiring software developer with 2 years of experience with Microsoft's 
              VBA in an insurance environment. During those years I have used VBA to create 
              rating applications, automate underwriting tasks, and scrape information off the 
              internet. On September 18, 2018, I realized I really enjoy writing code, and want 
              to do it full time. So during my own time, I began to create a mobile version of 
              an application we were already using, called the QuickQuote, using React Native 
              and Node. On November 5, 2018, I showed my boss what I have been working on, and 
              on that day I began working on it in the office. You can view all the details of 
              this app in the Portfolio section of this website. I hope to use the skills I have 
              gained thus far to create more beautiful applications.
              </p>
          </div>
          </div>
        // </Scrollbars>
        );
    }
}

export default About;