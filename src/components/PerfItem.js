import React from 'react';
import { Link } from 'react-router-dom';

function PerfItem(props) {
  return (
    <>
      <li className='performance__item'>
        <Link className='performance__item__link' to={props.path}>
          <figure className='performance__item__pic-wrap' data-category={props.label}>
            <img
              className='performance__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='performance__item__info'>
            <h5 className='performance__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default PerfItem;