import React from "react";

const CalculatorTool = () => {
  return (
    <>
      <div className='main-tools_container'>
        <div className='tools-express'>
          <h2>Shipping Calculator</h2>
          <div className='form-item'>
            <div className='input-wrap country-select'>
              <input type='text' placeholder='' readonly='' value='USA' />
              <span></span>
              {/* <section class='pick-container country-pick'>
                <ul class='country-list'>
                  <li>All</li>
                  <li>USA</li>
                  <li>Canada</li>
                  <li>UK</li>
                  <li>Germany</li>
                  <li>Australia</li>
                  <li>France</li>
                  <li>Japan</li>
                  <li>Other</li>
                </ul>
              </section> */}
              <div class='input-wrap weight-input'>
                <input type='text' placeholder='' value='1000' />
                <span>g</span>
              </div>
            </div>
          </div>
          {/* <div className='form-item product-type-select'>
              <input type='text' title='Common Items...' />
              <span class='input-des' title='Common Items...'>
                Common Items...
              </span>
              <button>Search</button> */}
          {/* <section class='pick-container goods-type-pick'>
                <ul class='goods-type-list'>
                  <li>Textiles/Leather Items</li>
                  <li>Liquid/Powder</li>
                  <li>Digital/Electrical</li>
                  <li>Foods/Medicine</li>
                  <li>Others</li>
                  <li>Common Items</li>
                </ul>
              </section> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default CalculatorTool;
