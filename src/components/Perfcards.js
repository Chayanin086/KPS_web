import React from 'react';
import './Perfcards.css';
import PerfItem from './PerfItem';

function Perfcards() {
  return (
    <div className='perfomance'>
      <h1>ผลงาน</h1>
      <div className='performance__container'>
        <div className='performance__wrapper'>
          <ul className='performance__items'>
            <PerfItem
              src='images/GG7.png'
              text='ผจญภัยแดนสนธยา'
              label='ชื่อผลงาน'
              path='/perfomance'
            />
            <PerfItem
              src='images/GG7.png'
              text='ข้อความคร่าวๆ'
              label='ชื่อผลงาน'
              path='/perfomance'
            />
          </ul>
          <ul className='performance__items'>
            <PerfItem
              src='images/GG7.png'
              text='ข้อความคร่าวๆยาว.................................'
              label='ชื่อผลงาน'
              path='/perfomance'
            />
            <PerfItem
              src='images/GG7.png'
              text='ข้อความคร่าวๆยาว..................................................................'
              label='ชื่อผลงาน'
              path='/perfomance'
            />
          </ul>
          <ul className='performance__items'>
            <PerfItem
              src='images/GG7.png'
              text='ข้อความคร่าวๆยาว..................................................................'
              label='ชื่อผลงาน'
              path='/perfomance'
            />
            <PerfItem
              src='images/GG7.png'
              text='ข้อความคร่าวๆยาว'
              label='ชื่อผลงาน'
              path='/perfomance'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Perfcards;