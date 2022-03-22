import React from "react";
import '../assets/css/mapcard.css';

export default function GoogleMap({ info }) {
  return (
    <div className="w-full">
      <div>
        <iframe
          title="KPS"
          src={
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCW6HXYlqqnvyEVcgjXfdFVZvHxz7l-btQ&q=+ ตำบลช้างขวา อ.กาญจนดิษฐ์ จ. สุราษฎร์ธานี    "
          }
          width="98%"
          height="400"
          style={{ border: "0px" }}
          aria-hidden="false"
          className="mx-auto pt-2"
          
        ></iframe>
      </div>
    </div>
  );
} 