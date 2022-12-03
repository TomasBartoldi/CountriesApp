import React from 'react'
import SearchBar from "./SearchBar";
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='nav-container'>

       <div>
        <a href="https://linkedin.com/in/tomas-bartoldi-395818242/">
          <FaLinkedin size={50} style={{ color: '#fff', marginRight: '1rem' }} />
        </a>
        
        <a href="https://github.com/TomasBartoldi">
          <FaGithub size={50} style={{ color: '#fff', marginRight: '1rem' }} />
        </a>
       </div>

        <Link to='activities'>
            <button className='create-btn'>Create Activity</button>  
        </Link>

        <h1 className='nav-title'>COUNTRIES</h1>

        <SearchBar />
    </div>
  )
}

export default Navbar


























                                    