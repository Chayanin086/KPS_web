import React from 'react';
import './ProD.css';
import ProDItem from './ProDItem';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Button } from './Button';
=======
>>>>>>> e148fa489eacbf4f527dc46103aaf8fa692e1818

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
              path='/product'
            />
            <ProDItem
              src='images/Timer.png'
              text='SHOP NOW! ฿999'
              label='Timer'
              path='/product'
            />
            <ProDItem
              src='images/เกียทดรอบ.jpg'
              text='SHOP NOW! ฿999'
              label='Worm gear'
              path='/product'
            />
            <ProDItem
              src='images/Hydrulic Valves.jpg'
              text='SHOP NOW! ฿999'
              label='Hydrulic Valves'
              path='/product'
            />

          </ul>
          <li>
          
          <Link
          className='Proo' 
            to='/performance'
          >
            สินค้าเพิ่มเติม
          </Link>
        
        </li>
        </div>
      </div>
    </div>
    );
}
export default ProD;