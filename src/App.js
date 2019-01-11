import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.png';
import node from './output3.png';
import redux from './output4.png';
import linkedin from './output5.png';
import github from './output6.png';
import './App.css';
import About from './About';
import MenuBar from './MenuBar';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
      <div className="background">
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
                <span><img src={logo} height = '36px'/></span>
                </div>
                <div className="title-sub-container">
                  <span><img src={node} height = '36px'/></span>
                </div>
                <div className="title-sub-container">
                <span><img src={redux} height = '36px'/></span>
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
        <div className="module-border-wrap">
        <div className="background-image">
        <MenuBar />
        </div>
        </div>
        <div className="footer">
          Credits: Photo: Mark Chvetsov, Font: Nauman by Jonathan Hill, Icons (L->R): React, Node, Redux
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;