import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';

class QuickQuote extends Component {
  render() {
    return (
        <div>
            <div className="black-bar"></div>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        QuickQuote Mobile
                    </div>
                </div>
                <div className="bio">
                    The QuickQuote is a mobile rating application that I developed for MedMal Direct Insurance Company. 
                    The idea is for our sales people to be able to produce quotes for low risk business, and have those quote forms 
                    emailed to themselves, all from their smartphone. It was created with React Native in the front end, and a Node back end.
                    I also used many additional API's and packages, the full list:
                </div>
                <div className="table-container">
                    <table className="stackTable">
                        <tr>
                            <th></th>
                        </tr>
                        <tr>
                            <td className="colone">Front-End:</td>
                            <td className="coltwo">React Native</td>
                            <td className="colthree">A framework for building native apps with React.</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">RN Navigation</td>
                            <td className="colthree">A complete native navigation solution by Wix</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Axios</td>
                            <td className="colthree">Promise based HTTP client for the browser and node.js</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Nativebase.io</td>
                            <td className="colthree">Cross-platform UI components for React Native</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo"></td>
                            <td className="colthree"></td>
                        </tr>
                        <tr>
                            <td className="colone">Back-End</td>
                            <td className="coltwo">Node</td>
                            <td className="colthree">JavaScript run-time environment that executes JavaScript code outside of a browser.</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Express</td>
                            <td className="colthree">A web application framework for Node.js, used for routing.</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Mlab</td>
                            <td className="colthree">Fully managed cloud database service that hosts MongoDB databases.</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Mongoose</td>
                            <td className="colthree">MongoDB object modeling for Node.js</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">PDFMake</td>
                            <td className="colthree">Client/server side PDF printing in pure JavaScript.</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Nodemailer</td>
                            <td className="colthree">A module for Node.js to send emails.</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Bcrypt</td>
                            <td className="colthree">A cross platform file encryption utility.</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">JWT</td>
                            <td className="colthree">A compact URL-safe means of representing claims to be transferred between two parties.</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Validator</td>
                            <td className="colthree">A library of string validators and sanitizers.</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="black-bar">
            </div>
            <div className="footer">
                    Credits: Photo: Taken by Mark Chvetsov, Font: Nauman by Jonathan Hill, Icons: FontAwesome
            </div>
        </div>
    );
  }
}

export default QuickQuote;