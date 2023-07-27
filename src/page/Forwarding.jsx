import React from "react";
import "../style/forwarding.css";
import TransportBanner from "../components/UI/TransportBanner";
import { bannerSlider } from "../assets/data/bannerSlider";
import CalculatorTool from "../components/CalculatorTool/CalculatorTool";

const Forwarding = () => {
  return (
    <>
      <section className="transport transport-container">
        <section className="transport-container-content">
          <TransportBanner items={bannerSlider} />
          <section className="transport-information">
            <CalculatorTool />
            <section className="send-express-plan">
              <div class="plan-header d-flex align-items-center justify-content-between">
                <h2 style={{ fontSize: "20px", fontWeight: 700 }}>
                  Shipping Plan
                </h2>
                <a
                  href="/en/page/query/freight/#tabIndex=1"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "#999999",
                    fontSize: "12px",
                  }}
                >
                  More &gt;
                </a>
              </div>
            </section>
          </section>
          <section class="transport-title">
            <h2 class="transport-title">Start Forward</h2>
          </section>
          <section class="common-block transport-warehouse-select">
            <h2
              class="common-title d-flex justify-content-center"
              style={{ fontSize: "12px" }}
            >
              <span class="title">
                Select the warehouse to ship your forwarding items
              </span>
              <p class="select-tips m-0" style={{ color: "#999999" }}>
                Notice:The South China Warehouse does not accept packages from
                Tmall Global and overseas markets (including Hong Kong, Macao
                and Taiwan) to Mainland China.
              </p>
            </h2>
            <div class="warehouse-select-area">
              <div class="select-row d-flex align-items-center mt-2 position-relative">
                <div class="ant-select ant-select-enabled ">
                  <div
                    class="ant-select-selection
            ant-select-selection--single "
                    role="combobox"
                    aria-autocomplete="list"
                    aria-haspopup="true"
                    aria-controls="7d2e75b0-4d79-4ec0-ff03-47be029cf4e1"
                    aria-expanded="false"
                    tabindex="0"
                  >
                    <div class="ant-select-selection__rendered">
                      <div
                        class="ant-select-selection-selected-value"
                        title="Guangdong Warehouse"
                      >
                        Guangdong Warehouse
                      </div>
                    </div>
                    <span class="ant-select-arrow" unselectable="on">
                      <i class="ri-arrow-drop-down-line"></i>
                    </span>
                  </div>
                </div>
                <p class="copy-btn mb-0">1 click copy all</p>
                <p class="show-warehouse-address mb-0">
                  view the warehouse address
                </p>
              </div>
            </div>
          </section>
          <section className="common-block transport-express-information">
            <h2
              class="common-title d-flex justify-content-between"
              style={{ fontSize: "12px" }}
            >
              <span class="title">
                Fill in the forward express information<em>(Not required)</em>
              </span>
              <span class="tips m-0" style={{ color: "#999999" }}>
                Please do not reveal the tracking number to anyone,which is
                aunique identifier that proves the package belongs to you.
              </span>
            </h2>
            <div className="transport-input-wrapper d-flex align-items-center">
              <div class="warehouse-select-area mt-4">
                <div class="select-row d-flex align-items-center mt-2 position-relative">
                  <div class="ant-select ant-select-enabled ">
                    <div
                      class="ant-select-selection
            ant-select-selection--single "
                      role="combobox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                      aria-controls="7d2e75b0-4d79-4ec0-ff03-47be029cf4e1"
                      aria-expanded="false"
                      tabindex="0"
                    >
                      <div class="ant-select-selection__rendered">
                        <div
                          class="ant-select-selection-selected-value"
                          title="Guangdong Warehouse"
                        >
                          Guangdong Warehouse
                        </div>
                      </div>
                      <span class="ant-select-arrow" unselectable="on">
                        <i class="ri-arrow-drop-down-line"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ant-form-item-control">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter the tracking number"
                />
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Forwarding;
