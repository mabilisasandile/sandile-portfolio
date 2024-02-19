import { Link } from "react-router-dom";
import "./TeamWorkCardStyles.css";
import edutech_app from "../assets/images/edutech_app.png";

import React from 'react';

const TeamWorkCard = () => {
    return (
        <div className="pricing">
            <h2 className="pricing-heading">Team Project</h2>
            <div className="card-container">
                
                <div className="card">
                    <img src={edutech_app} alt="image" />
                    <span className="bar"></span>
                    <h3>- Ezamazwe Edutech -</h3>
                    <p>-This is a comprehensive educational platform designed to facilitate course enrollment and learning experiences for users.
                        Offering a diverse range of courses, the platform accommodates both free and subscription-based content.
                        Free courses are accessible to all users, whether subscribed or unsubscribed, fostering inclusivity and accessibility.
                        Additionally, subscription-based courses provide premium content exclusively to subscribed users,
                        enhancing the value proposition for subscribers.
                        The platform seamlessly integrates subscription management functionalities,
                        enabling users to easily subscribe and gain access to premium course offerings.
                        Overall, Ezamazwe Edutech empowers users to engage in continuous learning while
                        flexible options to suit diverse educational needs and preferences. -</p>
                    <Link to="https://edutech-app-eecfd.web.app/" className="btn">VIEW</Link>
                    <Link to="https://github.com/Loy3/ezamazwe-user-frontend" className="btn">SOURCE</Link>
                </div>

                <div className="card">
                    <h3>- Ezamazwe Edutech -</h3>
                    <span className="bar"></span>
                    <p className="btc">My Role Description:</p>
                    <p>- At mLab CodeTribe Academy, I collaborated within a team to develop Ezamazwe Edutech,
                        an innovative web application in the educational technology sector.
                        My primary responsibility centered around backend development,
                        where I spearheaded the implementation of core logic within the application.
                        This involved ensuring seamless communication between the app, its database,
                        and backend servers to deliver optimal functionality.
                        <br></br>
                        <br></br>
                        Throughout the project, we utilized Trello as our project management tool,
                        leveraging its features to effectively organize tasks, track progress, and maintain project momentum.
                        My contributions to Ezamazwe Edutech were instrumental in realizing its objectives,
                        showcasing my proficiency in backend development and my ability to thrive in a collaborative team environment. -
                    </p>
                    <Link to="/contact" className="btn">READ MORE...</Link>
                </div>

            </div>
        </div>
    );
}

export default TeamWorkCard;