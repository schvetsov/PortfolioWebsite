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
import QuickQuote from './Portfolio/QuickQuote';

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
        <div className="title">
          <div className="title-container">
            <div className="title-sub-container" id="left-side">
              <span className="name">(Stan)islav Alexeevitch Chvetsov</span>
              <span className="name-bottom"><div className="name-bottom-line"></div><div>Aspiring software developer</div></span>
            </div>
            {/* <div className="title-sub-container">
              <span><img src={node} height = '36px'/></span>
            </div> */}
            <div className="title-sub-container" id="right-side">
                <div className="title-sub-container">
                  <div className="tooltip">
                    <span><img src={logo} height = '36px'/></span>
                    <span className="tooltiptext">React</span>
                  </div>
                </div>
                <div className="title-sub-container">
                  <div className="tooltip">
                    <span><img src={node} height = '36px'/></span>
                    <span className="tooltiptext">Node</span>
                  </div>
                </div>
                <div className="title-sub-container">
                  <div className="tooltip">
                    <span><img src={redux} height = '36px'/></span>
                    <span className="tooltiptext">Redux</span>
                  </div>
                </div>
                <div className="title-sub-container">
                <span className="empty-space"></span>
                </div>
                <div className="title-sub-container">
                <a href="https://www.linkedin.com/in/stan-chvetsov-224143a5/" target="_blank"><i id="linkedIn" className="fab fa-linkedin"></i></a>
                </div>
                <div className="title-sub-container">
                {/* <span><img src={github} height = '36px'/></span> */}
                <a href="https://github.com/schvetsov" target="_blank"><i id="gitHub" className="fab fa-github"></i></a>
                </div>
            </div>
          </div>
        </div>

            <div className="navbar">
                <Link to ="/">Home</Link>
                <Link to="/about">About</Link>
                {/* <a href="#scroll-down">About</a> */}
                <Link to="/resume">Resume</Link>
                <div className="dropdown">
                    <div className="noselect">Portfolio</div>
                    <div className="dropdown-content">
                        <Link to="/project1">QuickQuote Mobile</Link>
                        <Link to="/project2">Import Algorithm</Link>
                        <Link to="/project3">Rating Engine</Link>
                        <Link to="/project4">Web Scraper</Link>
                        <Link to="/project5">Time Value of Money Calculator</Link>
                    </div>
                </div>
            </div>
            <Route exact path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/project1" exact component={QuickQuote} />
        </div>
        <div className="footer">
          Credits: Photo: Mark Chvetsov, Font: Nauman by Jonathan Hill, Icons: FontAwesome
        </div>

</div>

    );
  }
}

export default App;