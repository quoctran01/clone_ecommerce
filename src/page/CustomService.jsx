import React from "react";
import "../style/custom-service.css";

const CustomService = () => {
  return (
    <>
      <div className='custom-service'>
        <div class='hd'>
          <h1>Customer Service</h1>
        </div>
        <div className='bd'>
          <div className='inner-wrap'>
            <ul className='d-flex p-0'>
              <li className='order-item active'>
                <div class='txt-box'>
                  <div class='ico'>
                    <em></em>
                  </div>
                  <h3>Order Enquiry</h3>
                  <div class='tip mt30'>
                    <p class='mt20'>Order Purchase, Verify Dispatch,</p>
                    <p>Return/ Refund, etc.</p>
                  </div>
                </div>
                <div class='btn-box'>
                  <a href='//www.superbuy.com/order' class='btn'>
                    Visit ‘My Order’
                    <div class='order-tooltip sp-tooltip'>
                      <div class='cont'>
                        <div class='txt'>
                          Find the relevant order and click‘Message Agent’
                        </div>
                        <div class='pic'>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/en/source/img/customservice/order_tooltip.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <div class='sp-tooltip-arrow arrow-bottom-center '></div>
                      <div class='sp-tooltip-arrow-back arrow-back-bottom-center'></div>
                    </div>
                  </a>
                </div>
              </li>
              <li className='order-item active'>
                <div class='txt-box'>
                  <div class='ico'>
                    <em></em>
                  </div>
                  <h3>Order Enquiry</h3>
                  <div class='tip mt30'>
                    <p class='mt20'>Order Purchase, Verify Dispatch,</p>
                    <p>Return/ Refund, etc.</p>
                  </div>
                </div>
                <div class='btn-box'>
                  <a href='//www.superbuy.com/order' class='btn'>
                    Visit ‘My Order’
                    <div class='order-tooltip sp-tooltip'>
                      <div class='cont'>
                        <div class='txt'>
                          Find the relevant order and click‘Message Agent’
                        </div>
                        <div class='pic'>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/en/source/img/customservice/order_tooltip.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <div class='sp-tooltip-arrow arrow-bottom-center '></div>
                      <div class='sp-tooltip-arrow-back arrow-back-bottom-center'></div>
                    </div>
                  </a>
                </div>
              </li>
              <li className='order-item active'>
                <div class='txt-box'>
                  <div class='ico'>
                    <em></em>
                  </div>
                  <h3>Order Enquiry</h3>
                  <div class='tip mt30'>
                    <p class='mt20'>Order Purchase, Verify Dispatch,</p>
                    <p>Return/ Refund, etc.</p>
                  </div>
                </div>
                <div class='btn-box'>
                  <a href='//www.superbuy.com/order' class='btn'>
                    Contact Now
                  </a>
                </div>
              </li>
              <li className='order-item active'>
                <div class='txt-box'>
                  <div class='ico'>
                    <em></em>
                  </div>
                  <h3>Order Enquiry</h3>
                  <div class='tip mt30'>
                    <p class='mt20'>Order Purchase, Verify Dispatch,</p>
                    <p>Return/ Refund, etc.</p>
                  </div>
                </div>
                <div class='btn-box'>
                  <a href='//www.superbuy.com/order' class='btn'>
                    Send Mail
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomService;
