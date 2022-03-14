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
            text='ระบบตรวจจับการสั่นสะเทือนคอมเพลสเซอร์ คือ ระบบตรวจจับการสั่นสะเทือนคอมเพลสเซอร์....................................'
            label='ระบบตรวจจับการสั่นสะเทือนคอมเพลสเซอร์'
            path='/ระบบตรวจ'

            />
            <CardItem
              src='images/GG7.png'
              text='ข้อความคร่าวๆ'
              label='ชื่อผลงาน'
              path ='/performance'
              target='_top'

            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/GG7.png'
              text='ข้อความคร่าวๆ                    '
              label='ชื่อผลงาน'
              path='/performance'
              target='_top'
            />
            <CardItem
              src='images/GG7.png'
              text='ข้อความคร่าวๆ'
              label='ชื่อผลงาน'
              path='/performance'
              target='_top'
            />
            {/* <CardItem
              src='images/ทดสอบ2.png'
              text='ข้อความคร่าวๆr'
              label='Adrenaline'
              path='/performance'
            /> */}
          
          </ul>
          
        </div>
        <div>
          <Link
            to='/performance'
            className='Percard'
            target='_top'
          >
            ผลงานเพิ่มเติม
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;