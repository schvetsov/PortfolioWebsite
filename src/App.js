import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.png';
import node from './output3.png';
import redux from './output4.png';
import linkedin from './output5.png';
import github from './output6.png';
import './App.css';
import MenuBar from './MenuBar';
import CrossFadeImage from 'react-crossfade-image';
import firstPic from './main6.JPG';
import secondPic from './berlinstreet.jpg';
import thirdPic from './rome.jpeg';
import headshot from './headshot.png';
import medmal from './medmal.png';
import fsu from './fsu.png';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import ImportAlg from './Portfolio/ImportAlg';
import QuickQuote from './Portfolio/QuickQuote';
import RatingEng from './Portfolio/RatingEng';
import TVMCalc from './Portfolio/TVMCalc';
import WebScraper from './Portfolio/WebScraper';
import WebScraper2 from './Portfolio/WebScraper2';
import Portfolio from './Portfolio/Portfolio';

class App extends Component {

  render() {
    return (
      <div>
        <div className="background" id="scroll-up">
        <head>
          <title>Font Awesome 5 Icons</title>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'/>
        </head>
        <div className="title1">
          <div className="title1-container">
            <div className="title1-sub-container" id="left-side">
              <div className="name">Stan Chvetsov</div>
              <div className="name-bottom">Aspiring Software Developer</div>
            </div>
                <div className="title1-sub-container">
                  <div className="tooltip1">
                    <span><img src={logo} height = '36px'/></span>
                    <span className="tooltiptext">React</span>
                  </div>
                </div>
                <div className="title1-sub-container">
                  <div className="tooltip1">
                    <span><img src={node} height = '36px'/></span>
                    <span className="tooltiptext">Node</span>
                  </div>
                </div>
                <div className="title1-sub-container">
                  <div className="tooltip1">
                    <span><img src={redux} height = '36px'/></span>
                    <span className="tooltiptext">Redux</span>
                  </div>
                </div>
                {/* <div className="title-sub-container">
                <span className="empty-space"></span>
                </div> */}
                <div className="title1-sub-container" id="right-side">
                  {/* <div className="title-sub-container"> */}
                    <a href="https://www.linkedin.com/in/stan-chvetsov-224143a5/" target="_blank"><i id="linkedIn" className="fab fa-linkedin"></i></a>
                  {/* </div> */}
                  {/* <div className="title-sub-container"> */}
                    {/* <span><img src={github} height = '36px'/></span> */}
                    <a href="https://github.com/schvetsov" target="_blank"><i id="gitHub" className="fab fa-github"></i></a>
                  {/* </div> */}
              </div>
            {/* </div> */}
          </div>
        </div>
        <div className="navbar1">
          <Link to ="/">Home</Link>
          <Link to="/about">About</Link>
          {/* <a href="#scroll-down">About</a> */}
          <Link to="/resume">Resume</Link>
          <div className="dropdown1">
            <div className="noselect">Portfolio</div>
              <div className="dropdown1-content">
                <Link to="/project1">QuickQuote Mobile</Link>
                <Link to="/project7">Portfolio Website</Link>
                {/* <Link to="/project2">Import Algorithm</Link> */}
                {/* <Link to="/project3">Rating Engine</Link> */}
                <Link to="/project4">Web Scraper</Link>
                {/* <Link to="/project5">Web Scraper 2</Link> */}
                <Link to="/project6">Time Value of Money Calculator</Link>
              </div>
            </div>
          </div>
          <Route exact path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/project1" exact component={QuickQuote} />
          <Route path="/project2" exact component={ImportAlg} />
          <Route path="/project3" exact component={RatingEng} />
          <Route path="/project4" exact component={WebScraper} />
          <Route path="/project5" exact component={WebScraper2} />
          <Route path="/project6" exact component={TVMCalc} />
          <Route path="/project7" exact component={Portfolio} />
        </div>
      </div>

    );
  }
}

export default App;