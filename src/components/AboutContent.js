import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react';
import img1 from '../assets/images/img1.jpg'
import img5 from '../assets/images/img5.jpg'
import CV_Dowloader from "./CV_Dowloader";
import SkillCard from "./SkillCard";
import WorkExperienceCard from "./WorkExperienceCard";

const AboutContent = () => {
    return (
        <div className="about">

            <div className="left">
                <h1>Who am I?</h1>
                <p>
                    I am a recent graduate in IT Software Development with a passion for crafting innovative solutions through web and mobile development. With six months of hands-on experience gained during my in-service training, I have honed my skills in both front-end and back-end development, leveraging technologies such as HTML, CSS, JavaScript, React, NodeJS and various frameworks.
                    <br></br>
                    <br></br>
                    My exposure to Agile methodologies, particularly Scrum, has instilled in me a collaborative mindset and a commitment to delivering high-quality results within set deadlines. I thrive in dynamic environments where creativity and problem-solving are valued, and I am eager to contribute my expertise to projects that push the boundaries of what technology can achieve.
                    <br></br>
                    <br></br>
                    As I continue to grow and evolve in this ever-changing field, I am excited about the opportunities to collaborate, learn, and make a meaningful impact. Thank you for visiting my portfolio, and please feel free to explore my projects and reach out to discuss potential collaborations or opportunities.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
                <CV_Dowloader />
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={img5} className="img" alt="image" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={img1} className="img" alt="image" />
                    </div>
                </div>
            </div>

            <SkillCard />

            <WorkExperienceCard />

        </div>
    )
}

export default AboutContent