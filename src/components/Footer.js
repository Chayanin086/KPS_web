import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h1 className='footer-subscription-heading'>
          Contact
        </h1>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              KPS AUTOMATION
            
            </Link>
          </div>
          <div class='footer-link-items'>
            <h2>ที่อยู่</h2>
            <p>เค.พี.เอส. ออโตเมชั่น    90/1   ม.4 
          </p>
            <p>ต.ช้างขวา อ.กาญจนดิษฐ์ จ. สุราษฎร์ธานี    </p>
            <p> 84160</p>

          </div>
          <div class='footer-link-items'>
            <h2>ช่องทางการติดต่อ</h2>
            <p i class='fas fa-phone-square-alt' >   phone   :      084-6648294</p>
            <p i class= 'fa fa-envelope'>        email  :   phasitsophon1970@gmail.com​</p>
            <p i class = "fab fa-line fa-5x" >     Line         :          084-6648294</p>
          
          </div>
        </div>
        {/* <div className="map">
          
        </div> */}

      </div>
      {/* <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              KPS
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>KPS © 2020</small> */}
          {/* <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div> */}
        {/* </div> */}
      {/* // </section> */}
    </div>
  );
}

export default Footer;