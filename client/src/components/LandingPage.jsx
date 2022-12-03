import React from "react";
import { Link } from 'react-router-dom'
import './LandingPage.css'



const LandingPage = () => {

    return(
        <>
            <div className="landing-container">
               <div className="title-gif-container">
                <div className="world-gif">
                    <img src={'https://www.losandes.com.ar/resizer/snhNgWUAGNwrK-XzOGcTK1VMzq4=/980x640/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/UVUHFPBVTVHSTIBLIYVBPRFZKA.gif'} alt="img not found" />
                </div>
                <div className="title-container">
                    <h1 className="title">COUNTRIES APP</h1>
                </div>
               </div>
               <div className="bot-row-container">
                <div className="landingbutton-container">
                <Link to='/home'>
                    <button className="landingbutton">WELCOME</button>
                </Link>
                </div>
                <div className="second-img-container">
                <img className="bot-img" src={'http://1.bp.blogspot.com/-9wRkIB5Oc8U/UA6TIkjJXMI/AAAAAAAAAjU/p353oEWSS4Q/s1600/Tierra,+Luna+y+Sol.gif'} alt="img not found" />
                </div>
               </div>
                
            </div>
        </>   
    )
}

export default LandingPage;