import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import react from './HomeScreenShots/react.png';
import node from './HomeScreenShots/node.png';
import redux from './HomeScreenShots/redux.png';
import './App.css';
import Home from './Pages/Home';
// import About from './About';
import Resume from './Pages/Resume';
import GoogleMaps from './Pages/Map';
import QuickQuote from './Pages/QuickQuote';
import TVMCalc from './Pages/TVMCalc';
import WebScraper from './Pages/WebScraper';
import Portfolio from './Pages/Portfolio';
// import ImportAlg from './Portfolio/ImportAlg';

class App extends Component {

  render() {
    return (
      <div>
        <div className="background" id="scroll-up">
          <div>
            <title>Font Awesome 5 Icons</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'/>
          </div>
          {/** className="title1-container title1" */}
          <div className="title1-sub-container" style={{color:'white', flexWrap:'wrap', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
              <div style={{flexWrap:'wrap', display:'flex', alignItems: 'center', flexDirection:'wrap', justifyContent:'space-around'}}>
                <div className="name">Stan Chvetsov</div>
                <div className="name-bottom">Aspiring Software Developer</div>
              </div>
              <div className="title-icons">
                <div><img src={react} height = '36px'/></div>
                <div><img src={node} height = '36px'/></div>
                <div><img src={redux} height = '36px'/></div>
                <div className="title1-sub-container" id="right-side">
                  <a href="https://www.linkedin.com/in/stan-chvetsov-224143a5/" target="_blank"><i id="linkedIn" className="fab fa-linkedin"></i></a>
                  <a href="https://github.com/schvetsov" target="_blank"><i id="gitHub" className="fab fa-github"></i></a>
                </div>
              </div>
          </div>
        <div className="navbar1">
          <Link to ="/">Home</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/map">Google Maps</Link>
          <div className="dropdown1">
            <div className="noselect">Portfolio</div>
              <div className="dropdown1-content">
                <Link to="/quickquote">QuickQuote Mobile</Link>
                <Link to="/website">Portfolio Website</Link>
                {/* <Link to="/project2">Import Algorithm</Link> */}
                <Link to="/webscraper">Web Scraper</Link>
                <Link to="/tvmcalc">Time Value of Money Calculator</Link>
              </div>
            </div>
          </div>
          <Route exact path="/" exact component={Home} />
          {/* <Route path="/about" exact component={About} /> */}
          <Route path="/resume" exact component={Resume} />
          <Route path="/map" exact component={GoogleMaps} />
          <Route path="/quickquote" exact component={QuickQuote} />
          {/* <Route path="/project2" exact component={ImportAlg} /> */}
          <Route path="/webscraper" exact component={WebScraper} />
          <Route path="/tvmcalc" exact component={TVMCalc} />
          <Route path="/website" exact component={Portfolio} />
        </div>
        <div className="footer">
          Credits: Photo: Mark Chvetsov, Font: Nauman by Jonathan Hill, Icons: FontAwesome
        </div>
      </div>
    );
  }
}

export default App;