import React from 'react';
import './Perfcards.css';
import PerfItem from './PerfItem';

function Perfcards() {
  return (
    <div className='perfomance'>
      <h1>PERFORMANCE</h1>
      <div className='performance__container'>
        <div className='performance__wrapper'>
          <ul className='performance__items'>
            <PerfItem
              src='images/ทดสอบ2.png'
              text='ผจญภัยแดนสนธยา'
              label='น้ำตกชื่นใจ'
              path='/perfomance'
            />
            <PerfItem
              src='images/ทดสอบ2.png'
              text='ข้อความคร่าวๆ'
              label='Luxury'
              path='/perfomance'
            />
          </ul>
          <ul className='performance__items'>
            <PerfItem
              src='images/ทดสอบ.jpg'
              text='ข้ข้อความคร่าวๆยาวววววววววววววววววววววววววววววววววววว'
              label='Mystery'
              path='/perfomance'
            />
            <PerfItem
              src='images/ทดสอบ.jpg'
              text='ข้อความคร่าวๆยาวววววววววววววววววววววววววววววววววววว'
              label='Adventure'
              path='/perfomance'
            />
          </ul>
          <ul className='performance__items'>
            <PerfItem
              src='images/ทดสอบ2.png'
              text='ข้อความคร่าวๆยาวววววววววววววววววววววววววววววววววววว'
              label='Mystery'
              path='/perfomance'
            />
            <PerfItem
              src='images/ทดสอบ2.png'
              text='ข้อความคร่าวๆยาวววววววววววววววววววววววววววววววววววว'
              label='Adrenaline'
              path='/perfomance'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Perfcards;