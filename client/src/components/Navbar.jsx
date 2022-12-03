import React from 'react'
import SearchBar from "./SearchBar";
import './Navbar.css'
import { Link } from 'react-router-dom'
import { IoMdAddCircleOutline } from 'react-icons/io'


const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='title-container'>
        <Link to='/home'>
        <h1 className='nav-title'>COUNTRIES APP</h1>
        </Link>
      </div>

        <SearchBar />


      <div className='create-container'>
        <Link to='activities'>
            <button className='create-btn-act'>Add Activity <IoMdAddCircleOutline size={30} /> </button>  
        </Link>
      </div>


    </div>
  )
}

export default Navbar


























                                    