import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { BsHammer } from 'react-icons/bs';
import {  
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaDownload
} from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return {
    //   window.removeEventListener('resize', showButton)
    }
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <BsHammer className='navbar-icon' />
              Devante's Fullstack Portfolio
                          </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About Me
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/projects'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              

            <Link
              className='nav-links'  
              to='/'
              target='_blank'
              aria-label='Email'
            >
              <FaEnvelope />
            </Link>
            <Link
              className='nav-links'
              to={
                '//github.com/Devante05'
              }
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </Link>

            <Link
              className='nav-links'
              to={
                '//www.linkedin.com/in/devante-williams-'
              }
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
            <Link
              className='nav-links'
              to= "/images/DevantesResume.pdf"
              target='_blank'
              
              aria-label='Resume'
            >Resume 
              <FaDownload />
            </Link>
          
              
              
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;