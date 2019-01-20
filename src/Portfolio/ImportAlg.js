import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';

class ImportAlg extends Component {
  render() {
    return (
        <div>
            <div className="black-bar"></div>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        Import Algorithm
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