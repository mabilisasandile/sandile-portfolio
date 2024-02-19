import { Link } from "react-router-dom";
import "./WorkExperienceCardStyles.css";

import React from 'react';


const WorkExperienceCard = () => {
    return (
        <div className="experience">
            <h2 className="experience-heading">Work Experience</h2>
            <div className="card-container">
                <div className="card">
                    <h3>- ICT Industry -</h3>
                    <span className="bar"></span>
                    <p><b>Company name: </b>mLab Codetribe Academy</p>
                    <p><b>Position: </b> Web & Mobile Developer Trainee</p>
                    <p><b>Duties: </b> Developing Web & Mobile Apps</p>
                    <p><b>Duration: </b> 6 Months</p>
                    <p><b>Reason for leaving:</b> Contract ended</p>
                </div>

                <div className="card">
                <h3>- Educational Industry -</h3>
                    <span className="bar"></span>
                    <p><b>Company name: </b>Tshwane University of Technology</p>
                    <p><b>Position: </b> Student Assistant</p>
                    <p><b>Duties: </b> Assist students seeking help with computers, printing jobs and academics</p>
                    <p><b>Duration: </b> 1 Year</p>
                    <p><b>Reason for leaving:</b> Contract ended</p>
                </div>

                <div className="card">
                    <h3>- Retail Industry -</h3>
                    <span className="bar"></span>
                    <p><b>Company name: </b>Mr Price Group</p>
                    <p><b>Position: </b> Credit & Cellular Associate</p>
                    <p><b>Duties: </b> Sell credit and cellular products to instore customers</p>
                    <p><b>Duration: </b> 5 Years</p>
                    <p><b>Reason for leaving:</b> Resigned</p>
                </div>

            </div>
        </div>
    );
}

export default WorkExperienceCard;