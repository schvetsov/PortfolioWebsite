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
          <div className="">
            <img ALIGN="left" id="headshot" style={{paddingLeft: "20px", paddingRight:"20px"}} src={headshot}/>
            <div className="bio3">
              Hello, and welcome to my professional webpage. I created this website entirely from scratch with HTML, CSS, and Javascript, 
              and wrapped it all up with React. Feel free to check out all of my projects in my portfolio, accessable from the navigation menu 
              above. I have 2 years of experience with workplace automation using VBA,
              and building/querying relational databases with SQL. Last year, 
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
