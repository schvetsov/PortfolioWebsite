import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar';

class Home extends Component {
  render() {
    return (
      <div>
        <div id="f1"></div>
        <div className="footer-fixed">
          Credits: Photo: Taken by Mark Chvetsov, Font: Nauman by Jonathan Hill, Icons: FontAwesome
        </div>
      </div>
      );
    }
}

export default Home;