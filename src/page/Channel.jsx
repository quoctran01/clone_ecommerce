import React, { useState } from "react";
import "../style/channel.css";

const Channel = () => {
  const [businessActive, setBusinessActive] = useState("businessActive");
  return (
    <>
      <section className='business-service-container'>
        <div class='guide-banner'>
          <h2 class='banner-title banner-title-en'>Business Service</h2>
          <h3 class='banner-subtitle en'>
            One-Stop Business Solutions Platform.
          </h3>
        </div>
        <div className='ant-tabs ant-tabs-top ant-tabs-line'>
          <div className='ant-tabs ant-tabs-top ant-tabs-line'>
            <div
              role='tablist'
              class='ant-tabs-bar ant-tabs-top-bar'
              tabindex='0'>
              <div class='ant-tabs-nav-container'>
                <div class='ant-tabs-nav-wrap pt-3'>
                  <div class='ant-tabs-nav-scroll'>
                    <div class='ant-tabs-nav ant-tabs-nav-animated'>
                      <div>
                        <div
                          role='tab'
                          aria-disabled='false'
                          aria-selected='true'
                          class={`ant-tabs-tab ${
                            businessActive === "businessActive"
                              ? "ant-tabs-tab-active"
                              : ""
                          }`}
                          onClick={() => setBusinessActive("businessActive")}>
                          Business Service
                        </div>
                        <div
                          role='tab'
                          aria-disabled='false'
                          aria-selected='false'
                          class={`ant-tabs-tab ${
                            businessActive || "ant-tabs-tab-active"
                          }`}
                          onClick={() => setBusinessActive(false)}>
                          Channel Cooperation
                        </div>
                      </div>
                      <div
                        class='ant-tabs-ink-bar ant-tabs-ink-bar-animated'
                        style={{
                          display: "block",
                          transform:
                            businessActive === "businessActive"
                              ? "translate3d(0px, 0px, 0px)"
                              : " translate3d(232px, 0px, 0px)",
                          width: "200px",
                        }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {businessActive === "businessActive" ? (
              <div className='ant-tabs-content ant-tabs-content-animated ant-tabs-top-content'>
                <div className='ant-tabs-tabpane ant-tabs-tabpane-active'>
                  <section className='businessservice-sbs en'>
                    <section class='sbs-component sbs-intro'>
                      <div class='sbs-section-title '>
                        <h3>What is Superbuy Business Service (SBS)?</h3>
                        <p>
                          SBS is specially designed to help small and medium
                          size clients. Our goal is to help online and offline
                          resellers, retailers, or shop owners become more
                          competitive by making it easier to source quality
                          products directly from China.
                        </p>
                      </div>
                      <ul class='sbs-component-content'>
                        <li class='sbs-intro-item'>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/feature_0.png'
                            alt=''
                          />
                          <p>
                            Access to Taobao, Tmall, and 1688 with billions of
                            products which duly meet your needs and result in
                            higher profit.
                          </p>
                        </li>
                        <li class='sbs-intro-item'>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/feature_1.png'
                            alt=''
                          />
                          <p>
                            Secure online transactions with alternative payment
                            methods and on time delivery.
                          </p>
                        </li>
                        <li class='sbs-intro-item'>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/feature_2.png'
                            alt=''
                          />
                          <p>
                            Drop-ship, wholesale bulk buy, white-label, or
                            custom products, we will get all your sourcing needs
                            covered.
                          </p>
                        </li>
                        <li class='sbs-intro-item'>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/feature_3.png'
                            alt=''
                          />
                          <p>
                            Our professional service team can fill all your
                            short and long-term wholesale merchandise needs.
                          </p>
                        </li>
                      </ul>
                    </section>
                  </section>
                  <section class='sbs-component sbs-service'>
                    <div class='sbs-section-title '>
                      <h3>What can you get from SBS?</h3>
                    </div>
                    <ul class='sbs-component-content p-0'>
                      <li class='sbs-service-item'>
                        <div class='sbs-service-img'>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/service_0.png'
                            alt=''
                          />
                          <div class='sbs-service-img-inset'>
                            <img
                              src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/inset_0.png'
                              alt=''
                            />
                            <p>Sourcing</p>
                          </div>
                        </div>
                        <ul>
                          <p>Expanding your products</p>
                          <li>
                            High quality valued products directly from China
                          </li>
                          <li>
                            Warehousing in Mainland China and Hong Kong(3-6
                            months free storage)
                          </li>
                          <li>
                            Mixed bulk purchasing, available to mix various
                            items
                          </li>
                          <li>Extremely low MOQ</li>
                          <li>Drop-ship</li>
                          <li>Product &amp; packaging customization</li>
                          <li>
                            Cardboard display stand and packaging materials
                            purchasing
                          </li>
                          <li>Door-to-door delivery</li>
                          <li>
                            Top performing and discounted products
                            recommendation
                          </li>
                          <li>Group buys</li>
                          <li>Quality inspection report</li>
                        </ul>
                      </li>
                      <li class='sbs-service-item'>
                        <div class='sbs-service-img'>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/service_1.png'
                            alt=''
                          />
                          <div class='sbs-service-img-inset'>
                            <img
                              src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/inset_1.png'
                              alt=''
                            />
                            <p>Marketing</p>
                          </div>
                        </div>
                        <ul>
                          <p>Marketing support</p>
                          <li>Digital documents</li>
                          <li>Market potential research of products</li>
                          <li>Product photography and videography</li>
                          <li>Brand and packaging</li>
                          <li>Brochures and flyers print</li>
                        </ul>
                      </li>
                    </ul>
                  </section>
                  <section className='sbs-component sbs-plan'>
                    <div class='sbs-section-title'>
                      <h3 className='text-white'>SBS offers</h3>
                    </div>
                    <div className='sbs-plan-content'>
                      <ul class='tabs-title p-0'>
                        <li class='active'>DROPSHIP</li>
                        <li class=''>FBA</li>
                        <li class=''>International Logistics</li>
                        <li class=''>One-stop services</li>
                      </ul>
                      <div
                        className='tabs-content-wrap'
                        style={{ marginLeft: "-360px" }}>
                        <ul
                          class='tabs-content en d-flex'
                          style={{ marginLeft: "-1125px" }}>
                          <li
                            class='tabs-content-item en '
                            style={{ marginLeft: "435px" }}>
                            <img
                              src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/tab_0.png'
                              alt=''
                            />
                            <div class='content-wrap'>
                              <h4>
                                Start your global e-commerce business easily
                                with a plugin that connects to Shopify
                                automatically
                              </h4>
                              <div class='content'>
                                <p class='subtitle'>
                                  One-Click Product Upload:
                                </p>
                                <p>
                                  With this function, you can access products
                                  from e-commerce platforms like Taobao, Tmall,
                                  1688, and JD fast. You can also change the
                                  description, pictures, and categories of the
                                  products based on your needs.{" "}
                                </p>
                                <p class='subtitle'>
                                  One-Click Order Fulfillment:
                                </p>
                                <p>
                                  To complete the shipping procedure of an
                                  order, you just need to confirm the purchase
                                  and forwarding request of the client. You have
                                  nothing to worry about as the system will
                                  handle everything for you automatically.
                                </p>
                                <p class='subtitle'>Warehousing Services</p>
                                <p>
                                  We offer professional warehousing services for
                                  your products, including quality inspection,
                                  product consolidation, and packaging
                                  customization. The parcels will be delivered
                                  to your clients directly through international
                                  shipping services.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li
                            class='tabs-content-item en '
                            style={{ marginLeft: "0px" }}>
                            <img
                              src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/tab_1.png'
                              alt=''
                            />
                            <div class='content-wrap'>
                              <h4>
                                For clients who already have Amazon stores or
                                clients who want to open their stores on Amazon,
                                we can customize the packaging of your products
                                and ship the products to the selected FBA
                                warehouse
                              </h4>
                              <div class='content'>
                                <p class='subtitle'>
                                  Professional Product Sourcing
                                </p>
                                <p>
                                  We will assign an account manager to each
                                  client. You will be reaching out the initial
                                  supplier as wished. We will source your
                                  products from platforms like 1688, Taobao, and
                                  Tmall. We will also negotiate with the
                                  suppliers and try to get the lowest price for
                                  you. There will be no communication barriers
                                  and you do not need to worry about the
                                  complicated procedures at all.
                                </p>
                                <p class='subtitle'>Warehouse Services</p>
                                <p>
                                  Our warehouse staff can inspect your products
                                  when they are stocked in or stocked out. We
                                  can remove or change the product labels for
                                  you. We can attach the FBA label onto your
                                  products or the packaging. We also offer
                                  product photo or video services. If you need
                                  something else, you can try our customization
                                  services.{" "}
                                </p>
                                <p class='subtitle'>FBA First-Leg</p>
                                <p>
                                  Ship your products to Amazon by air or by sea.
                                  We also offer worldwide express services that
                                  cover all major FBA warehouses. Our services
                                  are reasonably priced to fulfill your
                                  customized logistics needs.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li
                            class='tabs-content-item en '
                            style={{ marginLeft: "0px" }}>
                            <img
                              src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/tab_2.png'
                              alt=''
                            />
                            <div class='content-wrap'>
                              <h4>
                                With over 5 years of cross-border e-commerce
                                experience, we offer reliable international
                                logistics services
                              </h4>
                              <div class='content'>
                                <p class='subtitle'>Customized Logistics</p>
                                <p>
                                  Ship by sea, by air, or by land as you need,
                                  at exclusive discounts.
                                </p>
                                <p class='subtitle'>Express Shipping</p>
                                <p>
                                  Optimized forwarding procedure and faster
                                  warehousing operations. Global dropshipping
                                  with one click.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li
                            class='tabs-content-item en '
                            style={{ marginLeft: "0px" }}>
                            <img
                              src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/tab_3.png'
                              alt=''
                            />
                            <div class='content-wrap'>
                              <div class='content'>
                                <p class='subtitle'>
                                  1 to 1 Exclusive Account Manager
                                </p>
                                <p>
                                  We will assign an account manager to each
                                  client. The account manager will provide full
                                  support from product sourcing to technical
                                  services. Without complicated communication
                                  procedures, you can save a lot of time.
                                </p>
                                <p class='subtitle'>
                                  Selected Quality Products for Export
                                </p>
                                <p>
                                  We offer exclusive customized products like
                                  OEM packaging materials and gifts to business
                                  clients (MOQ:100).{" "}
                                </p>
                                <p class='subtitle'>
                                  Customized Supply Chain Management
                                </p>
                                <p>
                                  Depending on your needs, we provide
                                  comprehensive supply chain services to connect
                                  manufacturers and clients, and full range of
                                  international trading service solution.
                                </p>
                                <p class='subtitle'>
                                  OEM/ODM Business Projects
                                </p>
                                <p>
                                  We provide business clients with professional
                                  international business services like product
                                  design, sourcing, quality inspection, and
                                  manufacturing.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div class='control control-left '>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/left.png'
                            alt=''
                          />
                        </div>
                        <div class='control control-right '>
                          <img
                            src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/right.png'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class='sbs-component sbs-case'>
                    <div class='sbs-section-title '>
                      <h3>SBS would like to partner with</h3>
                    </div>
                    <ul class='sbs-component-content'>
                      <li class='sbs-case-item case-0'>
                        <p>E-commerce sellers</p>
                        <ul className='p-0'>
                          <li>
                            Third-party sellers on platforms like Amazon and
                            eBay
                          </li>
                          <li>
                            Sellers who have their own online shops on platforms
                            like Shopify
                          </li>
                          <li>Offline retailers who want to sell online</li>
                        </ul>
                      </li>
                      <li class='sbs-case-item case-1'>
                        <p>Cross-border logistics</p>
                        <ul className='p-0'>
                          <li>Users who need batch packing and shipping</li>
                          <li>
                            Users who want to split orders and ship parcels to
                            different users seperately
                          </li>
                          <li>
                            Users who need custom logistics or parcel shipping
                            services
                          </li>
                        </ul>
                      </li>
                      <li class='sbs-case-item case-2'>
                        <p>B2B</p>
                        <ul className='p-0'>
                          <li>Bulk purchasing projects</li>
                          <li>Product customization needs</li>
                        </ul>
                      </li>
                    </ul>
                  </section>
                  <div class='sbs-component sbs-more'>
                    <p>
                      One-click auto access of e-commerce business, to achieve
                      complete B2B service solution
                    </p>
                    <a href='#'>Learn More</a>
                  </div>
                  <section class='sbs-component sbs-partners'>
                    <div class='sbs-section-title '>
                      <h3>Partner platforms</h3>
                    </div>
                    <ul class='sbs-component-content'>
                      <li>
                        <img
                          src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/platform_0.png'
                          alt=''
                        />
                        <p>Taobao</p>
                      </li>
                      <li>
                        <img
                          src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/platform_1.png'
                          alt=''
                        />
                        <p>Tmall</p>
                      </li>
                      <li>
                        <img
                          src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/platform_2.png'
                          alt=''
                        />
                        <p>1688</p>
                      </li>
                      <li>
                        <img
                          src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/platform_3.png'
                          alt=''
                        />
                        <p>Xianyu</p>
                      </li>
                    </ul>
                  </section>
                  <div class='sbs-component sbs-rank'>
                    <div class='sbs-section-title '>
                      <h3>Products Recommendation</h3>
                    </div>
                    <div class='sbs-component-content'>
                      <section class='content rank'>
                        <div class='container lazy-container'>
                          <header class='homepage-header '>
                            <h3 class='title'></h3>
                          </header>
                          <section class='rank-list'>
                            <section class='rank-list'></section>
                            <section class='rank-list'></section>
                            <section class='rank-list'></section>
                          </section>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div class='star' id='star'>
                    <div>
                      <div class='text clearfix'>
                        <div>
                          <video
                            class='video'
                            preload='none'
                            poster='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/businessservice/video.jpg'>
                            <source
                              src='https://superbuy-daigou.oss-us-west-1.aliyuncs.com/video/2017/11/24/BuckyDrop-English-version.mp4'
                              type='video/mp4'
                            />
                          </video>
                        </div>
                        <dl>
                          <dt>Most Popular Project</dt>
                          <dd class='text detail-en'>
                            BuckyDrop offers a complete support solution for
                            online selling
                          </dd>
                          <dd class='text detail-en'>
                            BuckyDrop helps you source products from major
                            Chinese e-commerce platforms
                          </dd>
                          <dd class='text detail-en'>
                            BuckyDrop will inspect the product and provide you
                            with photos of the actual product
                          </dd>
                          <dd class='text detail-en'>
                            BuckyDrop will reinforce your parcels to make sure
                            that your products are safe during the
                            transportation
                          </dd>
                          <dd class='text detail-en'>
                            By partnering with dozens of international logistics
                            companies, BuckyDrop ships to over 200 countries and
                            regions
                          </dd>
                          <dd class='text detail-en'>
                            Customer Service Hours: 9:30-12:30 14:00-18:30
                            (Beijing Time)
                          </dd>
                          <dd>
                            <a
                              href='//www.buckydrop.com/en/home#index'
                              target='_blank'>
                              Learn More
                            </a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <section className='business-cooperation-outer business-cooperation-outer-en'>
                <section class='section-1 inner'>
                  <h2 class='common-title center'>If you are</h2>
                  <ul class='icon-list column p-0'>
                    <li>
                      <span class='icon customer-1'></span>
                      <span>A B2C e-commerce platform</span>
                    </li>
                    <li>
                      <span class='icon customer-2'></span>
                      <span>A self-owned online store</span>
                    </li>
                    <li>
                      <span class='icon customer-3'></span>
                      <span>A sourcing service provider</span>
                    </li>
                    <li>
                      <span class='icon customer-4'></span>
                      <span>A logistics service provider</span>
                    </li>
                    <li>
                      <span class='icon customer-5'></span>
                      <span>A warehousing service provider</span>
                    </li>
                    <li>
                      <span class='icon customer-6'></span>
                      <span>Other e-commerce players</span>
                    </li>
                  </ul>
                </section>
                <section class='section-2 outer'>
                  <section class='inner'>
                    <h2 class='common-title center text-white text-center'>
                      We would like to work with you for
                    </h2>
                    <ul class='icon-list row list-3'>
                      <li>
                        <span class='icon cooperations-1'></span>
                        <span>Product (order) interactive cooperation</span>
                      </li>
                      <li>
                        <span class='icon cooperations-2'></span>
                        <span>Payment (order) interactive cooperation</span>
                      </li>
                      <li>
                        <span class='icon cooperations-3'></span>
                        <span>After-sales (order) interactive cooperation</span>
                      </li>
                      <li>
                        <span class='icon cooperations-4'></span>
                        <span>Warehousing (order) interactive cooperation</span>
                      </li>
                      <li>
                        <span class='icon cooperations-5'></span>
                        <span>Logistics (order) interactive cooperation</span>
                      </li>
                      <li>
                        <span class='icon cooperations-6'></span>
                        <span>BuckyDrop plugin</span>
                      </li>
                    </ul>
                  </section>
                </section>
                <section class='section-3 inner'>
                  <h2 class='common-title center'>Why Choose Superbuy</h2>
                  <ul class='icon-list column p-0'>
                    <li>
                      <span class='icon reason-1'></span>
                      <span>Over 1.49 million registered users</span>
                    </li>
                    <li>
                      <span class='icon reason-2'></span>
                      <span>Footprint in over 185 countries</span>
                    </li>
                    <li>
                      <span class='icon reason-3'></span>
                      <span>Offers over 300 million SKU</span>
                    </li>
                    <li>
                      <span class='icon reason-4'></span>
                      <span>Over 8 million SKU shipped</span>
                    </li>
                    <li>
                      <span class='icon reason-5'></span>
                      <span>Ships to over 180 countries and regions</span>
                    </li>
                    <li>
                      <span class='icon reason-6'></span>
                      <span>80% repurchase rate</span>
                    </li>
                  </ul>
                </section>
                <section class='section-4 outer'>
                  <section class='inner'>
                    <h2 class='common-title center'>Successful Cases</h2>
                    <ul class='case-list p-0'>
                      <li>
                        <span class='avatar'></span>
                        <span class='userName'>
                          Ruby Sligo<em>(Ruby Sligo)</em>
                        </span>
                        <span class='des'>
                          I usually spend a lot of time communicating with
                          vendors which took a lot of my time. With Superbuy
                          SBS, I never had to speak to a vendor again and they
                          can handle all after-sales follow up for me. You
                          wouldn't believe it until you have tried it.
                        </span>
                      </li>
                      <li>
                        <span class='avatar'></span>
                        <span class='userName'>
                          Corey M. Rand<em>(United States)</em>
                        </span>
                        <span class='des'>
                          You can literally buy everything from China! My
                          favorite are shops in Taobao and Tmall. They also
                          provide complimentary quality inspection service order
                          automation that made scaling my business so easy.
                        </span>
                      </li>
                    </ul>
                  </section>
                </section>
                <section class='section-5 outer'>
                  <section class='inner'>
                    <h2 class='common-title center text-white text-center'>
                      Available APIs in near soon
                    </h2>
                    <ul class='icon-list column p-0'>
                      <li>
                        <span class='icon future-1'></span>
                        <span>Membership</span>
                      </li>
                      <li>
                        <span class='icon future-2'></span>
                        <span>Product</span>
                      </li>
                      <li>
                        <span class='icon future-3'></span>
                        <span>Order</span>
                      </li>
                      <li>
                        <span class='icon future-4'></span>
                        <span> payment</span>
                      </li>
                      <li>
                        <span class='icon future-5'></span>
                        <span>LOGISTICS</span>
                      </li>
                      <li>
                        <span class='icon future-6'></span>
                        <span>Order status</span>
                      </li>
                      <li>
                        <span class='icon future-7'></span>
                        <span>More</span>
                      </li>
                    </ul>
                  </section>
                </section>
              </section>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Channel;
