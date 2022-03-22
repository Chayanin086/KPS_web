import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import ProD from '../ProD';
import Footer2 from '../Footer2';
import Productcards from '../Productcards';
import _ from "lodash"
import {useState,useEffect} from 'react';
import api from "../../utils/api";



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