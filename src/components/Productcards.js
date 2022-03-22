import React from 'react';
import ProductItem from './ProductItem';
import './Productcards.css';
import _, { each } from 'lodash'

// import Button from '@mui/material/Button';
// import { useState } from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle'
// import { Box } from '@mui/system';
// import Counter from './Counter';

function Productcards({productData}) {

  // const open = () => {
  //   window.location.href =` https://shop.kps.eonlineshop.net/product/${props.id._id}`
//  }
  return (
    <div className='product'>
      <h1>สินค้า</h1>
      <div className='product__container'>
        <div className='product__wrapper'>
                   
          <ul className='product__items'>
            {_.map(productData?.rows,(eachProduct)=>(
               <ProductItem
               src={eachProduct?.images?.[0]?.url}
               label={eachProduct?.name}
               text={eachProduct?.price} //ราคา
               text1={eachProduct?.inventory}
               path={`/${eachProduct?.id}`}
             />
            ))}


            {/* <ProductItem
              src='images/relay0003.jpg'
              text='ชื่อสินค้า:sfsdfsdfs
              ราคา: 10'
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
            /> */}
            {/* <ProductItem
              src='images/Hydrulic Valves.jpg'
              text='SHOP NOW! ฿999'
              label='Hydrulic Valves'
              path='/product'
            /> */}
          </ul>
          
          {/* <ul className='product__items'>
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
          </ul> */}
          {/* <ul className='product__items'>
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
          </ul> */}
          {/* <ul className='product__items'>
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
          </ul> */}
          <div className='front'>
          <a   href='https://shop.kps.co.th/productList' target="_blank">
            
            สั่งซื้อสินค้า
            คลิกที่นี่ 

          </a>
          </div>
         
          
        </div>
      </div>
    </div>
  );
  
}
  
export default Productcards;