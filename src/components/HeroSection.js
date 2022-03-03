import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Welcome</h1>
      <h1>to</h1>
      <h1>KPS automation</h1>
      <p>ศูนย์รวมสินค้าAutoMation</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ผลงาน
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ตัวอย่าง <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;