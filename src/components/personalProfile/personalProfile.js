import React from "react";
// import ReactDom from "react-dom"
import "./PersonalProfile.css"
import { SocialIcon } from 'react-social-icons';

function personalProfile(){

    return(
<div>
        <h1><span className ="lastname">Wilson</span> <span className="firstname">Mark</span></h1>
        <p>
            A graduate from the University of Iowa Master of Business Analytics and full-time Associate Operations Analyst at
Pearson Education. Works directly with internal customers in delivering data and constructing reports to make
informed decisions. Spearheads the construction of two internal reporting systems. Uses multiple languages for
work, usually data programming with Python. Programming in Python for four years in Jupyter Notebook and VS
Code. Automates workflows to increase the productivity in completing tasks. Scrapes data with selenium to build
datasets. The Master’s degree required a knowledge of basic machine learning algorithms and working with

        </p>
        <div className="social-icons">
        <div className="social-icon">
       <SocialIcon url="https://www.linkedin.com/in/mark-wilson-098212a9/" />
       </div>
       <div className="social-icon">
       <SocialIcon url="https://github.com/mawilsn" />
       </div>
                        
                    </div>
        </div>
    );
}

export default personalProfile;