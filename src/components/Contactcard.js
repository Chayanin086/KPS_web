import React from 'react';
import '../assets/css/contactcard.css';
import { Link } from 'react-router-dom';

function Contactcard() {
  return (
    <div className='contact-container'>
      <section className='contact-subscription'>
        <h1 className='contact-subscription-heading'>   
        </h1>
      </section>
      <div class='contact-links'>
        <div className='contact-link-wrapper'>
        <div class='contact-logo'>
            <Link to='/' className='contact-logo'>
              KPS AUTOMATION
            
            </Link>
            </div>
              <div class='contact-link-items'>
                <h2>ที่อยู่</h2>
                <p>เค.พี.เอส. ออโตเมชั่น    90/1   ม.4 </p>
                <p>ต.ช้างขวา อ.กาญจนดิษฐ์ จ. สุราษฎร์ธานี </p>
                <p>84160</p>
                {/* <a class='op' href='https://www.coe.psu.ac.th/'>KPS AUTOMATION © 2022 is operated by coe.psu.ac.th</a> */}

              </div>
              <div class='contact-link-items'>
                <h2>ช่องทางการติดต่อ</h2>
                <a i class='fas fa-phone-square-alt' >   phone   :      084-6648294</a>
                <a i class = "fab fa-facebook  fa-5x"  href="https://www.facebook.com/pages/category/School/Arduino%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5-1883435041709154/" target ='_blank'>     Facebook         :          Arduinoสุราษฎร์ธานี </a>
                <a i class= 'fa fa-envelope'>        email  :   phasitsophon1970@gmail.com</a>
                <a i class = "fab fa-line fa-5x" >     Line         :          084-6648294</a>             
          </div>  
        </div>                  
      </div>
    </div>
  );
}

export default Contactcard;