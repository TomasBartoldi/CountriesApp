import React from 'react'
import SearchBar from "./SearchBar";
import './Navbar.css'
import { Link } from 'react-router-dom'
import { IoMdAddCircleOutline } from 'react-icons/io'


const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='title-container'>
        <h1 className='nav-title'>COUNTRIES APP</h1>
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



      {/*  <div>
        <a href="https://linkedin.com/in/tomas-bartoldi-395818242/">
          <FaLinkedin size={50} style={{ color: '#fff', marginRight: '1rem' }} />
        </a>
        
        <a href="https://github.com/TomasBartoldi">
          <FaGithub size={50} style={{ color: '#fff', marginRight: '1rem' }} />
        </a>
       </div> */}























                                    