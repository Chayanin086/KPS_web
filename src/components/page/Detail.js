import React from 'react';
import parse from 'html-react-parser';
import '../../assets/css/detail.css'
import {mockupData} from '../../datas/pages'
function Detail(props) {
  const pageId = props.match.params.id
  const res = mockupData[mockupData.findIndex((page) => page.id==pageId)]
  

    return (
      <div className='mt-10  mb-10'>
         
        <h1   className='text-center text-4xl	 mb-10'> {res.name}</h1>
        
          <div className='detail-image' >
            <img src={res.image}></img>
          
          </div>
          <div className='text-center mt-5'>{parse(res.fullDetail1)}</div>

        

      </div>

      
    );
  }
  export default Detail;