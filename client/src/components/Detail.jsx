import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/actions";
import './Detail.css'



const Detail = (props) => {
    console.log(props)

    const dispatch = useDispatch();

    const myCountry = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    },[dispatch, props.match.params.id])
    

    return(
        
           <div>
            {
                myCountry.length > 0 
                
                ? <div className="detail-container">
                                   
                    <div className="detail-left">

                       <div className="detail-attributes">
                       <div className="flag">
                       <img className="flag-detail" src={myCountry[0].flag} alt="country flag"/>
                       </div> 
                       <h1 className="detail-name">Name: {myCountry[0].name}</h1>
                       <h2 className="detail-id">ID: {myCountry[0].id}</h2>
                       <h3>Capital: {myCountry[0].capital}</h3>
                       <h3>Subregion: {myCountry[0].subregion}</h3>
                       <h3>Area: {myCountry[0].area}</h3>
                       <h3>Population: {myCountry[0].population}</h3>
                       </div>

                       <div className="button-position">
                       <Link to="/home">
                            <button className="detail-button">Home</button>
                       </Link>  
                       </div>
                       
                    </div> 

                    <div className="detail-right">
                       {myCountry[0].activities.length
                       ? <h3><b>Activities
                       : </b></h3>:""}
                       {myCountry[0].activities?.map(e => 
                       <div>
                       <ul className="card-activities" >
                       <li>Name: {e.name}</li>
                       <li>Dificultad: {e.dificulty}</li>
                       <li>Duration: {e.duration}HS</li>
                       <li>Season: {e.season}</li>
                       </ul>
                       </div>)}
                    </div>

                </div>
                
                : <p> Loading... </p>
                
            }
          </div>   
          
    )

}

export default Detail