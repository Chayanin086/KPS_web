import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a
                className={item.cName}
                href={`https://shop.kps.co.th/productList/`} target='_blank'                                
                onClick={() => setClick(false)}
              >                  
                {item.title}                
              </a>

            </li>
          );
        })}
      </ul>      
    </>
  );
}

export default Dropdown;