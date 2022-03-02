import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import ProD from '../ProD';
function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <ProD />
      <Footer />
    </>
  );
}
export default Home;