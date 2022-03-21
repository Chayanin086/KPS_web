import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import ProD from '../ProD';
import Footer2 from '../Footer2';

function Home() {
  
  return (
    
    <>
      <HeroSection />
      <Cards />
      <ProD />
      <Footer />
      <Footer2/>
    </>
  );
}
export default Home;