import React from 'react';
import '../App.css';
import ProductItem from './ProductItem';
import './Productcards.css';

function Productcards() {
  return (
    <div className='product'>
      <h1>PRODUCT</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ProductItem
              src='images/img-3.jpg'
              text='SHOP NOW! ฿999'
              label='Mystery'
              path='/services'
            />
            <ProductItem
              src='images/img-4.jpg'
              text='SHOP NOW! ฿999'
              label='Adventure'
              path='/products'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <ProductItem
              src='images/img-3.jpg'
              text='SHOP NOW! ฿999'
              label='Mystery'
              path='/services'
            />
            <ProductItem
              src='images/img-4.jpg'
              text='SHOP NOW! ฿999'
              label='Adventure'
              path='/products'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <ProductItem
              src='images/img-3.jpg'
              text='SHOP NOW! ฿999'
              label='Mystery'
              path='/services'
            />
            <ProductItem
              src='images/img-4.jpg'
              text='SHOP NOW! ฿999'
              label='Adventure'
              path='/products'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <ProductItem
              src='images/img-3.jpg'
              text='SHOP NOW! ฿999'
              label='Mystery'
              path='/services'
            />
            <ProductItem
              src='images/img-4.jpg'
              text='SHOP NOW! ฿999'
              label='Adventure'
              path='/products'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
            <ProductItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
  

export default Productcards;