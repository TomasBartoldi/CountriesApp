import React from 'react'
import './Footer.css'
import { BsLinkedin, BsGithub, BsHandbagFill, BsTelephoneFill } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'

const Footer = () => {
  return (
    <div className='footer-container'>

        <div className="social">
            <div className="title-container">
                <h4 className='title'>SOCIAL</h4>
            </div>
            <div className='social-icons'>
                <div className='icons'>
                    <a href="https://www.linkedin.com/in/tomas-bartoldi-395818242/">
                    <BsLinkedin size={30} color={'white'} />
                    </a>
                </div>
                <div className='icons'>
                    <a href="https://github.com/TomasBartoldi">
                    <BsGithub size={30} color={'white'} />
                    </a>
                </div>

                <div className='icons'>
                    <a href="#">
                    <BsHandbagFill size={30} color={'white'} />
                    </a>
                </div>

            </div>
        </div>

        <div className='social'>
            <div className="title-container">
                <h4 className='title'>CONTACT</h4>
            </div>
            <div className='contact-icons'>    
                    <div className='icons-center'>
                        <div className='tel-icon'>
                           <BsTelephoneFill size={17} color={'white'} />
                        </div> 
                        <div>
                           <p className='tel'>+54 9 11-6888-1990</p>
                        </div>  
                    </div>
                    <div className='icons-center'>
                        <div className='tel-icon'>
                           <GoMail size={17} color={'white'} />
                        </div>
                        <div className='tel'>
                           <p>bartoldit@gmail.com</p>
                        </div>
                    </div>
            </div>

        </div>

    </div>
  )
}

export default Footer