import React from 'react';
import '../App.css';
import Contacthead from '../components/Contacthead';
import GoogleMap from '../components/Mapcard';
import Contactcard from '../components/Contactcard'
function Contactus() {
  return (
   <>
     <Contacthead/>
     <GoogleMap/>
     <Contactcard/>
   </> 
  );

}
export default Contactus;