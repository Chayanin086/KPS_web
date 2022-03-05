import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
function Cards() {
  return (
    <div className='cards'>
      <h1>ผลงาน</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            src='images/ผลงาน1.png'
            text='ระบบตรวจจับการสั่นสะเทือนคอมเพลสเซอร์ คือ ระบบตรวจจับการสั่นสะเทือนคอมเพลสเซอร์'
            label='ระบบตรวจจับการสั่นสะเทือนคอมเพลสเซอร์'
            path='/ระบบตรวจ'

            />
            <CardItem
              src='images/GG7.png'
              text='ข้อความคร่าวๆ'
              label='Luxury'
              path ='/performance'

            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/GG7.png'
              text='ข้อความคร่าวๆ'
              label='Mystery'
              path='/performance'
            />
            <CardItem
              src='images/GG7.png'
              text='ข้อความคร่าวๆ'
              label='Adventure'
              path='/performance'
            />
            {/* <CardItem
              src='images/ทดสอบ2.png'
              text='ข้อความคร่าวๆr'
              label='Adrenaline'
              path='/performance'
            /> */}
          
          </ul>
          
        </div>
        <li>
            <Link
               to='/performance'
               className='Percard'
              >
              ผลงานเพิ่มเติม
            </Link>
        </li>
      </div>
    </div>
  );
}

export default Cards;