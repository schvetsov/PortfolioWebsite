import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="title">
          <div className="title-container">
            <span className="name">(Stan)islav Alexeevitch Chvetsov</span>
            <span className="name-bottom">Aspiring software developer</span>
            {/* <p className="name">(Stan)islav Alexeevitch Chvetsov</p>
            <p className="name-bottom">Aspiring software developer</p> */}
          </div>
        </div>
        <div class="navbar">
          <a href="#">About</a>
          <a href="#">Resume</a>
          <a href="#">Portfolio</a>
        </div>
        <div className="container">
          <div className="sub-container">
            <div className="sub-sub-container">
              <span className="page-title">About</span>
              <span>Website:\About> run</span>
              <span>loading...</span>
              <p>
                  On September 18, 2018, I decided to pursue a career is software development. 
                  After nearly 3 years of working in insurance in various roles and diverse responsibilites, 
                  I have concluded without doubt that software development is the most enjoyable of 
                  these roles.
              </p>
            </div>
          </div>
        </div>
      </div>
      // <div className="background">
      //   <div className="header">
      //     <p>Stan A. Chvetsov</p>
      //     <p>Analyst. Developer. Innovator.</p>
      //   </div>
      //   <div className="container">
      //     <div className="left">
      //       <div className="title">Content</div>
      //       <div className="content">
      //         <div className="subcontent">Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
      //       </div>
      //     </div>
      //     {/* <div className="divider"></div> */}
      //     <div className="right">
      //       <div class="navbar">
      //         <a href="#">About</a>
      //         <a href="#">Resume</a>
      //         <a href="#">Portfolio</a>
      //       </div>
      //       <div className="content">
      //         <img src={require('./DSC_0076.JPG')} height="200px" />
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;