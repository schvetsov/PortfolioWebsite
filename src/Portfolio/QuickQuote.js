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
                            <th className="table-header">Stack</th>
                            <th className="table-header">API/Library</th>
                            <th className="table-header">Description</th>
                        </tr>
                        <tr>
                            <td><br /></td>
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
                            <td className="colthree">JS run-time environment that executes JS code outside of a browser.</td>
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
                            <td className="colthree">A means of representing claims to be transferred between two parties.</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Validator</td>
                            <td className="colthree">A library of string validators and sanitizers.</td>
                        </tr>
                        <tr>
                            <td><br /></td>
                        </tr>
                    </table>
                </div>
                <div className="bio">
                    The user interface of this app begins with the login screen, and renders to a dynamic 
                    form when the user is authenticated. When the user selects certain items from the drop down 
                    lists, the form re renders based on the item selected. For example, when the Practice State of 
                    Florida is selected, the county dropdown renders with the list of counties for Florida. When 
                    the Number of Physicians selected is 2, 2 components with Physician information are re rendered. 
                    Once the user has provided the last necessary input, a premium is able to be calculated and appears 
                    instantly, no 'Calculate' buttons required. To calculate the premiums, relativity tables are used. 
                    For example, Florida has a base rate of 1000 and the specialty Neurosurgeon has a relativity value 
                    of 5. We multiply these values together, and we get 5000 as the premium for a Neurosurgeon praciticing in 
                    Florida. This is of course an extremely simplified example, the real algorithm 
                    is (base rate)*(county)*(specialty)*(limits)*(1-discounts). Once the premium is calculated, the user 
                    can click the button "Send email". A popup emerges saying "send email to (users' email) ?" When the user 
                    click "Yes", all the information from the front end is sent to the back end with a post request, and a PDF 
                    is generated with PDFMake. Once the PDF is generated, it is sent as an attachment to the users' email. 
                    The user has just circumvented the entire underwriting department, and produced a binding quote, all 
                    from their mobile device. Now that is amazing.
                    Database: When the app is loaded, about 20 tables are imported from MongoDB into the backend. These tables 
                    contain all the information that are required to calculate the premium. When the user is authenticated, 
                    a componentDidMount lifecycle method sends a get request to the backend to retrieve all of these tables. 
                    They are then passed down to the grandchildren component where the calculations take place.
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