import React, { Component } from 'react';
import './App.css';
import pic1 from './main2.JPG';
import pic2 from './berlinstreet.jpg';
import pic3 from './berlinskyline.jpg';
import headshot from './headshot.png';
import medmal from './medmal.png';
import fsu from './fsu.png';
import ScrollButton from './ScrollButton';
import CrossfadeImage from 'react-crossfade-image';

const images = [
  pic1, pic2, pic3
];

class Home extends Component {

  constructor() {
    super();
    this.state = {
      imageIndex: 0
    };
    this.changeImage = this.changeImage.bind(this);
  }
  componentDidMount() {
    this.intervalId = setInterval(() => this.changeImage(), 4000);
  }
  changeImage() {
    if (this.state.imageIndex === images.length - 1) {
      this.setState({ imageIndex: 0 });
    } else {
      this.setState({ imageIndex: this.state.imageIndex + 1 });
    }
  }

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
              Hello, and welcome to my professional webpage. I created it to showcase my experience and talents 
              as a software developer. Feel free to look at my resume and portfolio, and contact me if you have 
              any inquiries.
            </div>
          <div className="pictureText">
            <img id="headshot" src={headshot}/>
            <div className="bio2">
              I have 2 years of experience with workplace automation using VBA.
              I also have 2 years of experience building and querying relational databases with SQL. Last year, 
              I began working on a mobile iOS application using React Native and Node.js. I have learned a lot 
              since then, and look forward to keep learning and applying my skills to future projects.
            </div>
          </div>
        </div>
        <div className="black-bar"></div>
        <div className="footer">
          Credits: Photo: Mark Chvetsov, Font: Nauman by Jonathan Hill, Icons: FontAwesome
        </div>
      </div>
    );
  }
}

export default Home;