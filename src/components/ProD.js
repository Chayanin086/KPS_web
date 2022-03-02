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
              src='images/relay0003.jpg'
              text='SHOP NOW! ฿999'
              label='Relay'
              path='/services'
            />
            <ProDItem
              src='images/Timer.png'
              text='SHOP NOW! ฿999'
              label='Timer'
              path='/products'
            />
            <ProDItem
              src='images/เกียทดรอบ.jpg'
              text='SHOP NOW! ฿999'
              label='Worm gear'
              path='/sign-up'
            />
            <ProDItem
              src='images/Hydrulic Valves.jpg'
              text='SHOP NOW! ฿999'
              label='Hydrulic Valves'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    );
}
export default ProD;