import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ProD from '../components/ProD';
import Footer2 from '../components/Footer2' 
import {useState,useEffect} from 'react';
import api from "../utils/api";



function Home() {
  const [productData, setProductData] = useState();

  useEffect(() => {
    api
      .get("https://admin.kps.eonlineshop.net/api/v1/product")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((err) => {
        alert("ขออภัย มีบางอย่างผิดพลาด กรูณาลองอีกครั้ง");
        console.error(err);
      });
      return () => {};
    }, []);
  return (
    
    <>
      <HeroSection />
      <Cards />
      {/* <ProD /> */}
      <ProD productData = {productData}/>
      <Footer />
      <Footer2/>
    </>
  );
}
export default Home;