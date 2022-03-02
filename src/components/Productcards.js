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
              src='images/img-3.jpg'
              text='SHOP NOW! ฿999'
              label='Mystery'
              path='/product'
            />
            <ProductItem
              src='images/img-4.jpg'
              text='SHOP NOW! ฿999'
              label='Adventure'
              path='/product'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/product'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/product'
            />
          </ul>
          <ul className='product__items'>
            <ProductItem
              src='images/img-3.jpg'
              text='SHOP NOW! ฿999'
              label='Mystery'
              path='/product'
            />
            <ProductItem
              src='images/img-4.jpg'
              text='SHOP NOW! ฿999'
              label='Adventure'
              path='/product'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/product'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/product'
            />
          </ul>
          <ul className='product__items'>
            <ProductItem
              src='images/img-3.jpg'
              text='SHOP NOW! ฿999'
              label='Mystery'
              path='/product'
            />
            <ProductItem
              src='images/img-4.jpg'
              text='SHOP NOW! ฿999'
              label='Adventure'
              path='/product'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/product'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/product'
            />
          </ul>
          <ul className='product__items'>
            <ProductItem
              src='images/img-3.jpg'
              text='SHOP NOW! ฿999'
              label='Mystery'
              path='/product'
            />
            <ProductItem
              src='images/img-4.jpg'
              text='SHOP NOW! ฿999'
              label='Adventure'
              path='/product'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/product'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/product'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
  
export default Productcards;