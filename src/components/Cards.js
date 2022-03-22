import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import {mockupData} from '../datas/pages'

function Cards() {
  return (
    <div className='cards'>
      <h1>ผลงาน</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {mockupData.map((item, key)=>{

          })}
          <div className='grid grid-cols-2 gap-10'>
          {mockupData.slice(0, 4).map((item, key)=>{
              return (
                <CardItem
            src={item.image}
            text={item.except}
            label={item.name}
            path={item.path}

            />
              )
          })}
            {/* <CardItem
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

            /> */}
          </div>
         
          
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