import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';
import headshot from './headshot.png';
import medmal from './medmal.png';
import fsu from './fsu.png';
import react from './logo.png';
import axios from './axios.png';
import nativebase from './nativebase.png';
import node from './output3.png';
import redux from './output4.png';
import express from './express.png';
import mlab from './mlab.png';
import mongoose from './mongoose.png';
import jwt from './jwt.png';
import nodemailer from './nodemailer.png';
import heroku from './heroku.png';
import git from './git.png'
import github from './output6.png'
import html from './html.png';
import css from './css.png';
import javascript from './Javascript.png';
import vba from './vba.png';
import sql from './sql.png';
import java from './java.png';


class About extends Component {
  render() {
    return (
        <div>
          <div className="black-bar"></div>
        <div className="main-container" id="scroll-down">
        <div className="sub-container">
            <div className="section-title">
              The Dream
            </div>
          </div>
          <div className="sub-container">
            <div id="bio">
              After years of dabbling with various programming languages, and doing it part time for 
              2 years, I have finally decided to fully embrace this field. Some people do it for the money, 
              others do it for the prestige, I am doing it because I know this is where I am most happy. Yes, 
              I know all too well those days when you are hopelessly pounding "how to..(etc)" into Google and 
              StackOverflow for countless hours. After reading every single thread, and still not being to figure 
              out what you are doing wrong, I've been there. But when you finally do figure it out, and are overcome 
              by that euphoric feeling of victory, and realize that it was all worth it. I know exactly what I am 
              getting into, and I know it is not for everyone, but I know that it is for me. 
            </div>
          </div>
          <div className="sub-container">
            <div className="section-title">
              What I Bring To The Table
            </div>
          </div>
          <div className="sub-container">
            <img id="headshot" src={headshot}/>
            <div id="bio">
              I bring with me 3 years of experience in the insurance industry, but you can find out all about 
              that below. I am extremely passionate about accuracy and optimization. I 
            </div>
          </div>
          <div className="sub-container">
            <div className="section-title">
              Experience
            </div>
          </div>
          <div className="sub-container">
            <img id="medmal-logo" src={medmal}/>
            <div id="bio">
              I spent the entire 3 years of my professional career at one place; MedMal Direct Insurance Company. 
              I had the opportunity to do work in various departments, but most important was the coding 
              skills that I learned. For the past 2 years, I have been using Microsoft's Visual Basic for Applications (VBA) 
              to build rating applications, automate underwriting tasks, and scrape data from the internet. 
              It is from using this programming language that I discovered that I really enjoy programming, and 
              what led me to eventually take up web and mobile developing. I also have 2 years of experience 
              writing queries in SQL, and using Microsoft's SQL Server to create relational databases.
            </div>
          </div>
          <div className="sub-container">
            <div className="section-title">
              Education
            </div>
          </div>
          <div className="sub-container">
            <img id="fsu-logo" src={fsu}/>
            <div id="bio">
             I received my Bachelor's of Science in Actuarial Science from the Department of Mathematics 
             at Florida State University in December 2015, with a minor in Business. My curriculum included 
             a web design course, and a computer science course in Java. I also created a website for a club 
             I was a member of called Collegiate Entrepreneurs' Organization.
            </div>
          </div>

          <div className="sub-container">
            <div className="section-title">
              Skills
            </div>
          </div>
          <div className="sub-container">
            <div className="skills-list">
            <div className="sub-sub-container">
            <img src={react} height='12px'/> React <br />
            <img src={node} height='12px'/>NodeJS <br/>
            <img src={redux} height='12px'/>Redux <br/>
            <img src={html} height='12px'/> HTML <br/>
            <img src={css} height='12px'/>  CSS <br/>
            <img src={javascript} height='12px'/>  Javascript <br/>
            <img src={vba} height='12px'/>  VBA <br/>
            <img src={sql} height='12px'/>  SQL <br/>
              <img src={java} height='12px'/>  Java <br/>
              Git
            </div>
            <div className="sub-sub-container">
              <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <br/>
              <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <br/>
              <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <br/>
              <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <br/>
              <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <br/>
              <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <br/>
              <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <br/>
              <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <br/>
              <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> <br/>

            </div>
          </div>
          </div>
        </div>
        <div className="black-bar"></div>
        <div className="footer">
          Credits: Photo: Mark Chvetsov, Font: Nauman by Jonathan Hill, Icons: FontAwesome
        </div>
        </div>
      );
    }
}

export default About;