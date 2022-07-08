import '../App.css';
import React from 'react';

function Footer(){
    return(
      <div className='footer'>
        <hr></hr>
      <div className='footer-content'>
        <div className='social-media'>
          <img src='/assets/github.png'/>
          <img src='/assets/instagram.png'/>
          <img src='/assets/linkedin.png'/>
        </div>
        <div className='footer-logo'>
          <img src='/assets/logo.png'/>
        </div>
        </div>
        <div className='blur-f'></div>
        <div className='blur-f'></div>
      </div>
    );
  }

  export default Footer;