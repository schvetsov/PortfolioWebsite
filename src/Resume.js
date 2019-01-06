//<embed src="./Resume - Stan Chvetsov.pdf" width="800px" height="2100px" />
import React, { Component } from 'react';
import logo from './logo.svg';
import resumefile from './Resume - Stan Chvetsov.pdf';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';

class About extends Component {
  render() {
    return (
      <Scrollbars style={{ width: 800, height: 600, margin: 'auto' }}>
        {/* <div className="resume-container"> */}
          {/* <div className="sub-container"> */}
            {/* <div className="sub-sub-container"> */}
              <embed src={resumefile} width="800px" height="1100px" />
            {/* </div> */}
          {/* </div> */}
          
        {/* </div> */}
        </Scrollbars>
        );
    }
}

export default About;