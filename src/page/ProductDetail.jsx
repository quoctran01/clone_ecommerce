import React from "react";
import { useParams } from "react-router-dom";
import "../style/product-detail.css";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <>
      <div className='m-buy'>
        <div className='buy-wrap'>
          <div className='buy-main d-flex flex-wrap justify-content-between position-relative'>
            <div className='goods-info-header_container d-flex flex-column'>
              <div className='goods-info_container card-wrap'>
                <div className='buy-preview'>
                  <div className='preview-window'>
                    <img
                      class='goods-img_preview'
                      src='https://img.alicdn.com/imgextra/i4/1679740115/O1CN016EbDOW1CiiINY66sn_!!1679740115.jpg_400x400q90.jpg'
                    />
                  </div>
                  <div className='preview-list'>
                    <ul className='clearfix'>
                      <li class='active'>
                        <img src='https://img.alicdn.com/imgextra/i2/1679740115/O1CN019ovEzo1CiiIH9khrP_!!1679740115.jpg_60x60q90.jpg' />
                      </li>
                      <li class=''>
                        <img src='https://img.alicdn.com/imgextra/i2/1679740115/O1CN019ovEzo1CiiIH9khrP_!!1679740115.jpg_60x60q90.jpg' />
                      </li>
                      <li class=''>
                        <img src='https://img.alicdn.com/imgextra/i2/1679740115/O1CN019ovEzo1CiiIH9khrP_!!1679740115.jpg_60x60q90.jpg' />
                      </li>
                      <li class=''>
                        <img src='https://img.alicdn.com/imgextra/i2/1679740115/O1CN019ovEzo1CiiIH9khrP_!!1679740115.jpg_60x60q90.jpg' />
                      </li>
                      <li class=''>
                        <img src='https://img.alicdn.com/imgextra/i2/1679740115/O1CN019ovEzo1CiiIH9khrP_!!1679740115.jpg_60x60q90.jpg' />
                      </li>
                    </ul>
                  </div>
                  <div className='share'>
                    <ul className='preview-toolbar d-flex float-end mt-3 align-items-center'>
                      <li class='tuiguang preview-like'>
                        <i class='ri-share-box-line'></i>
                        <span>Join Superbuy Affiliates</span>
                      </li>
                      <li class=' preview-like'>
                        <i class='ri-star-line'></i>
                        <span>Favorite </span>
                      </li>
                      <li class='preview-pv'>
                        <i class='ri-eye-line'></i>
                        <span>268</span>
                      </li>
                      <li class='preview-pv'>
                        <i class='ri-share-line'></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='buy-info'>
                  <p class='buy-info-header_tips'>
                    <div class='popBox-help popBox-tag'>
                      <span>Shopping agent product</span>
                      <em class='qem'></em>
                    </div>
                    <div class='before-u-buy'>
                      3 Must-Read Tips Before starting &gt;
                    </div>
                  </p>
                  <h3 class='goods-title'>
                    Polka-dot sexy side slit slim holiday suspender skirt
                  </h3>
                  <div class='activity-banner'>
                    <a href='https://www.superbuy.com/en/page/subject/?id=21870'>
                      <img src='https://img1.superbuy.com/images/daigou-admin/2023/05/15/228240ab-6575-4bd7-a325-e68f77515872.png' />
                    </a>
                  </div>
                  <div className='goods-price notUserPrice'>
                    <div className='edit-content'>
                      <div className='goods-price-tool'>
                        <i class='goods-rmb'>CN ￥</i>
                        <strong class='goods-txt'>105.00</strong>
                        <em class='qem'></em>
                      </div>
                      <div>
                        <p class='qem'>
                          Orders paid between 09:00-18:00 (BT) will be processed
                          in 6 hours.
                        </p>
                        <em class='qem'></em>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='store-info_container'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
