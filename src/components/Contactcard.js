import React from 'react';
import './Contactcard.css';
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
            <p>เค.พี.เอส. ออโตเมชั่น    90/1   ม.4 
          </p>
            <p>ต.ช้างขวา อ.กาญจนดิษฐ์ จ. สุราษฎร์ธานี    </p>
            <p> 84160</p>

          </div>
          <div class='contact-link-items'>
            <h2>ช่องทางการติดต่อ</h2>
            <p i class='fas fa-phone-square-alt' >   phone   :      084-6648294</p>
            <p i class= 'fa fa-envelope'>        email  :   phasitsophon1970@gmail.com​</p>
            <p i class = "fab fa-line fa-5x" >     Line         :          084-6648294</p>
          
          </div>
        </div>
        
          
      

      </div>

    </div>
  );
}

export default Contactcard;