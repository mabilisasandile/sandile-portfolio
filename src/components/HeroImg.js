import "./HeroImgStyles.css";
import React from 'react';
import img3 from '../assets/images/img3.jpg';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={img3} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI! I'M SANDILE MABILISA.</p>
        <h1>FULL STACK SOFTWARE DEVELOPER</h1>
        <div>
          <Link to="/project" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>

      </div>
    </div>
  );
}

export default HeroImg;