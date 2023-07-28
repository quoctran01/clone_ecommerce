import React from "react";
import "./product-shipping.css";

const ProductShipping = () => {
  return (
    <>
      <div className='package-item_container'>
        <a href='' className='text-decoration-none'>
          <div class='package-header d-flex justify-content-between align-items-center'>
            <p class='user-info m-0'>
              <span>t****i</span>
              <span>Within 1 day</span>
            </p>
            <span class='arrow-detail'>
              <i class='ri-arrow-right-s-line'></i>
            </span>
          </div>
          <div class='package-goods d-flex justify-content-between'>
            <div class='common-img-wrap'>
              <img
                src='https://img.alicdn.com/bao/uploaded/i2/2213093508234/O1CN01avRQZi2AhE192Udjs_!!2213093508234.jpg_90x90q90.jpg'
                alt='common-img'
                draggable='false'
                class='common-img'
              />
            </div>
            <div class='common-img-wrap'>
              <img
                src='https://cdn.superbuy.com/starit-superbuy/dist/img/defalut-package.png?x-oss-process=image/resize,limit_0,m_fixed,h_90,w_90/quality,q_90/interlace,1/format,webp '
                referrerpolicy='no-referrer'
                alt='common-img'
                draggable='false'
                class='common-img'
              />
            </div>
          </div>
          <div class='package-info'>
            <h3 title='EUB Preferential Line-XN'>EUB Preferential Line-XN</h3>
            <p class='express-price m-0'>
              <span>
                <i style={{ fontSize: "12px" }}>CN ￥</i>
                <i>120.89</i>
              </span>
              <span>Freight</span>
            </p>
            <div class='express-description'>
              <span style={{ fontSize: "14px" }}>USA</span>
              <div class='common-img-wrap'>
                <img
                  src='https://cdn.superbuy.com/starit-superbuy/dist/img/flag/US.png?x-oss-process=image/resize,limit_0,m_fixed,h_18,w_30/quality,q_90/interlace,1/format,webp'
                  alt=''
                />
              </div>
              <span class='separator'> | </span>
              <span></span>
            </div>
            <p class='package-description m-0 p-0'>
              <span>1180g</span>
              <span class='separator'> | </span>
              <span>34 x 20 x 25cm</span>
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default ProductShipping;
