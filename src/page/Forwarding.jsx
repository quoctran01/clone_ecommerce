import React, { useState } from "react";
import "../style/forwarding.css";
import "../style/custom-scrollbar.css";
import TransportBanner from "../components/UI/TransportBanner";
import { bannerSlider } from "../assets/data/bannerSlider";
import CalculatorTool from "../components/CalculatorTool/CalculatorTool";
import ProductShipping from "../components/ProductShipping/ProductShipping";

const warehouse = ["Guangdong Warehouse", "HongKong Warehouse"];
const informationShip = [
  " Deppon Express",
  "Zto Express ",
  "Fedex",
  "Yunda Express",
  "Yto Express",
  "Sto Express ",
  " EMS",
  " Other ",
  "JingDong",
  "JITU Express ",
  " ZJS Express ",
  "Best Express",
  "SF Express",
];

const Forwarding = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowInf, setIsShowInf] = useState(false);
  const [onSelect, setOnSelect] = useState(0);
  const [onSelectInfor, setOnselectInfor] = useState(0);
  const [itemSelected, setItemSelected] = useState("Guangdong Warehouse");
  const [itemSelectedShip, setIsShowInfShip] = useState(
    "Choose logistics company"
  );
  const [inputValue, setInputValue] = useState(1);
  const handleSelect = (index, item) => {
    setOnSelect(index);
    setIsShow(false);
    setItemSelected(item);
  };
  const handleSelectShip = (index, item) => {
    setIsShowInfShip(item);
    setOnselectInfor(index);
    setIsShowInf(false);
  };

  const handleChangeInput = (type) => {
    if (type === "reduce") {
      if (inputValue <= 1) return;
      setInputValue(inputValue - 1);
    }
    if (type === "add-on") {
      setInputValue(inputValue + 1);
    }
  };
  return (
    <>
      <section className='transport transport-container'>
        <section className='transport-container-content'>
          <TransportBanner items={bannerSlider} />
          <section className='transport-information'>
            <CalculatorTool />
            <section className='send-express-plan'>
              <div
                class='plan-header d-flex align-items-center justify-content-between'
                style={{ padding: " 20px 20px 0" }}>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                  }}>
                  Shipping Plan
                </h2>
                <a
                  href='/en/page/query/freight/#tabIndex=1'
                  target='_blank'
                  style={{
                    textDecoration: "none",
                    color: "#999999",
                    fontSize: "12px",
                  }}>
                  More &gt;
                </a>
              </div>
              <div className='produc-shipping-wrapper'>
                <ProductShipping />
                <ProductShipping />
                <ProductShipping />
                <ProductShipping />
              </div>
            </section>
          </section>
          <section class='transport-title'>
            <h2 class='transport-title'>Start Forward</h2>
          </section>
          <section class='common-block transport-warehouse-select'>
            <h2
              class='common-title d-flex justify-content-center'
              style={{ fontSize: "12px" }}>
              <span class='title'>
                Select the warehouse to ship your forwarding items
              </span>
              <p class='select-tips m-0' style={{ color: "#999999" }}>
                {itemSelected === "Guangdong Warehouse"
                  ? "Notice:The South China Warehouse does not accept packages from Tmall Global and overseas markets (including Hong Kong, Macao and Taiwan) to Mainland China."
                  : "Notice:Superbuy Hong Kong Warehouse only accepts parcels that are shipped to countries and regions (Hong Kong, Macau, and Taiwan) other than Mainland China."}
              </p>
            </h2>
            <div class='warehouse-select-area'>
              <div class='select-row d-flex align-items-center mt-2 position-relative'>
                <div class='ant-select ant-select-enabled '>
                  <div
                    class='ant-select-selection
            ant-select-selection--single '
                    role='combobox'
                    aria-autocomplete='list'
                    aria-haspopup='true'
                    aria-controls='7d2e75b0-4d79-4ec0-ff03-47be029cf4e1'
                    aria-expanded='false'
                    tabindex='0'
                    onClick={() => setIsShow(!isShow)}>
                    <div class='ant-select-selection__rendered'>
                      <div
                        class='ant-select-selection-selected-value'
                        title='Guangdong Warehouse'>
                        {itemSelected}
                      </div>
                      {isShow && (
                        <ul className='p-0 ant-select-selection__items'>
                          {warehouse.map((item, index) => (
                            <li
                              key={index}
                              className={`${onSelect === index && "active"}`}
                              onClick={() => handleSelect(index, item)}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <span
                      class='ant-select-arrow ant-select-arrow__forward'
                      unselectable='on'>
                      <i class='ri-arrow-drop-down-line'></i>
                    </span>
                  </div>
                </div>
                <p class='copy-btn mb-0'>1 click copy all</p>
                <p class='show-warehouse-address mb-0'>
                  view the warehouse address
                  <div
                    className='show-warehouse-address--active'
                    style={{
                      position: "absolute",
                      width: "100%",
                      background: "#fff !important",
                      top: "-104px",
                      left: "-332px",
                    }}>
                    <div class='ant-tooltip-content '>
                      <div
                        class='ant-tooltip-inner'
                        style={{ color: "#333" }}
                        role='tooltip'>
                        <div class='warehouse-info'>
                          <div class='info-row d-flex justify-content-between'>
                            <p>
                              <span>Recipient</span>
                              <span>黄伟军(0)</span>
                            </p>
                            <p>
                              <span>Cellphone</span>
                              <span>13352789806</span>
                            </p>
                            <p>
                              <span>Telephone</span>
                              <span>0752 3312969</span>
                            </p>
                            <p>
                              <span>Zip code</span>
                              <span>516000</span>
                            </p>
                          </div>
                          <div class='info-row'>
                            <p>
                              <span>Address</span>
                              <span>
                                广东省 惠州 惠城区
                                水口街道东江高新科技产业园兴运东路1号鼎晟盛威智慧科技园3栋4楼
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </section>
          <section className='common-block transport-express-information'>
            <h2
              class='common-title d-flex justify-content-between'
              style={{ fontSize: "12px" }}>
              <span class='title'>
                Fill in the forward express information<em>(Not required)</em>
              </span>
              <span class='tips m-0' style={{ color: "#999999" }}>
                Please do not reveal the tracking number to anyone,which is
                aunique identifier that proves the package belongs to you.
              </span>
            </h2>
            <div className='transport-input-wrapper d-flex align-items-center'>
              <div class='warehouse-select-area mt-4'>
                <div class='select-row d-flex align-items-center mt-2 position-relative'>
                  <div class='ant-select ant-select-enabled '>
                    <div
                      class='ant-select-selection
            ant-select-selection--single '
                      role='combobox'
                      aria-autocomplete='list'
                      aria-haspopup='true'
                      aria-controls='7d2e75b0-4d79-4ec0-ff03-47be029cf4e1'
                      aria-expanded='false'
                      tabindex='0'
                      onClick={() => setIsShowInf(!isShowInf)}>
                      <div class='ant-select-selection__rendered'>
                        <div
                          class='ant-select-selection-selected-value'
                          title='Choose logistics company'>
                          {itemSelectedShip}
                        </div>
                        {isShowInf && (
                          <ul className='p-0 ant-select-selection__items custom-scrollbar'>
                            {informationShip.map((item, index) => (
                              <li
                                key={index}
                                onClick={() => handleSelectShip(index, item)}
                                className={`${
                                  onSelectInfor === index && "active"
                                }`}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <span
                        class='ant-select-arrow ant-select-arrow__forward'
                        unselectable='on'>
                        <i class='ri-arrow-drop-down-line'></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='ant-form-item-control'>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Enter the tracking number'
                />
              </div>
            </div>
          </section>
          <section className='common-block transinfor transport-tools'>
            <div className='transport-tools_inner'>
              <h2
                class='common-title d-flex justify-content-between'
                style={{ fontSize: "12px" }}>
                <span class='title'>Forward item information</span>
                <p class='tips m-0' style={{ color: "#999999" }}>
                  <em>Friendly Reminder: </em>
                  <span title='Product such as gold jewelry, securities, animals and plants, seeds, drugs, knives, lighters, batteries, bulk liquids and chemical powders can’t ship to overseas due to customs restrictions.'>
                    Product such as gold jewelry, securities, animals and
                    plants, seeds, drugs, knives, lighters, batteries, bulk
                    liquids and chemical powders can’t ship to overseas due to
                    customs restrictions.
                  </span>
                  <a target='_brank' href='/en/page/help/#p8_40_helpId33'>
                    View details
                  </a>
                </p>
              </h2>
              <div className='transbox transport-tools_content'>
                <ul className='transbox-ul d-flex m-0 p-0'>
                  <li class='transbox-li'>
                    <input
                      type='text'
                      placeholder='Fill in the item name&nbsp;or&nbsp;paste&nbsp;item&nbsp;URL'
                      class='pro error'
                      value=''
                    />
                  </li>
                  <li className='classification-row d-flex position-relative'>
                    <div className='classification-select-box-wrapper position-relative'>
                      <input
                        type='text'
                        placeholder='Select item category'
                        class='protype error'
                        value=''
                      />
                      <i class='ri-arrow-drop-down-line'></i>
                    </div>
                    <div className='operation-reduce-and-add d-flex ms-2'>
                      <span
                        class='reduce'
                        onClick={() => handleChangeInput("reduce")}></span>
                      <input type='text' class='pronumb' value={inputValue} />
                      <span
                        class='add-on'
                        onClick={() => handleChangeInput("add-on")}></span>
                    </div>
                    <div class='transport-price'>
                      <em>¥ </em>
                      <input
                        type='text'
                        placeholder='Unit price'
                        class='price error'
                        value=''
                      />
                    </div>
                  </li>
                  <li class='remark'>
                    <input
                      type='text'
                      placeholder='Can remake the size, color or other information'
                      class='protips error'
                      value=''
                    />
                  </li>
                  <li class='submit'>
                    <button type='button' class='submit-add'>
                      <span>Add to list</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className='buttbox'>
            <div class='button-top'>
              <div class='myinfor d-flex justify-content-center'>
                <label for='confirmServerRules'>
                  <input id='confirmServerRules' type='checkbox' />
                  <p
                    className='m-0'
                    style={{ color: "#666", fontSize: "12px" }}>
                    viewed and agree
                    <span>
                      <a
                        style={{ textDecoration: "none" }}
                        target='_blank'
                        href='/en/page/help/?spm=2101.892.N.N.5171c98#search_helpId129'>
                        &lt;Forward parcel inspection rules and service
                        agreement&gt;
                      </a>
                    </span>
                  </p>
                </label>
              </div>
              <button
                disabled='true'
                type='button'
                class='ant-btn ant-btn-primary'>
                <span>Submit</span>
              </button>
            </div>
          </div>
          <div class='transport-warning'>
            <ul className='m-0 p-0'>
              <li class='title' style={{ color: "#333" }}>
                Notice:
              </li>
              <li>
                1、According to customs policy, all parcels will be unboxed to
                screen for prohibited goods. Thank you for your understanding.{" "}
                <a href='/en/page/help/#p2_16_helpId132' target='_blank'>
                  {" "}
                  View details &gt;
                </a>
              </li>
              <li>
                3、Please go to the order list to complete the logistics
                information within 15 days after the order is verified (for
                orders that require manual review, please confirm the risk
                information in time);
              </li>
              <li>
                4、If the package you send to the Superbuy warehouse has not
                filled in the logistics information in time, or the forwarding
                orders are not submitted in time and sent directly to our
                warehouse will be judged as abnormal. The storage period of
                abnormal parts is only 60 days. If the abnormal items remain in
                the warehouse for more than 60 days due to the user's incomplete
                logistics information, Superbuy will handle the overdue
                processing of the transshipment goods, and the ownership of the
                goods will be owned by the Superbuy platform at that time;
              </li>
              <li>
                5、Please confirm the number of packages and logistics numbers
                with the sender in advance. If the transshipment package is
                multiple pieces in one ticket or a parent-child package, please
                submit the corresponding order for each package with a single
                number and fill in the corresponding logistics order number. For
                example, there are 3 logistics order numbers in one ticket. ,
                and fill in the logistics number of the 3 packages;
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
};

export default Forwarding;
