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
                    with sensitive complex formulas. Once ran, the first thing this macro does is scan the 
                    workbook to find out what version it is, there are 4 versions. When that is determined, it then 
                    scans the worksheet to find out what type of worksheet it is, there are 5 versions. This process 
                    can be most accurately portrayed as a decision tree. At each ending node of the tree, there 
                    is a class method. Once called, the method takes care of transporting the data from the source worksheet to 
                    the destination worksheet. It does this in several steps, the first step is to create a collection 
                    with the field names of the data we want to pull in. Then a two dimensional array is created in the exact 
                    shape of the destination. Some of these fields contain formulas that will be overwritten to save time. 
                    Then a loop is used to populate the array with the data. Then the array is "dumped" in the destination 
                    workbook, and everything is working as it should. This macro is the third and final version that I have 
                    created, and it was created for two main reasons, 1. To increase speed of the imports, for large workbooks, 
                    the old version took up to 20-30 seconds, and the new version takes about .1 seconds, a massive imporvement. 2. 
                    The code from the old version was extremely messy and difficult to update, the new code is clean and uses 
                    components.
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