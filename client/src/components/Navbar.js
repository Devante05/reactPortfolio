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
    return () => {
      // window.removeEventListener('resize', showButton)
    }
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' id="nameHead" onClick={closeMobileMenu}>
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
              <li className= "nav-item" ><a className= "nav-links" href="mailto:williams.devante05@gmail.com">< FaEnvelope /></a>
              </li>
              <li className= "nav-item" ><a className= "nav-links" href="https://github.com/Devante05">< FaGithub /></a>
              </li>
              <li className= "nav-item" ><a className= "nav-links" href="https://www.linkedin.com/in/devante-williams-/">< FaLinkedin /></a>
              </li>
              <li className= "nav-item" ><a className= "nav-links" href="images/DevanteResume1.pdf" download>
              <FaDownload /></a>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;