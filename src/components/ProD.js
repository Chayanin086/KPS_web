import React from 'react';
import '../assets/css/proD.css';
import ProDItem from './ProDItem';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import _, { each } from 'lodash'
import ProductItem from './ProductItem';
function ProD({productData}) {

const productArray = _.take(productData?.rows,4);
// const productArray = _.take(_.shuffle(productData?.rows),4);

    return (
      <div className='backpro'>
      <h1 >สินค้า</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
            <ul className='Prod__items'>
            {_.map(productArray ,(eachProduct)=>(
               <ProductItem
               src={eachProduct?.images?.[0]?.url}
               label={eachProduct?.name}
               text={eachProduct?.price} //ราคา
               text1={eachProduct?.inventory}
               path={`/${eachProduct?.id}`}
             />
            ))}
            </ul>

          <Link
          className='Proo' 
            to='/products'
            target='_top'
          >
            สินค้าเพิ่มเติม
          </Link>
        
        
        </div>
      </div>
    </div>
    );
}
export default ProD;