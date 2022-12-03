import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesByName } from '../actions/actions';


const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleInputChange = (e) =>{
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getCountriesByName(name)) //va a actualizar el estado local cuando el usuario tipee
        setName('')
    }

  return (
    <div>
        
        <input className='search-input'
         type='text'
         placeholder='Search country'
         value={name}
         onChange={e=>handleInputChange(e)}
        />

        <button className='search-button'
         type='submit' 
         onClick={e=>handleSubmit(e)}>
            Search
         </button>

    </div>
  )
}

export default SearchBar;