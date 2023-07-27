import React from "react";
import { useParams } from "react-router-dom";
import "../style/product-detail.css";
import products from "../assets/data/product";
import useHandleQuantity from "../const/handleQuantity";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { quantity, handleDecrease, handleIncrease, addToCart } =
    useHandleQuantity(product);
  return (
    <>
      <div className='m-buy'>
        <div className='buy-wrap'>
          <div className='buy-main position-relative'>
            <div className='goods-info-header_container d-flex'>
              <div className='goods-info_container card-wrap'>
                <div className='buy-preview'>
                  <div className='preview-window'>
                    <img class='goods-img_preview' src={product.imgUrl} />
                  </div>
                  <div className='preview-list'>
                    <ul className='clearfix'>
                      <li class='active'>
                        <img src={product.imgUrl} />
                      </li>
                      <li class=''>
                        <img src={product.imgUrl} />
                      </li>
                      <li class=''>
                        <img src={product.imgUrl} />
                      </li>
                      <li class=''>
                        <img src={product.imgUrl} />
                      </li>
                      <li class=''>
                        <img src={product.imgUrl} />
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
                <div className='buy-info d-flex flex-column float-end '>
                  <p class='buy-info-header_tips d-flex align-items-center'>
                    <div class='popBox-help popBox-tag'>
                      <span>Shopping agent product</span>
                      <em class='qem'></em>
                    </div>
                    <div class='before-u-buy'>
                      3 Must-Read Tips Before starting &gt;
                    </div>
                  </p>
                  <h3 class='goods-title'>{product.shortDesc}</h3>
                  <div class='activity-banner'>
                    <a href='https://www.superbuy.com/en/page/subject/?id=21870'>
                      <img src='https://img1.superbuy.com/images/daigou-admin/2023/05/15/228240ab-6575-4bd7-a325-e68f77515872.png' />
                    </a>
                  </div>
                  <div className='goods-price notUserPrice'>
                    <div className='edit-content'>
                      <div className='goods-price-tool popBox-tag'>
                        <i class='goods-rmb'>CN ￥</i>
                        <strong class='goods-txt'>{product.price}</strong>
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
                  <div className='goods-options'>
                    <dl className='goods-options-row'>
                      <dd className='new-goods-options-content position-relative'>
                        <div class='label label-one d-flex align-items-center flex-wrap position-relative mb-4'>
                          <span class='label-title'>Chinese Shipping Fee</span>
                          <span class='label-input'>
                            <input
                              class='goods-freight'
                              maxlength='8'
                              type='text'
                              placeholder='CN￥'
                            />
                          </span>
                          <span class='label-description'>
                            Send to<em>Guangdong Warehouse</em>
                            <i></i>
                          </span>
                        </div>
                        <div className='label label-tow country-select d-flex align-items-center flex-wrap position-relative'>
                          <span>Send to </span>
                          <div className='country-select-search'>
                            <select>
                              <option value='0'>Viet Nam</option>
                              <option value='1'>Nhat Ban</option>
                              <option value='2'>Trung Quoc</option>
                              <option value='3'>Campuchia</option>
                              <option value='4'>Thai Lan</option>
                              <option value='5'>Philippin</option>
                              <option value='6'>Malaysia</option>
                              <option value='7'>Singapore</option>
                              <option value='8'>Myanma</option>
                              <option value='9'>Timolete</option>
                              <option value='10'>Indonesia</option>
                              <option value='11'>An Do</option>
                              <option value='12'>Rusia</option>
                            </select>
                          </div>
                          <span class='line-number'>36 </span>
                          <span>Logistics Available </span>
                          <a href='/en/page/query/freight/' target='_blank'>
                            Shipping Calculator&gt;
                          </a>
                        </div>
                      </dd>
                    </dl>
                    <div className='goods-sizes'>
                      <div className='goods-options-row'>
                        <div className='goods-options-title d-flex justify-content-between align-items-center'>
                          <dt class='goods-options-label'>Color</dt>
                          <div className='shopping-tools'>
                            <i class='ri-information-line'></i>
                            <span>Shopping Assistant</span>
                          </div>
                        </div>
                        <dd className='goods-options-content'>
                          <ul className='goods-options-tags d-flex'>
                            <li className='active'>
                              <div className='common-img-wrap '>
                                <img src={product.imgUrl} alt='' />
                              </div>
                            </li>
                            <li>
                              <div className='common-img-wrap '>
                                <img src={product.imgUrl} alt='' />
                              </div>
                            </li>
                            <li>
                              <div className='common-img-wrap '>
                                <img src={product.imgUrl} alt='' />
                              </div>
                            </li>
                          </ul>
                        </dd>
                      </div>
                    </div>
                    <div className='goods-options-quantity'>
                      <div className='goods-options-title'>Quantity</div>
                      <div className='goods-options-content-count d-flex align-items-center'>
                        <input
                          class='goods-count'
                          type='text'
                          value={quantity}
                        />
                        <div className='goods-count-btns'>
                          <i
                            class='ri-arrow-up-s-line'
                            onClick={handleDecrease}></i>
                          <i
                            class='ri-arrow-down-s-line'
                            onClick={handleIncrease}></i>
                        </div>
                      </div>
                    </div>
                    <div className='support-pay-list'>
                      <dl className='d-flex align-items-center justify-content-start'>
                        <dt class='goods-options-label goods-mark'>
                          Support Payment
                        </dt>
                        <dd title='paypal' class='pay-icon'>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/img/buy/payList/paypal.png'
                            alt=''
                          />
                        </dd>
                        <dd title='paypal' class='pay-icon'>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/img/buy/payList/visa.png'
                            alt=''
                          />
                        </dd>
                        <dd title='paypal' class='pay-icon'>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/img/buy/payList/wechatPay.png'
                            alt=''
                          />
                        </dd>
                        <dd title='paypal' class='pay-icon'>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/img/buy/payList/aliPay.png'
                            alt=''
                          />
                        </dd>
                      </dl>
                    </div>
                    <div class='goods-commit clearfix'>
                      <button class='goods-buyNow'>Buy Now</button>
                      <button
                        class='goods-addToCart text-white'
                        onClick={addToCart}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='store-info_container'>
                <div class='buy-shopBox'>
                  <div class='shopBox-header d-flex align-items-center justify-content-between mb-2'>
                    <p style={{ margin: "0", fontSize: "18px" }}>SHOP</p>
                    <button data-key='shop-modal' class='go-shop'>
                      Visit Store
                    </button>
                  </div>
                  <p class='shop-title' title='One million auto supplies'>
                    One million auto supplies
                  </p>
                  <div class='shopBox-body'>
                    <span>
                      <em class=''>---</em>Overall
                    </span>
                    <ul
                      class='shop-score'
                      style={{ padding: "0", margin: "0" }}>
                      <li>
                        <span>Description</span>
                        <span class=''>
                          ---<i class='none'></i>
                        </span>
                      </li>
                      <li>
                        <span>Service</span>
                        <span class=''>
                          ---<i class='none'></i>
                        </span>
                      </li>
                      <li>
                        <span>Logistics</span>
                        <span class=''>
                          ---<i class='none'></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='goods-disclaimer_container card-wrap align-items-start '>
              <div class='disclaimer d-flex'>
                <h3>Disclaimer</h3>
                <p>
                  All products available for shopping agent service displayed on
                  Superbuy are from third-party shopping platforms and not
                  directly sold by Superbuy. Thus, Superbuy does not take
                  liability and legal responsibility for issues caused by
                  intellectual property rights infringement and goods copyright
                  infringement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
