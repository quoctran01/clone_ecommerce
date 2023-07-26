import React from "react";
import "../../style/shopping-guide.css";

const ShoppingGuide = () => {
  return (
    <>
      <h3> How to buy</h3>
      <ul>
        <li>
          <p className='title'>
            <span>01</span>
            <span>Submit and pay for your shopping agent orders</span>
          </p>
        </li>
        <li>
          <p className='title'>
            <span>02</span>
            <span>We inspect and store your goods.</span>
          </p>
        </li>
        <li>
          <p className='title'>
            <span>03</span>
            <span>Submit parcels and Pay the international shipping fee.</span>
          </p>
        </li>
        <li>
          <p className='title'>
            <span>04</span>
            <span>We pack and ship your parcels.</span>
          </p>
        </li>
        <li>
          <p className='title'>
            <span>05</span>
            <span>Receive your pracels with happiness</span>
          </p>
        </li>
      </ul>

      <a href=''>Details</a>
    </>
  );
};

export default ShoppingGuide;
