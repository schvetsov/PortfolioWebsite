//<embed src="./Resume - Stan Chvetsov.pdf" width="800px" height="2100px" />
import React, { Component } from 'react';
import '../App.css';
import { Scrollbars } from 'react-custom-scrollbars';
import react from '../logo.png';
import axios from '../axios.png';
import nativebase from '../nativebase.png';
import node from '../output3.png';
import express from '../express.png';
import mlab from '../mlab.png';
import mongoose from '../mongoose.png';
import jwt from '../jwt.png';
import nodemailer from '../nodemailer.png';
import heroku from '../heroku.png';
import git from '../git.png'
import github from '../output6.png'

class QuickQuote extends Component {
    render() {
        return (
            <Scrollbars style={{ width: '100%', height: 610, margin: 'auto' }}>
                <div className="quickquote-container">
                    <div className="quickquote-subcontainer">
                        Stack: <br />
                        Front-End: <br />
                        <img src={react} height = '36px'/> <br />
                        <img src={axios} height = '36px'/> <br />
                        UI-Components:  <br />
                        <img src={nativebase} height = '36px'/> <br />
                        Back-End:  <br />
                        <img src={node} height = '36px'/> <br />
                        <img src={express} height = '24px'/> <br />
                        <img src={mlab} height = '36px'/> <br />
                        <img src={mongoose} height = '36px'/> <br />
                        <img src={jwt} height = '36px'/> <br />
                        <span>validator</span> <br />
                        <span>PDFMake</span> <br />
                        <span>BCrypt</span> <br />
                        <img src={nodemailer} height = '36px'/> <br />
                        Deployment:  <br />
                        <img src={heroku} height = '36px'/> <br />
                        Version Control: <br />
                        <img src={git} height = '36px'/> <br />
                        <img src={github} height = '36px'/> <br />
                    </div>
                    <div className="quickquote-subcontainer">
                        Description
                    </div>
                    <div className="quickquote-subcontainer">
                        
                    </div>
                    <div className="quickquote-subcontainer">
                        
                    </div>
                </div>
            </Scrollbars>
        );
    }
}

export default QuickQuote;
