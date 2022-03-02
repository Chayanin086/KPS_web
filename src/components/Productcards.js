import React from 'react';
import '../App.css';
import CardItem from './CardItem';
import './Productcards.css';

function Productcards() {
  return (
    <div className='product'>
      <h1>PRODUCT</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='SHOP NOW! ฿999'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='SHOP NOW! ฿999'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='SHOP NOW! ฿999'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='SHOP NOW! ฿999'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='SHOP NOW! ฿999'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='SHOP NOW! ฿999'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='SHOP NOW! ฿999'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='SHOP NOW! ฿999'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='SHOP NOW! ฿999'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
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