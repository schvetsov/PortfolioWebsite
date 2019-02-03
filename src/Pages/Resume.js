//<embed src="./Resume - Stan Chvetsov.pdf" width="800px" height="2100px" />
import React, { Component } from 'react';
import logo from '../logo.svg';
import resumefile from '../Resume - Stan Chvetsov.pdf';
import '../App.css';
import { Scrollbars } from 'react-custom-scrollbars';
import ScrollButton from '../ScrollButton';

class Resume extends Component {

  render() {
    return (
      // <Scrollbars style={{ width: '100vw', height: 610 }}>
          <div className="background">
            <ScrollButton scrollStepInPx="800" delayInMs="0"/>
            <div style={{ width: "800px", margin: 'auto' }}>
              <embed src={resumefile} width="800px" height="1050px" />
            </div>
            <div className="footer">
              Credits: Photo: Mark Chvetsov, Font: Nauman by Jonathan Hill, Icons: FontAwesome
            </div>
          </div> 
        // </Scrollbars>
    );
    }
}

export default Resume;