import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class About extends Component {
  render() {
    return (
        <div className="container">
          <div className="sub-container">
            <div className="sub-sub-container">
              <span className="page-title">About</span>
              <span>Website:\About> run</span>
              <span>loading...</span>
              <p>
                  On September 18, 2018, I have realized my destiny and decided to pursue a career is software development. 
                  After nearly 3 years of working in insurance in various roles and diverse responsibilites, 
                  I have concluded without doubt that software development is the most enjoyable of 
                  these roles.
              </p>
            </div>
          </div>
        </div>
        );
    }
}

export default About;