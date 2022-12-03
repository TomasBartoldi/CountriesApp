import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesByName } from '../actions/actions';
import { FaSearch } from 'react-icons/fa'


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
    <div className='search-container'>
        <div className='input-container'>
        <input className='search-input'
         type='text'
         placeholder='Search country'
         value={name}
         onChange={e=>handleInputChange(e)}
        />
        </div>
      <div className='search-button-container'>
        <button className='search-button'
         type='submit' 
         onClick={e=>handleSubmit(e)}>
            <FaSearch color={'black'} size={20} className='search-icon' />
         </button>
      </div>


    </div>
  )
}

export default SearchBar;