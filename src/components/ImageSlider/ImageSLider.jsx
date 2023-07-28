import { useState } from "react";
import "../../style/ImageSlider.css";

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "-74px",
  fontSize: "45px",
  color: "#ddd",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "-74px",
  fontSize: "45px",
  color: "#ddd",
  zIndex: 1,
  cursor: "pointer",
};
const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <section className="swiperImg-wrapper">
        <section
          className="swiperImg"
          style={{ width: "1190px", height: "520px" }}
        >
          <div className="swiperImg-container">
            <div className="swiperImg-switch">
              <div
                onClick={goToPrevious}
                className="swiperImg-switch__pre"
                style={leftArrowStyles}
              >
                ❰
              </div>
              <div
                onClick={goToNext}
                className="swiperImg-switch__next"
                style={rightArrowStyles}
              >
                ❱
              </div>
            </div>
            <img
              src={slides[currentIndex].url}
              alt="image slider"
              className="swiperImg-slider"
            />
            <div style={dotsContainerStyles}>
              <ul className="swiperImg-dot">
                {slides.map((slide, slideIndex) => (
                  <li
                    className="swiperImg-dot__item"
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ImageSlider;
