import React, { Component } from 'react';
import '../App.css';
import pic1 from '../Proj4-TVMCalc/19.png';
import pic2 from '../Proj4-TVMCalc/20.png';
import pic3 from '../Proj4-TVMCalc/21.png';
import pic4 from '../Proj4-TVMCalc/22.png';
import pic5 from '../Proj4-TVMCalc/23.png';
import pic6 from '../Proj4-TVMCalc/24.png';
import pic7 from '../Proj4-TVMCalc/25.png';
import java from '../Proj4-TVMCalc/java.png';
import ScrollButton from '../ScrollButton';

class TVMCalc extends Component {

  render() {
    return (
        <div className="background">
            <div className="black-bar"></div>
            <ScrollButton scrollStepInPx="800" delayInMs="0"/>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        Time Value of Money Calculator<br/><br/>
                        Github: <a className="github-link" target="_blank" href="https://github.com/schvetsov/tvm-calc">https://github.com/schvetsov/tvm-calc</a>
                    </div>
                </div>
                <div className="pictureText">
                    <img id="headshot" src={java}/>
                    <div className="bio2">
                    This is a financial calculator I wrote in Java. It is ran in the terminal, and asks the 
                    user a series of questions pertaining to a potential investment, and calculates the future 
                    value of that investment based on the input.
                    </div>
                </div>
                <div className="sub-container">
                    <div className="section-title">
                        How It Works
                    </div>
                </div>
                <img className="full-image" src={pic1} />
                <div className="bio">
                    When compiled and ran in the terminal, a welcome message will appear and then it will ask you 
                    for the initial investment. For this example we'll do 1000.
                </div>
                <img className="full-image" src={pic2} />
                <div className="bio">
                    Next it asks if you want to make additional payments into the account. These payments can be 
                    daily, monthly, semi-annual, or annual. For the simplicity of this example, we will choose "no".
                </div>
                <img className="full-image" src={pic3} />
                <div className="bio">
                    Then it asks what type of interest rate to invest with, the options are simple, compound, or continuous. 
                    We will choose "compound".
                </div>
                <img className="full-image" src={pic4} />
                <div className="bio">
                    Choose the interest rate. We will choose 10%
                </div>
                <img className="full-image" src={pic5} />
                <div className="bio">
                    The last question is for the duration of the loan, we will choose 10 years.
                </div>
                <img className="full-image" src={pic6} />
                <div className="bio">
                    The future value of this loan is calculated, and printed into the terminal.
                </div>
                <div className="sub-container">
                    <div className="section-title">
                        The Formula
                    </div>
                </div>
                <div className="bio">
                    The following formula is the one that was used to make this calculation. It is called the compound interest 
                    formula.
                    If we plug all the input values into this formula, we will have 1000*(1+(.1/1))^10(1) which is equal to 
                    2593.74246... which is our answer.
                </div>
                <img className="full-image" src={pic7} />
            </div>
            <div className="black-bar">
            </div>
        </div>
    );
  }
}

export default TVMCalc;