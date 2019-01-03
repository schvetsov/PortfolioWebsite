import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './About';
import MenuBar from './MenuBar';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="background">
        <div className="title">
          <div className="title-container">
            <div className="title-sub-container">
              <span className="name">(Stan)islav Alexeevitch Chvetsov</span>
              <span className="name-bottom">--------------------------------------Aspiring software developer</span>
            </div>
          </div>
        </div>
        <MenuBar />
        <div className="footer">
          - Stan Chvetsov 2019 -
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;