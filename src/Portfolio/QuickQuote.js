//<embed src="./Resume - Stan Chvetsov.pdf" width="800px" height="2100px" />
import React, { Component } from 'react';
import logo from './logo.svg';
import resumefile from './Resume - Stan Chvetsov.pdf';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';

class QuickQuote extends Component {
    render() {
        return (
            <Scrollbars style={{ width: 800, height: 610, margin: 'auto' }}>
            
            </Scrollbars>
        );
    }
}

export default QuickQuote;