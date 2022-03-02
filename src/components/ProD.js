import React from 'react';
import './ProD.css';
import ProDItem from './ProDItem';
function ProD() {
    return (
      <div className='backpro'>
      <h1 >สินค้า</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='Prod__items'>
          <ProDItem
              src='images/img-3.jpg'
              text='SHOP NOW! ฿999'
              label='Mystery'
              path='/services'
            />
            <ProDItem
              src='images/img-4.jpg'
              text='SHOP NOW! ฿999'
              label='Adventure'
              path='/products'
            />
            <ProDItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
            <ProDItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    );
}
export default ProD;