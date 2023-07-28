import React from "react";
import "../style/tracking.css";

const Tracking = () => {
  return (
    <>
      <div className='package'>
        <div className='package-tracking'>
          <div className='banner'>
            <div class='banner-title'>
              <p>Parcel Tracking</p>
              <p>Track your parcel at you fingertips</p>
            </div>
            <div className='query'>
              <input
                id='package-box'
                placeholder='Please enter tracking number or parcel number.'
                value=''
              />
              <span>Check Now</span>
            </div>
          </div>
        </div>
        <div id='packageState'>
          <div class='query-result-empty'>
            <div class='empty-content'>
              <div class='image'>
                <img src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/query/package/icon_0.jpg' />
              </div>
              <div>
                <p>
                  Please enter tracking number or parcel number to track your
                  parcel.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='logistics-website'>
          <h3>Other Logistics Websites</h3>
          <ul className='d-flex justify-content-between flex-wrap'>
            <li>
              <a href='http://www.ems.com.cn/' target='_blank'>
                <img src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/query/package/image_0.jpg' />
                <p>EMS</p>
              </a>
            </li>
            <li>
              <a href='https://www.usps.com/' target='_blank'>
                <img src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/query/package/image_1.jpg' />
                <p>USPS</p>
              </a>
            </li>
            <li>
              <a href='http://auspost.com.au/' target='_blank'>
                <img src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/query/package/image_2.jpg' />
                <p>Australia Post</p>
              </a>
            </li>
            <li>
              <a
                href='https://www.canadapost.ca/web/en/home.page'
                target='_blank'>
                <img src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/query/package/image_3.jpg' />
                <p>Canada Post</p>
              </a>
            </li>
            <li>
              <a href='http://www.royalmail.com/' target='_blank'>
                <img src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/query/package/image_4.jpg' />
                <p>Royal Mail</p>
              </a>
            </li>
            <li>
              <a href='http://www.pos.com.my/' target='_blank'>
                <img src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/query/package/image_5.jpg' />
                <p>Malaysia Post</p>
              </a>
            </li>
            <li>
              <a href='https://www.nzpost.co.nz/' target='_blank'>
                <img src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/query/package/image_6.jpg' />
                <p>New Zealand Post</p>
              </a>
            </li>
            <li>
              <a href='http://www.singpost.com/' target='_blank'>
                <img src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/query/package/image_7.jpg' />
                <p>Singapore Post</p>
              </a>
            </li>
            <li>
              <a href='http://www.laposte.fr/particulier' target='_blank'>
                <img src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/query/package/image_8.jpg' />
                <p>France Post</p>
              </a>
            </li>
            <li>
              <a href='http://www.cn.dhl.com/en.html' target='_blank'>
                <img src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/query/package/image_9.jpg' />
                <p>DHL</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tracking;
