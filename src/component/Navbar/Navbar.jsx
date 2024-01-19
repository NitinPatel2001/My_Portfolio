import React from 'react'
import './Navbar.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='NavContent'>
        <img className='navlogo' alt='cat' src='https://www.freeiconspng.com/thumbs/penguin-png/madagascar-penguin-png-1.png'></img>
        <nav className='navitem'>
          <Link alt='Project' to='/'>Home</Link>
          <Link alt='Project' to='/Experience'>Experience</Link>
          <Link alt='Project' to='/Project'>My Work</Link>
          <a alt='Project' href='https://drive.google.com/file/d/1QS-LnUGlG_Si4fuPi-PWWd20mbjQG9HE/view?usp=sharing'>Resume</a>
          {/* <WbSunnyIcon/> */}
        </nav>
      </div>
    </div>
  )
}

export default Navbar