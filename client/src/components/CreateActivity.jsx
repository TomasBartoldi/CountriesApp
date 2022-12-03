import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivities } from "../actions/actions";
import './CreateActivity.css'




const CreateActivity = () => {

    const dispatch = useDispatch()
    const countries = useSelector((state)=>state.countries)
    const history = useHistory()

    const [input, setInput] = useState({
        name:'',
        dificulty:'',
        duration:'',
        season:'',
        countriesName:[]
    })

    const [errors, setErrors] = useState({})
    const [buttonEnabled, setButtonEnabled] = useState(false);

    useEffect(() => {
        dispatch(getCountries())
    },[]);
 
//---------------------------------------------------------------------------------------------------//    

    const validate = (input) => {
        let errors = {};
        if(!input.name)errors.name = "Activity name required!!!"
        //setButtonEnabled(false)
        if(input.name.length <3 ||input.name.length>15 ) errors.name = "Invalid activity name!!!";
        //setButtonEnabled(false)
        if(input.duration <= 0 || input.duration >= 24 )errors.duration = "Please type a duration between 1 and 24 hours!!!"
        //setButtonEnabled(false)
        if(!input.duration) errors.duration = "Duration time required!!!"
        //setButtonEnabled(false)
        if(!input.season) errors.season = "Please select a season!!!"
        //setButtonEnabled(false)
        if(!input.countriesName) errors.countriesName = "Please select a country!!!"
        //setButtonEnabled(false)
        if(!input.dificulty) errors.dificulty = "Please select a difficulty!!!"
        //setButtonEnabled(false)

        if (Object.entries(errors).length === 0){
            setButtonEnabled(true);
        } else {
            setButtonEnabled(false);
        }

        return errors
    }
//----------------------------------------------------------------------------------------------------//
    
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
 
//----------------------------------------------------------------------------------------------------//
    
    const handleCountrySelect = (e) => {
        if (input.countriesName.includes(e.target.value)) 
        return alert("You've already selected that country");
        setInput({
            ...input,
            countriesName:[...input.countriesName, e.target.value]
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

//----------------------------------------------------------------------------------------------------//

    const handleSelect = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

//----------------------------------------------------------------------------------------------------//

    const handleDelete = (e) => {
        setInput({
            ...input,
            countriesName: input.countriesName.filter(el => el !== e)
        })
    }

//----------------------------------------------------------------------------------------------------//

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postActivities(input))
        alert("Activity created")
        setInput({
            name:'',
            dificulty:'',
            duration:'',
            season:'',
            countriesName:[]
        })
        history.push('/home')
    }

//---------------------------------------------------------------------------------------------------//    
  
    return(
        <div className="form-container">

            <div className="form-card">

            <div className="form-title">
            <h1>ADD ACTIVITIES</h1>
            </div>


            <form 
            className="form"
            onSubmit={e=>handleSubmit(e)}>
                <div className="input-activity">
                    <label className="label-activity" >Activity:</label>
                    <input 
                    className="input"
                    type="text"
                    value= {input.name}
                    name="name"
                    onChange={handleChange}
                    />
                    {errors.name&&(
                        <p className="warning">{errors.name}</p>
                    )}
                </div>

                <div className="input-difficulty">
                    <label className="label-dificult">Difficulty:</label>
                    <select className="input" defaultValue={'default'} name="dificulty" onChange={e=>handleSelect(e)}>
                        <option value='default' disabled>Difficulty</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                
                {errors.dificulty&&(
                        <p className="warning">{errors.dificulty}</p>
                    )}
                

                <div className="input-duration">
                    <label className="label-duration">Duration:</label>
                    <input
                    className="input-duracion"
                    type="number"
                    value= {input.duration}
                    name="duration"
                    onChange={handleChange}
                    />
                    {errors.duration&&(
                        <p className="warning">{errors.duration}</p>
                    )}
                </div>

                <div className="input-season">
                    <label className="label-dificult">Season: </label>
                    <select className="input" defaultValue={'default'} name="season" onChange={e=>handleSelect(e)}>
                        <option value='default' disabled>Season</option>
                        <option value="summer">Summer</option>
                        <option value="winter">Winter</option>
                        <option value="autumn">Autumn</option>
                        <option value="spring">Spring</option>
                    </select>
                </div>

                
                {errors.season&&(
                        <p className="warning">{errors.season}</p>
                    )}
                

                <div className="input-countries">
                <select className="countries-input" defaultValue={'default'} name="countriesName" onChange={e=>handleCountrySelect(e)}>
                <option value='default' disabled>Select Country</option>
                    {countries.map(m=>(
                        <option value={m.name}>{m.name}</option>
                    ))}
                
                </select>
                {errors.countriesName&&(
                        <p className="warning">{errors.countriesName}</p>
                    )}
                </div>

                <div className="create-btn-container">
                <button className="create-btn" type='submit' disabled={!buttonEnabled}>Create</button>
                <div className="form-btn-container">
            <Link to="/home"><button className="form-btnhome">Home</button></Link>
            </div>
                </div>
            {
                input.countriesName.map( el =>
                    <div className="form">
                    <p>{el}         
                    <button classname="boton" onClick={()=>handleDelete(el)} >X</button>
                    </p>
                </div>               
            )}
            </form>
  
            </div>
        </div>
    )
}

export default CreateActivity;