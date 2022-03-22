import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);


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
  }, []);

  window.addEventListener('resize', showButton);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' target='_top' className='navbar-logo' onClick={closeMobileMenu}>
            KPS AUTOMATION
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' target='_top' className='nav-links' onClick={closeMobileMenu}>
                หน้าแรก
              </Link>
            </li>
            <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Products'
              className='nav-links'
              onClick={closeMobileMenu}
              target='_top'
            >
              สินค้า     <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
            <li className='nav-item'>
              <Link
                to='/performance'
                target='_top'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ผลงาน
              </Link>
            </li>           
            <li className='nav-item'>
              <Link
                to='/contact'
                target='_top'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ช่องทางการติดต่อ
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>

          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;