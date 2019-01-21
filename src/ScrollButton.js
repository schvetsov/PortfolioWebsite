import React, { Component } from 'react';
import './App.css';

class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0,
          isHide: false
      };
      this.hideBar = this.hideBar.bind(this)
    }

hideBar = () => {
    const { isHide } = this.state

    window.scrollY > 20 ?
    !isHide && this.setState({ isHide: true })
    :
    isHide && this.setState({ isHide: false });

    this.prev = window.scrollY;
}

componentDidMount(){
    window.addEventListener('scroll', this.hideBar);
}

componentWillUnmount(){
      window.removeEventListener('scroll', this.hideBar);
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
        const classHide = this.state.isHide ? '' : 'hide';
        return <a title='Back to top' className={`scroll-top ${classHide}`}
                 onClick={ () => { this.scrollToTop(); }}>
                  <span>Top</span>
                </a>;
     }
  }

export default ScrollButton;