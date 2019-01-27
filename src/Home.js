import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar';
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
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="4000">
              <div className="item">
                <img src={pic1} class="d-block w-100" alt="..."/>
              </div>
            </div>
            <div class="carousel-item" data-interval="4000">
              <div className="item">
                <img src={pic2} class="d-block w-100" alt="..."/>
              </div>
            </div>
            <div class="carousel-item" data-interval="4000">
              <div className="item">
                <img src={pic3} class="d-block w-100" alt="..."/>
              </div>
            </div>
            </div>
          <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        {/* <div id="f1"></div> */}




          <div className="black-bar"></div>
          <ScrollButton scrollStepInPx="800" delayInMs="0"/>
            <div className="main-container" id="scroll-down">
              <div className="sub-container">
                <div className="section-title">
                  The Dream
                </div>
              </div>
              {/* <div className="sub-container"> */}
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
              {/* </div> */}
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

              <div className="sub-container">
                <div className="section-title">
                  Skills
                </div>
              </div>

              {/* <div className="table-container">
                <table className="skillsTable">
                  <tr>
                    <td className="columnone"><img src={react}/></td>
                    <td className="columntwo">React</td>
                    <td className="columnthree"></td>
                    <td className="columnone"><img src={vba}/></td>
                    <td className="columntwo">VBA</td>
                    <td className="columnthree"></td>
                  </tr>
                  <tr>
                    <td className="columnone"><img src={node}/></td>
                    <td className="columntwo">NodeJS</td>
                    <td className="columnthree"></td>
                    <td className="columnone"><img src={sql}/></td>
                    <td className="columntwo">SQL</td>
                    <td className="columnthree"></td>
                  </tr>
                  <tr>
                    <td className="columnone"><img src={redux}/></td>
                    <td className="columntwo">Redux</td>
                    <td className="columnthree"></td>
                    <td className="columnone"><img src={java}/></td>
                    <td className="columntwo">Java</td>
                    <td className="columnthree"></td>
                  </tr>
                  <tr>
                    <td className="columnone"><img src={html}/></td>
                    <td className="columntwo">HTML</td>
                    <td className="columnthree"></td>
                    <td className="columnone"><img src={linux}/></td>
                    <td className="columntwo">Linux</td>
                    <td className="columnthree"></td>
                  </tr>
                  <tr>
                    <td className="columnone"><img src={css}/></td>
                    <td className="columntwo">CSS</td>
                    <td className="columnthree"></td>
                    <td className="columnone"><img src={git}/></td>
                    <td className="columntwo">Git</td>
                    <td className="columnthree"></td>
                  </tr>
                  <tr>
                    <td className="columnone"><img src={javascript}/></td>
                    <td className="columntwo">Javascript</td>
                    <td className="columnthree"></td>
                    <td className="columnone"><img src={github}/></td>
                    <td className="columntwo">Github</td>
                    <td className="columnthree"></td>
                  </tr>
                </table>
              </div> */}
            </div>
          <div className="black-bar">
          </div>





        <div className="footer-fixed">
          Credits: Photo: Taken by Mark Chvetsov, Font: Nauman by Jonathan Hill, Icons: FontAwesome
        </div>
      </div>
      );
    }
}

export default Home;