import React from "react";
import "../style/shopping-agent.css";
import { contentAds } from "../assets/data/contentAds";
import LayoutContent from "../components/UI/LayoutContent";
import { sliderAgent } from "../assets/data/bannerSlider";
import UseSlider from "../const/useSlider";

const Shoppingagent = () => {
  return (
    <>
      <div className="m-wrap">
        <div className="m-main">
          <section className="layout">
            <section className="layout-header">
              <header className="shopping-agent">
                <div className="title-content">
                  <h1>SELECTED QUALITY CHINESE PRODUCTS FOR YOU!</h1>
                  <div className="title-content__icon_en">
                    <div className="icon-item">
                      <span>
                        <i class="ri-file-warning-line"></i>
                      </span>
                      <p>3 Must-Read Tips Before Starting</p>
                    </div>
                    <div className="icon-item">
                      <span>
                        <i class="ri-user-3-line"></i>
                      </span>
                      <p>Expert Service</p>
                    </div>
                  </div>
                </div>
                <div className="shoppingagent-search-wrapper">
                  <div className="shoppingagent-search-box">
                    <input
                      type="text"
                      placeholder="Taobao, Tmall, 1688, JD Product URL or Keywords"
                    />
                    <button>
                      <i class="ri-search-line"></i>
                    </button>
                  </div>
                  <ul className="shoppingagent-searchBox-recommend">
                    <li className="item">
                      <a href="#" target="_blank" class="title">
                        Expert Service
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" class="title">
                        Shopping Guide Mall
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" class="title">
                        Used Market
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" class="title">
                        Bilibili Product
                      </a>
                    </li>
                  </ul>
                </div>
              </header>
              <section className="content shadow-content">
                <div className="banner-container">
                  <section className="swiperImg-wrapper">
                    <section
                      className="swiperImg"
                      style={{ width: "1190px", height: "520px" }}
                    >
                      <div className="swiperImg-container">
                        <div>
                          <UseSlider items={sliderAgent} />
                        </div>
                      </div>
                    </section>
                  </section>
                  <div className="banner-steps">
                    <ul>
                      <li>
                        <span className="number_en">1</span>
                        <div className="banner-steps__group">
                          <p>Become A Superbuy Member</p>
                          <b>Register Now</b>
                        </div>
                      </li>
                      <li>
                        <span className="number_en">1</span>
                        <div className="banner-steps__group">
                          <p className="color--primary">First Payment</p>
                          <b> Submit A Shopping Agent Order</b>
                        </div>
                      </li>
                      <li>
                        <span className="number_en">1</span>
                        <div className="banner-steps__group">
                          <p>Quality Inspection And Warehouse Stock In</p>
                        </div>
                      </li>
                      <li>
                        <span className="number_en">1</span>
                        <div className="banner-steps__group">
                          <p className="color--primary">Second Payment</p>
                          <b>
                            Pay For International Shipping And Ship The Parcel
                          </b>
                        </div>
                      </li>
                    </ul>
                    <div className="banner-steps__btn">
                      <button>Novice strategy</button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="content Ads">
                {contentAds.map((item, index) => (
                  <a key={index} href={item}>
                    <div className="commont-img-wrap">
                      <img src={item} alt="commont-img" />
                    </div>
                  </a>
                ))}
              </section>
            </section>
            <section className="layout-content">
              <LayoutContent />
            </section>
            <section className="layout-shopping"></section>
          </section>
        </div>
      </div>
    </>
  );
};
export default Shoppingagent;
