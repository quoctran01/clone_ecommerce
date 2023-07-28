import React from "react";
import "../style/freight.css";
import UseSlider from "../const/useSlider";
import { sliderFreight } from "../assets/data/bannerSlider";

const Freight = () => {
  return (
    <section className='freight freight-container'>
      <div className='logistics-freight freight-inner-content'>
        <section className='freight-banner-container'>
          <section className='banner-inner'>
            <section className='swiperImg-wrapper swiperImg-wrapper-mini'>
              <div className='swiperImg'>
                <div className='swiperImg-container'>
                  <a href='' className='swiperImg-item swiperImg-item-0'>
                    <div className='common-img-wrap '>
                      <UseSlider items={sliderFreight} />
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </section>
          <div className='query query-freight-tools-container'>
            <section>
              <p class='tools-header p-0 d-flex justify-content-between align-items-center'>
                <div class='title d-flex justify-content-between position-relative'>
                  <h2 class='active'>Shipping Calculator</h2>
                  <h2 class=''>Shipping Solutions Query</h2>
                </div>
                <span class='fr header-tips'>
                  Send bulk cargo (≥30kg) or oversized items?
                  <a
                    href='/en/page/customization/fillin/'
                    target='_blank'
                    rel='noreferrer'>
                    Try our customized services&gt;
                  </a>
                </span>
              </p>
              <ul className='tools-content m-0 p-0 d-flex align-items-center'>
                <li className='box required-form area d-flex align-items-center'>
                  <input
                    placeholder='Destination'
                    class='area-input'
                    value=''
                  />
                  <span>
                    <i class='ri-arrow-down-s-line'></i>
                  </span>
                </li>
                <li className='box warehouse'>
                  <select class='select-content select-en'>
                    <option value='0' selected=''>
                      Select which warehouse to send
                    </option>
                    <option value='1'>Guangdong Warehouse</option>
                    <option value='2'>HongKong Warehouse</option>
                  </select>
                </li>
                <div class='box weight  volume-en required-form'>
                  <span class='weight-title keyword0 text-en'>Weight</span>
                  <input placeholder='0' maxlength='8' class='' value='' />
                  <span class='weight-pre-title'>g</span>
                </div>
                <li className='volume'>
                  <span class='volume-title'>Size</span>
                  <div className='box length d-flex align-items-center'>
                    <input placeholder='0' maxlength='8' class='' value='' />
                    <span class='weight-pre-title'>Length(cm)</span>
                  </div>
                  <div className='box breadth d-flex align-items-center'>
                    <input placeholder='0' maxlength='8' class='' value='' />
                    <span class='weight-pre-title'>Width(cm)</span>
                  </div>
                  <div className='box height d-flex align-items-center'>
                    <input placeholder='0' maxlength='8' class='' value='' />
                    <span class='weight-pre-title'>Height(cm)</span>
                  </div>
                </li>
                <li className='selection-type volume'>
                  <span class='keyword0 text-en'>Item Category</span>
                  <input id='type-box' placeholder='' class='' />
                </li>
              </ul>
              <div className='operation-group'>
                <span class='tools-btn btn-reset'>Reset</span>
                <span class='tools-btn btn-submit'>Check Now</span>
              </div>
            </section>
          </div>
          <section className='common-notice'>
            <div className='notice-scroll-outer'>
              <ul className='p-0 m-0 d-flex flex-column'>
                <li className='d-flex align-items-center'>
                  <p className='m-0'>Superbuy Renames Some Logistics Line</p>
                  <a
                    style={{ textDecoration: "none" }}
                    className='ms-3'
                    target='_blank'
                    href='https://bbs.superbuy.com/forum.php?mod=viewthread&amp;tid=579123'>
                    More &gt;
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <div className='package-state'>
            <section className='express-line-operation-bar'>
              <ul className='operation-item'>
                <li class='label'>
                  <span>Sort:</span>
                  <span>Price</span>
                  <span class='icon '>
                    <i class='ri-arrow-drop-up-line'></i>
                    <i class='ri-arrow-drop-down-line'></i>
                  </span>
                </li>
                <li class='used'>Most Used</li>
                <li class='line-sort'>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: "14px",
                      marginRight: "10px",
                    }}>
                    Types of Delivery
                  </span>
                  <span>
                    <input
                      maxlength='20'
                      type='text'
                      class='ant-input'
                      value=''
                    />
                  </span>
                </li>
                <li className='line-range d-flex align-items-center'>
                  <span
                    style={{
                      color: "#999999",
                      fontSize: "14px",
                      marginRight: "10px",
                    }}>
                    Shipping Fee
                  </span>
                  <span>
                    <div className='ant-input-number d-flex'>
                      <div className='ant-input-number-input-wrap'>
                        <input type='number' />
                      </div>
                    </div>
                  </span>
                  <span class='symbol'></span>
                  <span>
                    <div className='ant-input-number d-flex'>
                      <div className='ant-input-number-input-wrap'>
                        <input type='number' />
                      </div>
                    </div>
                  </span>
                </li>
                <li>
                  <button type='button' class='btn-shipping'>
                    <span>OK</span>
                  </button>
                </li>
              </ul>
            </section>
            <div className='delivery-customer-service d-flex justify-content-between mt-2 mb-4'>
              <div className='service-first d-flex align-items-center justify-content-between'>
                <div>
                  <p style={{ fontWeight: "700" }}>Shipping Expert</p>
                  <p class='des'>
                    Need optimal Packing + Shipping solutions? Choose Shipping
                    Expert Service.
                  </p>
                </div>
                <p class='button'>
                  <i class='ri-arrow-right-s-line'></i>
                </p>
              </div>
              <div className='service-next d-flex align-items-center'>
                <div>
                  <p style={{ fontWeight: "700" }}>
                    Try our Customized Logistics Service
                  </p>
                  <p class='des'>
                    For heavy cargo, ocean/railway shipping, you can choose
                    Customized Shipping Service.
                  </p>
                </div>
                <p class='button'>
                  <i class='ri-arrow-right-s-line'></i>
                </p>
              </div>
            </div>
            <div className='package-questions'>
              <div>
                <div class='footer-title'>
                  <span>FAQ</span>
                  <a href='/en/page/help/#n' target='_blank' rel='noreferrer'>
                    more&gt;&gt;
                  </a>
                </div>
                <ul class='questions text-en p-0'>
                  <li>
                    <h3>
                      What are '1st Weight Unit' and weight measured after the
                      '1st Weight Unit'?
                    </h3>
                    <p>
                      1st Weight Unit is the minimum weight that parcel will be
                      charged for. Parcel within the first weight unit will be
                      charged as the first weight unit. Any weight over the
                      first weight unit will be charged as the weight measured
                      after the 1st Weight Unit.
                    </p>
                  </li>
                  <li>
                    <h3>What do I do if my parcel is over weighted?</h3>
                    <p>
                      Different types of delivery have its own weight limits. If
                      your parcel is over-weight, you would not be able to
                      submit for delivery. Alternatively, you would need to
                      remove some items and submit for delivery again.
                    </p>
                  </li>
                  <li>
                    <h3>
                      Are there any restrictions to ship imitated products,
                      restricted products, liquid, cream, food, DVD, etc.?
                    </h3>
                    <p>
                      Shipping recommendation is based on our big data; hence we
                      do not take any responsibility if the customs confiscate
                      them. The following items: cigarette, alcohol, medicine
                      and prohibited items are not allowed to be shipped
                      overseas due to custom policies. Based on the air
                      transportation requirements; food, liquid, powder, cream
                      items are required to provide non-hazardous
                      authentication. Therefore, we recommend you not to ship
                      these products in bulk. If you are only shipping small
                      number of sensitive items, i.e. cosmetics less than 100ml
                      and no more than 200ml per parcel, we can try to ship them
                      with other ordinary products, i.e. clothes, shoes, etc.
                    </p>
                  </li>
                  <li>
                    <h3>What is volume weight?</h3>
                    <p>
                      Volume weight is a term used in the logistics industry.
                      The freight of goods with large volume and light weight
                      can be calculated according to volume weight. For most air
                      cargo, the volume weight will be calculated as
                      follows:Volume Weight (KG)= Length (CM) * Width (CM)*
                      Height (CM) / 6,000. For example, the freight of 6,000CM³
                      cargo is charged as 1KG of volume weight and the freight
                      of 1M³ cargo is charged as 167 KG of volume weight.
                    </p>
                  </li>
                </ul>
                <div class='line'></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Freight;
