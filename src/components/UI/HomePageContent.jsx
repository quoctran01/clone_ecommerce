import React, { useState } from "react";
import "../../style/home-page-content.css";
import CalculatorTool from "../CalculatorTool/CalculatorTool";
import UseSlider from "../../const/useSlider";
import { sliderHomePage } from "../../assets/data/bannerSlider";

const HompageContent = () => {
  return (
    <>
      <div className="homepage-main-header">
        <div className="banner-position-left">
          <div className="common-img-wrap">
            <img
              src="https://img1.superbuy.com/images/daigou-admin/2023/05/15/6f8d3c81-ee89-430e-8cac-7fdff28cc05c.png"
              alt=""
            />
          </div>
        </div>
        <div className="banner-position-right">
          <div className="banner-position-wrapper">
            <div className="position-top">
              <UseSlider items={sliderHomePage} />
            </div>
            <div className="position-bottom">
              <div className="position-bottom-wrapper">
                <div className="common-img-wrap">
                  <img
                    src="https://img1.superbuy.com/images/daigou-admin/2022/08/16/607ad943-d31f-4c70-9f2e-f42886c36448.png"
                    alt=""
                  />
                </div>
                <div className="common-img-wrap">
                  <img
                    src="https://img1.superbuy.com/images/daigou-admin/2022/06/30/fdb7353e-d340-4cda-8a0b-f342d83b3031.png"
                    alt=""
                  />
                </div>

                <div className="common-img-wrap">
                  <img
                    src="https://img1.superbuy.com/images/daigou-admin/2023/02/15/5a60a4df-18ff-4f7a-b1ed-dfd74531ec2f.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CalculatorTool />
      </div>
    </>
  );
};

export default HompageContent;
