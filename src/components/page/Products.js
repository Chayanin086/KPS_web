import React,{useState,useEffect} from 'react';
import '../../App.css';
import Productcards from '../Productcards';
import api from "../../utils/api";
import _ from "lodash"


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
     {/* {_.map(productData?.rows, (eachProduct) => (
    <div>
      {eachProduct?.name} {eachProduct?.price}
      <img src={eachProduct?.images?.[0]?.url} />
    </div> */}
))}
    
   </> 
  
  );

}

export default Products;
