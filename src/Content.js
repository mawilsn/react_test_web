import React from 'react';
import PersonalProfile from './components/personalProfile/personalProfile';
import Education from './components/Education/Education';
import ProfessionalExperience from './components/ProfessionalExperience/ProfessionalExperience';
import Skills from './components/Skills/Skills';
import Interests from './components/Interests/Interests'

import "./Content.css"
function Content(){
    return(
      <div>



        <div className="text">
        <p> </p>


        <section className="resume-section" id="about">
          <h1>ABOUT</h1>
          <PersonalProfile/>
              </section>

        <section className="resume-section" id="experience">
            <div className="spacer"></div>

          <h1>EXPERIENCE</h1>
       <ProfessionalExperience/>
        </section> 

        

        <section className="resume-section" id="education">
          <h1>EDUCATION</h1>
          <Education />
        </section>
  
        
  
        
      
        
        
        <section className="resume-section" id="skills">
          <h1>SKILLS</h1>
            <Skills/>
        </section>

        <section className="resume-section" id="interests">
          <h1>INTERESTS</h1>
        <Interests />
        </section>
        
        </div>
        </div>
    );
}

export default Content;