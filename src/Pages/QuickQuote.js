import React, { Component } from 'react';
import '../App.css';
import pic1 from '../Proj1-QuickQuote/1.png';
import pic2 from '../Proj1-QuickQuote/2.png';
import pic6 from '../Proj1-QuickQuote/6.png';
import pic7 from '../Proj1-QuickQuote/7.png';
import pic8 from '../Proj1-QuickQuote/8.png';
import pic9 from '../Proj1-QuickQuote/9.png';
import pic10 from '../Proj1-QuickQuote/10.jpg';
import pic11 from '../Proj1-QuickQuote/26.png';
import ScrollButton from '../ScrollButton';

class QuickQuote extends Component {

  render() {
    return (
        <div className="background">
            <div className="black-bar"></div>
            <ScrollButton scrollStepInPx="800" delayInMs="0"/>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        QuickQuote Mobile<br /><br/>
                        Github: <a className="github-link" target="_blank" href="https://github.com/schvetsov/QuickQuoteMobile">https://github.com/schvetsov/QuickQuoteMobile</a>
                    </div>
                </div>
                <div className="bio">
                    The QuickQuote is a mobile rating application that I developed while working for MedMal Direct. 
                    The idea is for our sales people to be able to produce quotes for low risk business, and have those quote forms 
                    emailed to their work email, all from their mobile device. It was created with React Native in the front end, and Node.js in the back end.
                    I also used many additional API's and packages, here is the full list:
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
                            <td className="colthree">A framework for building native apps with React</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">React Navigation</td>
                            <td className="colthree">Routing and navigation library</td>
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
                            <td className="colthree">JS run-time environment that executes JS code outside of a browser</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Express</td>
                            <td className="colthree">A web application framework for Node.js, used for routing</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Mlab</td>
                            <td className="colthree">Fully managed cloud database service that hosts MongoDB databases</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Mongoose</td>
                            <td className="colthree">MongoDB object modeling for Node.js</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">PDFMake</td>
                            <td className="colthree">Client/server side PDF printing in pure JavaScript</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Mailgun</td>
                            <td className="colthree">Transactional email API</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Bcrypt</td>
                            <td className="colthree">A cross platform file encryption utility</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">JWT</td>
                            <td className="colthree">A means of representing claims to be transferred between two parties</td>
                        </tr>
                        <tr>
                            <td className="colone"></td>
                            <td className="coltwo">Validator</td>
                            <td className="colthree">A library of string validators and sanitizers</td>
                        </tr>
                        <tr>
                            <td><br /></td>
                        </tr>
                    </table>
                </div>
                <div className="bio">
                    The app is modeled with children and grandchildren components, and the grandchildren lift up the state using 
                    callbacks all the way back out to the parent component. The IndivDocs and IndivAllieds componenents are used to add 
                    entry fields to the form for each insured. They are reusable componenets and can be used a maximum of 3 times each. 
                    The children components, Doctors and Allieds, map and render an array based on a prop passed down from the parent, 
                    which determines the number of grandchildren components to render.
                </div>
                <div>
                    <img className="full-image" src={pic11} />
                </div>
                <div className="sub-container">
                    <div className="section-title">
                        Login Screen
                    </div>
                </div>
                <div className="pictureText">
                    <div className="bio3">
                    When the app is launched, it takes the user to a login screen. If you look closely, you will notice there is 
                    no 'register' link. I created this by design, so the company has full control over who is able to access and use 
                    the app. Once the Login Screen is loaded, a few very important things have happened. The Node.js backend has established a connection with 
                    the MongoDB server, and has imported the relativity tables that are used for the premium calculations. These tables will 
                    be stored in the backend for now. When the user enters his/her login information, the password is hashed and salted with 
                    Bcrypt, and the hash is matched to a document contained in MongoDB. If a match is found, a token is sent back and the main 
                    screen is rendered.
                    </div>
                    <div className="hover-caption">
                        (hover to enlarge)
                        <img className="zoom" src={pic1} />
                    </div>
                </div>
                <div className="sub-container">
                    <div className="section-title">
                        Main Screen
                    </div>
                </div>
                <div className="pictureText">
                    <div className="bio3">
                    This is the main screen. Once the component mounts, a componentDidMount lifecycle method creates a get request to the backend, 
                    and retrieves all the relativity tables that were imported from MongoDB. These tables are then stored in the components' state, 
                    and will be passed down to the children and grandchildren components for premium calculations. This app is basically a dynamic form 
                    that changes and expands as the user makes selections from the dropdown.
                    </div>
                    <div className="hover-caption">
                        (hover to enlarge)
                        <img className="zoom" src={pic2} />
                    </div>
                </div>
                <div className="sub-container">
                    <div className="section-title">
                        Form Expansion
                    </div>
                </div>
                <div className="pictureText">
                    <div className="bio3">
                    For this example we will rate 2 physicians. When the user selects "2" from the "Number of Physicians" dropdown, it triggers a rerender which adds "Physician 1" and "Physician 2" 
                    to the bottom of the form. The user is then able to fill in information about that physician which is needed to calculate 
                    the premium.
                    </div>
                    <div className="hover-caption">
                        (hover to enlarge)
                        <img className="zoom" src={pic7} />
                    </div>
                </div>
                <div className="sub-container">
                    <div className="section-title">
                        Premium Calculation
                    </div>
                </div>
                <div className="pictureText">
                    <div className="bio3">
                    Once the last necessary field is filled in, the Physician's premium will be calculated automatically. No button clicking is 
                    necessary. If a field is changed, the premium will recompute automatically. If a field is selected back to blank, a premium 
                    of 0 will show. The sum of all the physician's premium is calculated instantly as well. I designed this form this way so there 
                    is virtually no possibility of the user making an error.
                    </div>
                    <div className="hover-caption">
                        (hover to enlarge)
                        <img className="zoom" src={pic6} />
                    </div>
                </div>
                <div className="sub-container">
                    <div className="section-title">
                        PDF Generation and Email
                    </div>
                </div>
                <div className="pictureText">
                    <div className="bio3">
                    When all the form inputs are complete, the user will be able to click the "Send Email" button at the bottom to generate the PDF 
                    document and have it sent to their work email. Once the button is clicked, an alert pops up to verify that that is where the email 
                    will be sent to. Once it is clicked, the PDF form is generated with PDFMake, and it is sent with a transporter account I created in Gmail 
                    to the destination email address.
                    </div>
                    <div className="hover-caption">
                        (hover to enlarge)
                        <img className="zoom" src={pic8} />
                    </div>
                </div>
                <div className="sub-container">
                    <div className="section-title">
                        Email in Inbox
                    </div>
                </div>
                <div>
                    <img className="full-image" src={pic9} />
                </div>
                <div className="sub-container">
                    <div className="section-title">
                        The Final Product
                    </div>
                </div>
                <div className="bio3">
                    This is the form that we receive in our email. To be safe, I redacted some sensitive information that was on the form.
                </div>
                <div>
                    <img className="full-image" src={pic10} />
                </div>
            </div>
            <div className="black-bar">
            </div>
        </div>
    );
  }
}

export default QuickQuote;