import React, { Component } from 'react';
import './App.css';

class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
        return <a title='Back to top' className='scroll-top' 
                 onClick={ () => { this.scrollToTop(); }}>
                  <span>Top</span>
                </a>;
     }
  }

export default ScrollButton;