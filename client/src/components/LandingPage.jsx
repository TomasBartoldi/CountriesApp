import React from "react";
import { Link } from 'react-router-dom'
import './LandingPage.css'



const LandingPage = () => {

    return(
        
            <div className="landing-container">

                <h1 className="title">COUNTRIES</h1>
                <Link to='/home'>
                    <button className="landingbutton">Welcome</button>
                </Link>
                
            </div>
        
    )
}

export default LandingPage;