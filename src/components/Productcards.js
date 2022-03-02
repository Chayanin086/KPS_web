import React from 'react';
import ProductItem from './ProductItem';
import './Productcards.css';

function Productcards() {
  return (
    <div className='product'>
      <h1>PRODUCT</h1>
      <div className='product__container'>
        <div className='product__wrapper'>
          <ul className='product__items'>
            <ProductItem
              src='images/relay0003.jpg'
              text='SHOP NOW! ฿999'
              label='Relay'
              path='/product'
            />
            <ProductItem
              src='images/Timer.png'
              text='SHOP NOW! ฿999'
              label='Timer'
              path='/product'
            />
            <ProductItem
              src='images/เกียทดรอบ.jpg'
              text='SHOP NOW! ฿999'
              label='Worm gear'
              path='/product'
            />
            <ProductItem
              src='images/Hydrulic Valves.jpg'
              text='SHOP NOW! ฿999'
              label='Hydrulic Valves'
              path='/product'
            />
          </ul>
          <ul className='product__items'>
            <ProductItem
              src='images/Hydrulic Valves.jpg'
              text='SHOP NOW! ฿999'
              label='Hydrulic Valves'
              path='/product'
            />
            <ProductItem
              src='images/เกียทดรอบ.jpg'
              text='SHOP NOW! ฿999'
              label='Worm gear'
              path='/product'
            />
            <ProductItem
              src='images/Timer.png'
              text='SHOP NOW! ฿999'
              label='Timer'
              path='/product'
            />
            <ProductItem
              src='images/relay0003.jpg'
              text='SHOP NOW! ฿999'
              label='Relay'
              path='/product'
            />
          </ul>
          <ul className='product__items'>
            <ProductItem
              src='images/relay0003.jpg'
              text='SHOP NOW! ฿999'
              label='Relay'
              path='/product'
            />
            <ProductItem
              src='images/Timer.png'
              text='SHOP NOW! ฿999'
              label='Timer'
              path='/product'
            />
            <ProductItem
              src='images/เกียทดรอบ.jpg'
              text='SHOP NOW! ฿999'
              label='Worm gear'
              path='/product'
            />
            <ProductItem
              src='images/Hydrulic Valves.jpg'
              text='SHOP NOW! ฿999'
              label='Hydrulic Valves'
              path='/product'
            />
          </ul>
          <ul className='product__items'>
            <ProductItem
              src='images/Hydrulic Valves.jpg'
              text='SHOP NOW! ฿999'
              label='Hydrulic Valves'
              path='/product'
            />
            <ProductItem
              src='images/เกียทดรอบ.jpg'
              text='SHOP NOW! ฿999'
              label='Worm gear'
              path='/product'
            />
            <ProductItem
              src='images/Timer.png'
              text='SHOP NOW! ฿999'
              label='Timer'
              path='/product'
            />
            <ProductItem
              src='images/relay0003.jpg'
              text='SHOP NOW! ฿999'
              label='Relay'
              path='/product'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
  
export default Productcards;