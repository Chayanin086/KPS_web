import React from 'react';
import '../assets/css/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <h1 className='footer-subscription-heading'>
          Contact
        </h1>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              KPS AUTOMATION           
            </Link>
          </div>
          <div class='footer-link-items'>
            <h2>ที่อยู่</h2>
            <p>เค.พี.เอส. ออโตเมชั่น    90/1   ม.4 </p>
            <p>ต.ช้างขวา อ.กาญจนดิษฐ์ จ. สุราษฎร์ธานี </p>
            <p>84160</p>
            {/* <a class='op' href='https://www.coe.psu.ac.th/'target="_blank">KPS AUTOMATION © 2022 website by coe.psu.ac.th</a> */}

          </div>
          <div class='footer-link-items'>
            <h2>ช่องทางการติดต่อ</h2>
            <a i class='fas fa-phone-square-alt' >   phone   :      084-6648294</a>
            <a i class = "fab fa-facebook  fa-5x" >     Facebook         :          Arduinoสุราษฎร์ธานี </a>
            <a i class= 'fa fa-envelope'>        email  :   phasitsophon1970@gmail.com</a>
            <a i class = "fab fa-line fa-5x" >     Line         :          084-6648294</a>
                          
          </div>       
        </div>       
      </div>
    </div>
  );
}

export default Footer;