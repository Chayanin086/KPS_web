import React from 'react';
import '../assets/css/perfcards.css';
import PerfItem from './PerfItem';
import {mockupData} from '../datas/pages'

function Perfcards() {
  return (
    <div className='perfomance'>
      <h1>ผลงาน</h1>
      <div className='performance__container'>
        <div className='performance__wrapper grid grid-cols-2 gap-10'>
        {mockupData.map((item, key)=>{
              return (
                <PerfItem
            src={item.image}
            text={item.except}
            label={item.name}
            path={item.path}

            />
              )
          })}
         
        </div>
      </div>
    </div>
  );
}

export default Perfcards;