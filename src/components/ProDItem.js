import React from 'react';
import { Link } from 'react-router-dom';

function ProDItem(props) {
  return (
    <>
      <li className='Prod__item'>
        <Link className='Prod__item__link' to={props.path}>
          
          <figure className='Prod__item__pic-wrap' data-category={props.label}>
            <img
              className='Prod__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='Prod__item__info'>
            <h5 className='Prod__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ProDItem;