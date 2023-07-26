import React, { useState } from "react";
import "../../style/home-page-content.css";
const imageSlider = [
  "https://img1.superbuy.com/images/daigou-admin/2022/11/17/1f7157b4-f928-4a38-8916-c9cdc5c923b8.png",
  "https://img1.superbuy.com/images/daigou-admin/2022/11/16/7d5fce1e-2527-4766-a2eb-6cf372fe15ca.png",
  "https://img1.superbuy.com/images/daigou-admin/2023/07/21/b7d07fa1-ef52-4e6c-802a-5866862c480f.png",
  "https://img1.superbuy.com/images/daigou-admin/2022/11/17/1f7157b4-f928-4a38-8916-c9cdc5c923b8.png",
  "https://img1.superbuy.com/images/daigou-admin/2023/07/11/fcb29eb3-1ce6-498d-82c5-f1f92e391e4a.png",
];

const HompageContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageSlider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === imageSlider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className='homepage-main-header'>
        <div className='banner-position-left'>
          <div className='common-img-wrap'>
            <img
              src='https://img1.superbuy.com/images/daigou-admin/2023/05/15/6f8d3c81-ee89-430e-8cac-7fdff28cc05c.png'
              alt=''
            />
          </div>
        </div>
        <div className='banner-position-right'>
          <div className='banner-position-wrapper'>
            <div className='position-top'>
              <div className='homepage-switch'>
                <div className='homepage-switch__pre' onClick={goToPrevious}>
                  <i class='ri-arrow-left-s-line'></i>
                </div>
                <div className='homepage-switch__next' onClick={goToNext}>
                  <i class='ri-arrow-right-s-line'></i>
                </div>
              </div>
              <img src={imageSlider[currentIndex]} alt='' />
              <div className='homepage-switch-dot'>
                <ul className='homepage-dot'>
                  {imageSlider.map((item, index) => (
                    <li
                      className='homepage-dot__item'
                      key={index}
                      onClick={() => goToSlide(index)}></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='position-bottom'>
              <div className='position-bottom-wrapper'>
                <div className='common-img-wrap'>
                  <img
                    src='https://img1.superbuy.com/images/daigou-admin/2022/08/16/607ad943-d31f-4c70-9f2e-f42886c36448.png'
                    alt=''
                  />
                </div>
                <div className='common-img-wrap'>
                  <img
                    src='https://img1.superbuy.com/images/daigou-admin/2022/06/30/fdb7353e-d340-4cda-8a0b-f342d83b3031.png'
                    alt=''
                  />
                </div>

                <div className='common-img-wrap'>
                  <img
                    src='https://img1.superbuy.com/images/daigou-admin/2023/02/15/5a60a4df-18ff-4f7a-b1ed-dfd74531ec2f.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>Shipping Calculator</h1>
      </div>
    </>
  );
};

export default HompageContent;
