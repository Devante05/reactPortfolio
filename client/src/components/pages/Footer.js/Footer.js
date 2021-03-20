import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { BsHammer } from 'react-icons/bs';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className='input-areas'>

        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/'>Contact Info</Link>
            <Link to='/'>Message</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={'/'}>LinkedIn</Link>
            <Link to='/'>Github</Link>
            <Link to='/'>Email</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <BsHammer className='navbar-icon' />
              Devante's Fullstack Portfolio
            </Link>
          </div>
          <small className='website-rights'>DevDev © 2020</small>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;