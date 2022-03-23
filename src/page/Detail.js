import React  from 'react';
import parse from 'html-react-parser';
import '../assets/css/detail.css'
import {mockupData} from '../datas/pages'

const Detail = (props) => {
  const pageId = props.match.params.id
  const res = mockupData[mockupData.findIndex((page) => page.id===pageId)] 
  
  
  return (
      <>
      <div className='mt-10  mb-10'>
        <h1   className='text-center  lg:text-4xl md:text-4xl		sm:text-xl  mb-10 font-sans sm:text-center ' > {res.name}</h1>

        <div className='text-justify mt-10 px-8 text-lg font-body ' >{parse(res.fullDetail2)}</div>
         
         
          <div className='detail-image'>
            <img src={res.image} alt={res.name}/>
          </div>
          <div className='text-justify mt-10 mx-10 px-8 text-lg font-sans' >{parse(res.fullDetail1)}</div>
          <div className='detail-image'>
            <img src={res.image2} />
          
          </div>
          
          
          
          <div className='text-center mt-10 px-8 text-lg font-sans font-medium ' >{parse(res.fullDetail3)}</div>
          <div className='detail-image mt-10'>
            <img src={res.image3} />
            </div>
            <div className='text-center mt-10 px-8 text-lg font-sans font-medium' >{(res.fullDetail4)}</div>
          <div className='detail-image mt-10'>
            <img src={res.image4} />
            </div>
            <div className='text-center mt-10 px-8 text-lg font-sans font-medium '  >{(res.fullDetail5)}</div>
          <div className='detail-image mt-10'>
            <img src={res.image5} /> 
            </div>
      </div>
      </>
    )
  }
  export default Detail;