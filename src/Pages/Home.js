import React, { Component } from 'react';
import '../App.css';
import pic1 from '../HomeScreenShots/main2.JPG';
import pic2 from '../HomeScreenShots/berlinstreet.jpg';
import pic3 from '../HomeScreenShots/berlinskyline.jpg';
import headshot from '../HomeScreenShots/headshot.png';
import ScrollButton from '../ScrollButton';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="slideshow-box">
          <div className="fadein">
            <img id="g1" src={pic3} alt="..."/>
            <img id="g2" src={pic2} alt="..."/>
            <img id="g3" src={pic1} alt="..."/>
          </div>
        </div>
        <div className="black-bar"></div>
        <ScrollButton scrollStepInPx="800" delayInMs="0"/>
        <div className="main-container" id="scroll-down">
          <div className="sub-container">
            <div className="section-title">
              Bio
            </div>
          </div>
            <div className="bio">
              Hello, and welcome to my professional webpage. <br/>I created it to showcase my experience and talents 
              as a software developer. Feel free to check out my resume and portfolio, and contact me if you have 
              any inquiries.
            </div>
          <div className="">
            <img ALIGN="left" id="headshot" style={{paddingLeft: "20px", paddingRight:"20px"}} src={headshot}/>
            <div className="">
              I have 2 years of experience with workplace automation using VBA.
              I also have 2 years of experience building and querying relational databases with SQL. Last year, 
              I began working on a mobile iOS application using React Native and Node.js. I have learned a lot 
              since then, and look forward to keep learning and applying my skills to future projects.
            </div>
          </div>
        </div>
        <div className="black-bar"></div>
      </div>
    );
  }
}

export default Home;
