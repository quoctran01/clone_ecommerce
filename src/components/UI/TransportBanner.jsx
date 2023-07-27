import React from "react";
import UseSlider from "../../const/useSlider";
import { bannerSlider } from "../../assets/data/bannerSlider";

const TransportBanner = ({ items }) => {
  return (
    <>
      <section className="transport-banner">
        <div className="transport-banner_inner">
          <section className="swiperImg-wrapper">
            <section
              className="swiperImg"
              style={{ width: "1190px", height: "120px" }}
            >
              <div className="swiperImg-container">
                <a
                  target="_blank"
                  href="https://bbs.superbuy.com/forum.php?mod=viewthread&amp;tid=610043&amp;htag=zy"
                  class="swiperImg-item swiperImg-item-0 active"
                >
                  <div class="common-img-wrap ">
                    <UseSlider items={bannerSlider} />
                  </div>
                </a>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default TransportBanner;
