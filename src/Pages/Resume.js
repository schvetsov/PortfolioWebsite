import React, { Component } from 'react';
import resumefile from '../ResumeScreenShots/Resume.pdf';
import '../App.css';
import ScrollButton from '../ScrollButton';

class Resume extends Component {

  render() {
    return (
          <div className="background">
            <ScrollButton scrollStepInPx="800" delayInMs="0"/>
            <div style={{ width: "800px", margin: 'auto' }}>
              <embed src={resumefile} width="800px" height="1050px" />
            </div>
            <div className="footer">
              Credits: Photo: Mark Chvetsov, Font: Nauman by Jonathan Hill, Icons: FontAwesome
            </div>
          </div> 
    );
    }
}

export default Resume;