//<embed src="./Resume - Stan Chvetsov.pdf" width="800px" height="2100px" />
import React, { Component } from 'react';
import logo from './logo.svg';
import resumefile from './Resume - Stan Chvetsov.pdf';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';

class Resume extends Component {
  render() {
    return (
      <Scrollbars style={{ width: '100vw', height: 610 }}>
        {/* <div className="resume-container"> */}
          {/* <div className="sub-container"> */}
            {/* <div className="sub-sub-container"> */}
            <div style={{ width: "800px", margin: 'auto' }}>
              <embed src={resumefile} width="800px" height="1030px" />
            </div>
              
            {/* </div> */}
          {/* </div> */}
          
        {/* </div> */}
        </Scrollbars>
        );
    }
}

export default Resume;