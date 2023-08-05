import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "../style/product-detail.css";
import products from "../assets/data/product";
import useHandleQuantity from "../const/handleQuantity";
import ProductRecomList from "../components/ProductRecom/ProductRecomList";

const toolbarBtn = [
  { name: "Product Details", value: "productDetail" },
  { name: "Shopping Agent Notes", value: "shoppingAgent" },
  { name: "After Sales Service", value: "saleService" },
  { name: "CEO tips", value: "ceoTip" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [selected, setSelected] = useState(0);
  const [imageDetail, setImageDetail] = useState(0);
  const productDetail = useRef(null);
  const shoppingAgent = useRef(null);
  const saleService = useRef(null);
  const ceoTip = useRef(null);
  const product = products.find((item) => item.id === id);
  const productRecomend = products.filter(
    (item) => item.category === product.category
  );
  const { quantity, handleDecrease, handleIncrease, addToCart } =
    useHandleQuantity(product);
  const handleActive = (id) => {
    setSelected(id);
  };
  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const productImage = [
    {
      image: product.imgUrl,
      productName: product.productName,
    },
    {
      image: product.imgUrl,
      productName: product.productName,
    },
    {
      image: product.imgUrl,
      productName: product.productName,
    },
    {
      image: product.imgUrl,
      productName: product.productName,
    },
    {
      image: product.imgUrl,
      productName: product.productName,
    },
  ];
  const handleMouseImgae = (id) => {
    setImageDetail(id);
  };
  return (
    <>
      <div className='m-buy'>
        <div className='buy-wrap'>
          <div className='buy-main position-relative'>
            <div className='goods-info-header_container d-flex'>
              <div className='goods-info_container card-wrap'>
                <div className='buy-preview'>
                  <div className='preview-window'>
                    <img
                      src={productImage[imageDetail].image}
                      alt={productImage[imageDetail].productName}
                      class='goods-img_preview'
                    />
                  </div>
                  <div className='preview-list'>
                    <ul className='clearfix'>
                      {productImage.map((item, index) => (
                        <li
                          key={index}
                          className={imageDetail === index ? "active" : ""}
                          onMouseEnter={() => handleMouseImgae(index)}>
                          <img src={item.image} alt={item.productName} />
                        </li>
                      ))}
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
                      <em class=''>{product.avgRating}</em>Overall
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
            <div class='goods-remark_container card-wrap'>
              <div class='buy-reasons'>
                <div class='buy-reasons-title'>
                  SUPERBUY 10's SHOPPING AGENTLEADING POSITION
                </div>
                <dl class='d-flex alidn-items-center justify-content-between mt-3'>
                  <dd>
                    <p>Covers All Chinese E-Commerce Platforms</p>
                  </dd>
                  <dd>
                    <p>0 Service Fee</p>
                  </dd>
                  <dd>
                    <p>Free Storage</p>
                  </dd>
                  <dd>
                    <p>Enrich Logistics Routes</p>
                  </dd>
                  <dd>
                    <p>7x9h Quality Customer Service</p>
                  </dd>
                </dl>
              </div>
            </div>
            <section className='goods-detail_container d-flex'>
              <section className='goods-detail_left d-flex flex-column'>
                <div class='buy-activities'>
                  <h2>Hot Topics</h2>
                  <a
                    class='buy-activities-img'
                    href='https://www.superbuy.com/en/page/subject/?id=21964&amp;htag=18pc-sx1'>
                    <img
                      src='https://img1.superbuy.com/images/daigou-admin/2023/06/15/083cb9a7-88fa-4403-82bf-a7d29a716c55.png?x-oss-process=image/resize,w_200/format,jpg'
                      alt=''
                    />
                  </a>
                  <a
                    class='buy-activities-img'
                    href='https://www.superbuy.com/en/page/subject/?id=20915&amp;htag=18pc-sx1'>
                    <img
                      src='https://img1.superbuy.com/images/daigou-admin/2022/03/24/078d9205-44e8-4a5c-9527-e8eee43e0884.png?x-oss-process=image/resize,w_200/format,jpg'
                      alt=''
                    />
                  </a>
                  <a
                    class='buy-activities-img'
                    href='https://www.superbuy.com/en/page/subject/?id=21786&amp;htag=18pc-sx5en'>
                    <img
                      src='https://img1.superbuy.com/images/daigou-admin/2022/06/20/ce1b7bd0-d774-40cc-b8eb-19c5bca1cb9c.png?x-oss-process=image/resize,w_200/format,jpg'
                      alt=''
                    />
                  </a>
                </div>
                <section className='recommend-container'>
                  <h2
                    className='d-flex align-items-center justify-content-between'
                    style={{ background: "#fff" }}>
                    <a class='title' href='/en/page/subject/?id=21683'>
                      <span>Popular </span>
                    </a>
                    <a href='/en/page/subject/?id=21683'>More &gt;</a>
                  </h2>
                  <ProductRecomList data={productRecomend} />
                </section>
              </section>
              <section className='goods-detail_right'>
                <div class='buy-toolbar clearfix'>
                  <div className='haha'>
                    <nav class='toolbar-btns'>
                      {toolbarBtn.map((item, index) => (
                        <p
                          key={index}
                          onClick={() => {
                            handleActive(index);
                            switch (item.value) {
                              case "productDetail":
                                scrollToSection(productDetail);
                                break;
                              case "shoppingAgent":
                                scrollToSection(shoppingAgent);
                                break;
                              case "saleService":
                                scrollToSection(saleService);
                                break;
                              case "ceoTip":
                                scrollToSection(ceoTip);
                                break;
                              default:
                                break;
                            }
                          }}
                          className={selected === index ? "active" : ""}>
                          {item.name}
                        </p>
                      ))}
                    </nav>
                    {/* <button class=' toolbar-addGoods'>Add To Cart</button> */}
                  </div>
                </div>
                <div className='buy-detailContent'>
                  <div style={{ height: "10px" }}></div>
                  <div
                    ref={productDetail}
                    className='card-wrap'
                    id='goods-detail'>
                    <div className='detail-box'>
                      <div className='detail-goodsDetail'>
                        <p>
                          <img src='https://img.alicdn.com/imgextra/i4/1981978776/O1CN01IPHB0z2EhSW0SYTTe_!!1981978776.jpg' />
                          <img src='https://img.alicdn.com/imgextra/i2/1981978776/O1CN01opv19r2EhSVzP9UBT_!!1981978776.jpg' />
                          <img src='https://img.alicdn.com/imgextra/i1/1981978776/O1CN015nh0L32EhSW077PmG_!!1981978776.jpg' />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "20px" }}></div>
                  <div ref={shoppingAgent} className='card-wrap'>
                    <div className='detail-box goods-note-content'>
                      <div class='detail-title' id='aDgxz'>
                        <h3>Shopping Agent Notes</h3>
                      </div>
                      <p>
                        <a class='detail-subTitle'>
                          Prohibited and limited items
                        </a>
                      </p>
                      <ul className='detail-forbidden clearfix p-0'>
                        <li>
                          <div className='d-flex'>
                            <span>· Cigarette, alcohol, Contraband</span>
                            <em>Do not accept</em>
                          </div>
                          <i class='detail-forbidden-icon'></i>
                        </li>
                        <li>
                          <p>
                            · Liquid, cream or cosmetics items are quantity
                            limited in shopping agent service.','Liquid, cream
                            or cosmetics items are quantity limited in shopping
                            agent service.<em>Do not accept</em>
                          </p>
                          <i class='detail-forbidden-icon'></i>
                        </li>
                        <li>
                          <p>
                            · Chinese medicine is limited to ship by Chinese
                            exporting goods.
                          </p>
                          <i class='detail-forbidden-icon'></i>
                        </li>
                      </ul>
                      <a class='detail-subTitle'>
                        Limitation for different logistics company
                      </a>
                      <table class='detail-expressTable'>
                        <tbody>
                          <tr>
                            <th></th>
                            <th>Duty-Free Air Express</th>
                            <th>EMS</th>
                            <th>DHL</th>
                            <th>EUB</th>
                          </tr>
                          <tr>
                            <td>A small amount of liquid</td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class='disabled'>- -</td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Perfume</td>
                            <td class='disabled'>- -</td>
                            <td class='disabled'>- -</td>
                            <td class='disabled'>- -</td>
                            <td class='disabled'>- -</td>
                          </tr>
                          <tr>
                            <td>Gas</td>
                            <td class='disabled'>- -</td>
                            <td class='disabled'>- -</td>
                            <td class='disabled'>- -</td>
                            <td class='disabled'>- -</td>
                          </tr>
                          <tr>
                            <td>CDs</td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Brands</td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Medicine</td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class='disabled'>- -</td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Health care</td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class='disabled'>- -</td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                          </tr>
                          <tr>
                            <td>Batteries</td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class='disabled'>- -</td>
                            <td class='disabled'>- -</td>
                            <td class='disabled'>- -</td>
                          </tr>
                          <tr>
                            <td>Electronic products(without batteries)</td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                            <td class=''>
                              <i class='ok'></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <a class='detail-subTitle'>
                        volumetric weight limitation
                      </a>
                      <div className='detail-expressVolume clearfix detail-expressVolume-en'>
                        <dl>
                          <dt>
                            Overlength/overweight charges are incurred if any
                            side of the parcel &gt; 120cm or the actual weight
                            of a single shipment ＞70kg; parcels cannot be sent
                            if the longest side＞270cm or the second longest
                            side ＞160cm.
                          </dt>
                          <dd>Length cm * width cm * height cm/5000</dd>
                        </dl>
                        <dl>
                          <dt>
                            Fees are charged based on the greater of the actual
                            weight and the volume weight if any side of the
                            parcel ≥ 60cm; volume weight (kg)= length (cm)
                            ×width (cm) × height (cm) /6,000; fees are charged
                            by the actual weight if each of the three sides &lt;
                            60cm.
                          </dt>
                          <dd></dd>
                        </dl>
                        <dl>
                          <dt>
                            Parcels cannot be sent if any side &gt; 120cm.
                          </dt>
                          <dd>
                            Fees are charged based on the greater of the actual
                            weight and the volume weight.
                          </dd>
                        </dl>
                        <dl>
                          <dt>
                            The parcel cannot be shipped if the side length is
                            over 60 cm.
                          </dt>
                          <dd>According to the actual weight (kg) </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "20px" }}></div>
                  <div ref={saleService} class='card-wrap after-sale-service'>
                    <div class='detail-box detail-afterSales'>
                      <div class='detail-title' id='aShfw'>
                        <h3>After Sales Service</h3>
                        <i></i>
                      </div>
                      <div>
                        <p>Logistics Query</p>
                        <nav>
                          <p>
                            <a href='//www.superbuy.com/en/page/help/#p4_53_helpId2'>
                              Parcels receiving Notices
                            </a>
                          </p>
                          <p>
                            <a href='//www.superbuy.com/en/page/help/#p4_53_helpId49'>
                              What does 'Not yet delivered' mean?
                            </a>
                          </p>
                          <p>
                            <a href='//www.superbuy.com/en/page/help/#p4_53_helpId90'>
                              'How to find the parcel logistic information after
                              it has been sent out from warehouse?
                            </a>
                          </p>
                          <p>
                            <a href='//www.superbuy.com/en/page/help/#p4_53_helpId8'>
                              How to track my parcel after it has been sent out
                              from warehouse?
                            </a>
                          </p>
                        </nav>
                        <div style={{ height: "30px" }}></div>
                      </div>
                      <div>
                        <p>Products Abnormal</p>
                        <nav>
                          <p>
                            <a href='//www.superbuy.com/en/page/help/#p4_54_helpId79'>
                              About the packaging details
                            </a>
                          </p>
                          <p>
                            <a href='//www.superbuy.com/en/page/help/#p4_54_helpId31'>
                              What do I do if there is a product issue after I
                              received it?
                            </a>
                          </p>
                          <p>
                            <a href='//www.superbuy.com/en/page/help/#p4_54_helpId16'>
                              What do I do if my fragile products have been
                              damaged?
                            </a>
                          </p>
                          <p>
                            <a href='//www.superbuy.com/en/page/help/#p2_14_helpId178'>
                              Can the Shopping Agent orders be cancelled or
                              refunded?
                            </a>
                          </p>
                        </nav>
                        <div style={{ height: "30px" }}></div>
                      </div>
                      <div>
                        <p>Parcel lost</p>
                        <nav>
                          <p>
                            <a href='//www.superbuy.com/en/page/help/#p4_55_helpId148'>
                              Insurance and compensation
                            </a>
                          </p>
                          <p>
                            <a href='//www.superbuy.com/en/page/help/#search_helpId1172'>
                              The inspection rules of the Shopping Agent Service
                            </a>
                          </p>
                          <p>
                            <a href='//www.superbuy.com/en/page/help/#p4_55_helpId14'>
                              Websites says items in stock, but why Superbuy
                              says out of stock?
                            </a>
                          </p>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "20px" }}></div>
                  <div class='card-wrap shopping-agent-flow'>
                    <div></div>
                    <h3 class='buy-delivery-title'>Shopping Agent Process</h3>
                    <div class='content en'></div>
                  </div>
                  <div class='promise-service_list goods-options' id='aZysx'>
                    <h4>Note</h4>
                    <ul
                      class='warning-tips_list p-0'
                      id='step3-service-promise'>
                      <li>
                        <p class='waring-title'>deliver risk of food</p>
                        <p class='warning-content'>
                          Those products are restricted by the customs and they
                          can only be shipped by selected logistics providers.
                          Also, there is a possibility that the parcel will be
                          confiscated, inspected, or destroyed by the customs.
                          Please select sealed products products that will not
                          expire in 30 days and could be stored at room
                          temperature since the parcel might get wet or be
                          damaged during the transportation. If you insist on
                          ordering such products, the logistics provider and the
                          seller will not be responsible for any consequences.
                        </p>
                      </li>
                      <li>
                        <p class='waring-title'>Un-returnable Service </p>
                        <p class='warning-content'>
                          This product does not accept return/exchange according
                          to the seller store policy,the return request will be
                          declined after it is purchased, we are not responsible
                          for any consequences if you insist on ordering such
                          product
                        </p>
                      </li>
                      <li>
                        <p class='waring-title'>Detailed Inspection</p>
                        <p class='warning-content'>
                          <span>
                            Check product details including quantity, color, and
                            size.
                          </span>
                          <a
                            target='_blank'
                            href='/en/page/help/#search_helpId1172'>
                            View details&gt;
                          </a>
                        </p>
                      </li>
                      <li>
                        <p class='waring-title'>Pack with care</p>
                        <p class='warning-content'>
                          <span></span>
                        </p>
                      </li>
                      <li>
                        <p class='waring-title'>Lower exchange loss</p>
                        <p class='warning-content'>
                          <span></span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div style={{ height: "10px" }}></div>
                  <div ref={ceoTip} class='card-wrap' id='aCeots'>
                    <div class='detail-header'>
                      <div class='detail-title'>
                        <h3>CEO tips</h3>
                      </div>
                      <p>
                        1. [About Customs] due to the differences of countries
                        customs policies, some items are sensitive. So that
                        prohibited items, limited items, limited logistics, and
                        limited weight and volume are existed. To read more,
                        please click
                        <a href=' '>【Shopping Agent Notes】</a>
                      </p>
                      <p style={{ marginTop: " 12px" }}>
                        2. [About after-sales] if you have any enquires
                        regarding to the items, packaging, and logistics, please
                        contact our online customer services or telephone
                        customer services in +86-755-33085566. We will answer
                        your question as soon as possible. To read more, please
                        click<a href=' '>【After Sales Service】</a>
                      </p>
                      <p style={{ marginTop: " 12px" }}>
                        3.[About items] If you choose the items because of
                        quality is too poor, the price is too high, no time to
                        choose or do not know how to buy and other issues, you
                        can try expert services to solve your shopping
                        problems.To read more, please click
                        <a href='//www.superbuy.com/en/page/eptpurchase/'>
                          【Expert services】
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
