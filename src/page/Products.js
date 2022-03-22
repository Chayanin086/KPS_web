import React,{useState,useEffect} from 'react';
import '../App.css';
import Productcards from '../components/Productcards';
import api from "../utils/api";
// import _ from "lodash"
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';

function Products() {
 
  
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
//   {_.map(productData?.rows, (eachProduct) => (
//     <div>
//       {eachProduct?.name} {eachProduct?.price}
//     </div>
// ))}
                  
  return (
    
   <>
     <Productcards productData = {productData}/>
     <Footer />
     <Footer2/>
     {/* {_.map(productData?.rows, (eachProduct) => (
    <div>
      {eachProduct?.name} {eachProduct?.price}
      <img src={eachProduct?.images?.[0]?.url} />
    </div> */}
{/* ))} */}
    
   </> 
  
  );

}

export default Products;
