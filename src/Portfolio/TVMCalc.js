import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';

class TVMCalc extends Component {
  render() {
    return (
        <div>
            <div className="black-bar"></div>
            <div className="main-container" id="scroll-down">
                <div className="sub-container">
                    <div className="section-title">
                        Time Value of Money Calculator
                    </div>
                </div>
                <div className="bio">
                    This is a program I wrote in Java. It asks a series of questions in 
                    the terminal, and the user answers. It takes a starter loan, asks the type of 
                    interest and for how long do you want to take the loan out for, and calculates the loan.
                </div>
                <div className="sub-container">
                    <div className="code-box">
                    <pre>
                        <code>
import java.util.Scanner;       //import scanner<br />
<br />
<span>{'public class Calculator{        //define class'}</span>
<br />
<span>{'    public static void main(String[] args){     //define main method'}</span>
<br />
Scanner myScanner = new Scanner(System.in);<br />
double initialInvestment;<br />
String investPeriodically="a";<br />
double periodicPayments=0;<br />
String frequencyOfPayments="a";<br />
String typeOfInterest="a";<br />
double APR;<br />
double numberOfYears;<br />
String yes="a";<br />
String no="a";<br />
String simple="a";<br />
String compound="a";<br />
String continuous="a";<br />
String daily="a";<br />
String monthly="a";<br />
String semiannually="a";<br />
String annually="a";<br />

<span>{'try{'}</span>
System.out.println("Welcome to the TimeValueofMoney Calculator!");				//print out welcome message<br />
System.out.println("How much is your initial investment?");					//ask user for amount of initial investment<br />

initialInvestment = myScanner.nextDouble();

System.out.println("Do you plan to invest periodically? Enter yes or no:");		//ask user if they plan to invest periodically<br />

investPeriodically = myScanner.next();


<span>{'if(investPeriodically.equals("yes")){'}</span>


System.out.println("How big are your periodic payments?");				//if yes ask how much<br />

periodicPayments = myScanner.nextDouble();


System.out.println("How often will you be investing? daily, monthly, semiannually, or annually");	//if yes ask how often (daily, monthly, yearly, bi-yearly)<br />

frequencyOfPayments = myScanner.next();<br />

<span>{'}'}</span>

System.out.println("What type of interest is used? simple, compound, or continuous");		//ask user what type of interest is used (simple, compound, continuous)<br />

typeOfInterest = myScanner.next();<br />

System.out.println("Please enter the nominal interest rate:");					//ask user what annual rate of return to use<br />
APR = myScanner.nextDouble();<br />

System.out.println("For how many years will you hold this investment?");			//ask user for how many years to hold this investment (n)<br />
numberOfYears = myScanner.nextDouble();<br />

double result=doCalc(initialInvestment, investPeriodically, periodicPayments, frequencyOfPayments, typeOfInterest, APR, numberOfYears, yes, no, simple, compound, continuous, daily, monthly, semiannually, annually);		//call calculation method<br />

System.out.println("Your future value is: "+result);	//report result to user<br />

<span>{'}catch(Exception e){'}</span>


System.out.println("Error while reading file line by line" + e.getMessage());<br />


<span>{'}	'}</span>			//end of try/catch

<span>{'}	'}</span>				//end main method

<span>{'public static double doCalc(double initialInvestment, String investPeriodically, double periodicPayments, String frequencyOfPayments, String typeOfInterest, double APR, double numberOfYears, String yes, String no, String simple, String compound, String continuous, String daily, String monthly, String semiannually, String annually){'}</span> //definecalculationmethod

double result=0;<br />
double sum=0;<br />
double i=0;<br />
double n=0;<br />
double d=0;<br />

<span>{'if(typeOfInterest.equals("simple")){'}</span>

<span>{'if(investPeriodically.equals("no")){'}</span>

result = (initialInvestment*(1+(0.01)*APR*numberOfYears));<br />

<span>{'}else{'}</span>
double initial =  (initialInvestment*(1+(0.01)*APR*numberOfYears));<br />

<span>{'while(numberOfYears>0){'}</span>

double payment = periodicPayments*(1+(0.01)*APR*(numberOfYears-1));<br />
sum = sum + payment;<br />
numberOfYears--;<br />
<span>{'}'}</span>
result = initial + sum;<br />
<span>{'}'}</span>
<span>{'}'}</span>

<span>{'if(typeOfInterest.equals("compound")){'}</span>

<span>{'if(frequencyOfPayments.equals("daily")){'}</span>
i = APR/365.0;<br />
<span>{'}else if(frequencyOfPayments.equals("monthly")){'}</span>
i = APR/12.0;<br />
<span>{'}else if(frequencyOfPayments.equals("semiannually")){'}</span>
i = APR/2.0;<br />
<span>{'}else{'}</span>
i = APR;<br />
<span>{'}'}</span>

<span>{'if(frequencyOfPayments.equals("daily")){'}</span>
n = numberOfYears/365.0;<br />
<span>{'}else if(frequencyOfPayments.equals("monthly")){'}</span>
n = numberOfYears/12.0;<br />
<span>{'}else if(frequencyOfPayments.equals("semiannually")){'}</span>
n = numberOfYears/2.0;<br />
<span>{'}else{'}</span>
n = numberOfYears;<br />
<span>{'}'}</span>

<span>{'if(investPeriodically.equals("no")){'}</span>

result = (initialInvestment*Math.pow((1+(0.01)*i),n));<br />

<span>{'}else{'}</span>
result = periodicPayments*(Math.pow((1+(0.01)*i),n)-1)/((0.01)*i) + (initialInvestment*Math.pow((1+(0.01)*i),n));<br />
<span>{'}'}</span>
<span>{'}'}</span>

<span>{'if(typeOfInterest.equals("continuous")){'}</span>

<span>{'if(frequencyOfPayments.equals("daily")){'}</span>
i = APR/365.0;<br />
<span>{'}else if(frequencyOfPayments.equals("monthly")){'}</span>
i = APR/12.0;<br />
<span>{'}else if(frequencyOfPayments.equals("semiannually")){'}</span>
i = APR/2.0;<br />
<span>{'}else{'}</span>
i = APR;<br />
}

d = Math.log(1+(0.01)*i);<br />
n = numberOfYears;<br />

<span>{'if(investPeriodically.equals("no")){'}</span>

result = (initialInvestment*(Math.exp(n*d)));<br />
<span>{'}else{'}</span>
result = (periodicPayments*((Math.exp(n*d)-1)/d) + (initialInvestment*(Math.exp(n*d))));<br />
<span>{'}'}</span>
<span>{'}'}</span>

return result;<br />
<span>{'}'}</span>
<span>{'}'}</span>
                        </code>
                    </pre>
                    </div>
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

export default TVMCalc;