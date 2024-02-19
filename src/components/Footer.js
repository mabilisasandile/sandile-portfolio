import "./FooterStyles.css";
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="phone">
            <h4>
              <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              Pretoria, Gauteng, South Africa.
            </h4>
          </div>

          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              +2773 490 8931
            </h4>
          </div>

          <div className="phone">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              mabilisasandile@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>This is me Sandile Mabilisa. IT (Software Developer) Graduate with a
            year Full Stack Development experience.
            I enjoy discussing, designing and building new projects.
          </p>
          <div className="social">
            <Link to="https://www.facebook.com/sandile22">
              <FaFacebook size={30} className="social-icon" />
            </Link>

            <Link to="https://twitter.com/SandileMab23469">
              <FaTwitter size={30} className="social-icon" />
            </Link>

            <Link to="https://www.linkedin.com/in/sandile-mabilisa-3ab591230">
              <FaLinkedin size={30} className="social-icon" />
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;