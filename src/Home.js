import React, { Component } from 'react';
import './App.css';
import pic1 from './main2.JPG';
import pic2 from './berlinstreet.jpg';
import pic3 from './berlinskyline.jpg';
import headshot from './headshot.png';
import medmal from './medmal.png';
import fsu from './fsu.png';
import ScrollButton from './ScrollButton';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="slideshow-box">
          <div className="fadein">
            <img id="g1" src={pic1} class="d-block w-100" alt="..."/>
            <img id="g2" src={pic2} class="d-block w-100" alt="..."/>
            <img id="g3" src={pic3} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <div className="black-bar"></div>
        <ScrollButton scrollStepInPx="800" delayInMs="0"/>
        <div className="main-container" id="scroll-down">
          <div className="sub-container">
            <div className="section-title">
              The Dream
            </div>
          </div>
            <div className="bio">
              After years of dabbling with various programming languages, and doing it part time for 
              2 years, I have finally decided to fully embrace this field. Some people do it for the money, 
              others do it for the prestige, I am doing it because I know this is where I am most happy. Yes, 
              I know all too well those days when you are hopelessly pounding "how to..(etc)" into Google and 
              StackOverflow for countless hours. After reading every single thread, and still not being to figure 
              out what you are doing wrong, I've been there. But when you finally do figure it out, and are overcome 
              by that euphoric feeling of victory, and realize that it was all worth it. I know exactly what I am 
              getting into, and I know it is not for everyone, but I know that it is for me. 
            </div>
          <div className="sub-container">
            <div className="section-title">
              What I Bring To The Table
            </div>
          </div>
          <div className="pictureText">
            <img id="headshot" src={headshot}/>
            <div className="bio2">
              I bring with me 3 years of experience in the insurance industry, with 2 years of that working 
              with VBA automating underwriting processes in Microsoft products. I also spent 2 years of that 
              building and querying relational databases with Microsoft's Access and SQL Server. In the last 
              6 months, I began learning web and mobile development. I spent most of my time working on one huge 
              project, which is a mobile iOS app I built for my company with React Native and Node.js. It is called 
              the QuickQuote, and the full details are available in the Portfolio section of this website. I am 
              excited to apply my experience to larger and more abitious projects, and to continue learning.
            </div>
          </div>
          <div className="sub-container">
            <div className="section-title">
              Experience
            </div>
          </div>
          <div className="pictureText">
            <img id="medmal-logo" src={medmal}/>
            <div className="bio2">
              I spent the entire 3 years of my professional career at one place; MedMal Direct Insurance Company. 
              I had the opportunity to do work in various departments, but most important was the coding 
              skills that I learned. For the past 2 years, I have been using Microsoft's Visual Basic for Applications (VBA) 
              to build rating applications, automate underwriting tasks, and scrape data from the internet. 
              It is from using this programming language that I discovered that I really enjoy programming, and 
              what led me to eventually take up web and mobile developing. I also have 2 years of experience 
              writing queries in SQL, and using Microsoft's SQL Server to create relational databases.
            </div>
          </div>
          <div className="sub-container">
            <div className="section-title">
              Education
            </div>
          </div>
          <div className="pictureText">
            <img id="fsu-logo" src={fsu}/>
            <div className="bio2">
            I received my Bachelor's of Science in Actuarial Science from the Department of Mathematics 
            at Florida State University in December 2015, with a minor in Business. My curriculum included 
            a web design course, and a computer science course in Java. I also created a website for a club 
            I was a member of called Collegiate Entrepreneurs' Organization.
            </div>
          </div>
        </div>
        <div className="black-bar"></div>
        <div className="footer-fixed">
          Credits: Photo: Taken by Mark Chvetsov, Font: Nauman by Jonathan Hill, Icons: FontAwesome
        </div>
      </div>
    );
  }
}

export default Home;