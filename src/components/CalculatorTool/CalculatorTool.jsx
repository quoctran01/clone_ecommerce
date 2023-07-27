import React from "react";

const CalculatorTool = () => {
  return (
    <>
      <div className="main-tools_container">
        <div className="tools-express">
          <h2>Shipping Calculator</h2>
          <div className="form-item">
            <div className="input-wrap country-select active">
              <input type="text" placeholder="" readonly="" value="USA" />
              <span>
                <i class="ri-arrow-drop-down-line"></i>
              </span>
              <section class="pick-container country-pick">
                <ul class="country-list d-flex flex-wrap position-relative">
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
              </section>
              <div class="input-wrap weight-input">
                <input
                  type="text"
                  placeholder=""
                  value="1000"
                  style={{ marginLeft: "10px" }}
                />
                <span>g</span>
              </div>
            </div>
          </div>
          <div className="form-item product-type-select">
            <input type="text" title="Common Items..." />
            <span class="input-des" title="Common Items...">
              Common Items...
            </span>
            <button>Search</button>
            <section class="pick-container goods-type-pick">
              <ul class="goods-type-list p-0 m-0">
                <li>Textiles/Leather Items</li>
                <li>Liquid/Powder</li>
                <li>Digital/Electrical</li>
                <li>Foods/Medicine</li>
                <li>Others</li>
                <li>Common Items</li>
              </ul>
            </section>
          </div>
          <div className="express-list mb-2">
            <p class="express-tips m-0 d-flex justify-content-between">
              <p className="m-0 d-block">
                <em>10</em>lines available
              </p>
              <a href="">More</a>
            </p>
            <ul className="m-0 p-0">
              <li class="header d-flex text-center">
                <span>Name</span>
                <span>Speed</span>
                <span>Fee</span>
              </li>
              <li className="d-flex">
                <span title="Duty-Free Air Express">Duty-Free Air Express</span>
                <span title="8-15 days">8-15 days</span>
                <span>$28.62</span>
              </li>
              <li className="d-flex">
                <span title="Superbuy Air Mail">Superbuy Air Mail</span>
                <span title="8-13 days">8-13 days</span>
                <span>$20.09</span>
              </li>
              <li className="d-flex">
                <span title="EUB Preferential Line-XN">
                  EUB Preferential Line-XN
                </span>
                <span title="10-20 days">10-20 days</span>
                <span>$23.6</span>
              </li>
              <li className="d-flex">
                <span title="SF Ecommerce Express-CD">
                  SF Ecommerce Express-CD
                </span>
                <span title="12-15 days">12-15 days</span>
                <span>$23.41</span>
              </li>
              <li className="d-flex">
                <span title="EMS">EMS</span>
                <span title="10-20 days">10-20 days</span>
                <span>$39.43</span>
              </li>
              <li className="d-flex">
                <span title="US Packet by Sea">US Packet by Sea</span>
                <span title="20-25 days">20-25 days</span>
                <span>$13.7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default CalculatorTool;
