import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import ScrollButton from '../ScrollButton';
import pic1 from '../IAScreenShots/1.png';
import pic2 from '../IAScreenShots/wb1.png';
import pic3 from '../IAScreenShots/wb2.png';
import pic4 from '../IAScreenShots/wb3.png';
import pic5 from '../IAScreenShots/wb4.png';
import pic6 from '../IAScreenShots/4.png';
import pic7 from '../IAScreenShots/11.png';
import pic8 from '../IAScreenShots/10.png';
import pic9 from '../IAScreenShots/12.png';

class ImportAlg extends Component {

  render() {
    return (
        <div className="background">
            <div className="black-bar"></div>
            <ScrollButton scrollStepInPx="800" delayInMs="0"/>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        Import Algorithm <br/><br/>
                        Github: <a className="github-link" target="_blank" href="https://github.com/schvetsov/ImportAlgorithm">https://github.com/schvetsov/ImportAlgorithm</a>
                    </div>
                </div>
                <div className="bio">
                    The Import Algorithm is a macro I wrote in Microsoft's VBA for Excel. 
                    The purpose of this macro is to transport information from one rating workbook to 
                    another. The problem that it solves is there being 4 different versions of the workbook, filled 
                    with sensitive complex formulas.
                </div>
                <div className="sub-container">
                    <div className="section-title">
                        How It Works
                    </div>
                </div>
                <div className="bio">
                    Once ran, the first thing this macro does is scan the 
                    workbook to find out what version it is, there are 4 versions. When that is determined, it then 
                    scans the worksheet to find out what type of worksheet it is, there are 5 versions. This process 
                    can be most accurately portrayed as a decision tree. 
                </div>
                <div className="bio">    
                    At each ending node of the tree, there 
                    is a class method. Once called, the method takes care of transporting the data from the source worksheet to 
                    the destination worksheet.
                </div>
                <img className="full-image" src={pic1} />
                <div className="bio">    
                    Workbook 1
                </div>
                <img className="full-image" src={pic2} />
                <div className="bio">    
                    Workbook 2
                </div>
                <img className="full-image" src={pic3} />
                <div className="bio">    
                    Workbook 3
                </div>
                <img className="full-image" src={pic4} />
                <div className="bio">    
                    Workbook 4
                </div>
                <img className="full-image" src={pic5} />
                <div className="bio">    
                    For the example, we are going to import workbook 1 into workbook 4. First step is to click 
                    the button "Import Rating Workbook" in a fresh new workbook4. This will be our destination.
                </div>
                <img className="full-image" src={pic6} />
                <div className="bio">    
                    From the following dropdown, select the workbook 1 that you wish to import, in our case this is 
                    "2016_03_11_Family_Care_Partners_of_Northeast_Florida"
                </div>
                <img className="full-image" src={pic7} />
                <div className="bio">    
                    The blank workbook will populate in a fraction of a second.
                </div>
                <img className="full-image" src={pic8} />
                <div className="bio">    
                    As you can see, we saved a lot of time if you compare how long it would have taken us to manually 
                    enter in all the values.
                </div>
                <img className="full-image" src={pic9} />
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

export default ImportAlg;