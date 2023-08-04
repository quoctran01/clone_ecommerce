import React, { useState } from "react";
import "../style/home.css";
import ShoppingGuide from "../components/UI/ShoppingGuide";
import ProductList from "../components/Product/ProductList";
import HompageContent from "../components/UI/HomePageContent";
import CartModal from "../components/UI/CartModal";
import { createPortal } from "react-dom";
import products from "../assets/data/product";
const categoryData = [
  "Everything",
  "Woment",
  "Men",
  "sofa",
  "chair",
  "mobile",
  "watch",
];
const countriesData = [
  "All",
  "USA",
  "Canada",
  "UK",
  "Germany",
  "Australia",
  "France",
  "Japan",
];

const Home = () => {
  const [categories, setCategories] = useState("Everything");
  const [openCategory, setOpenCategory] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [countries, setCountries] = useState("Recommend");
  const [openModal, setOpenModal] = useState(false);
  const [productModal, setProductModal] = useState();
  const [productsData, setProductsData] = useState(products);
  const handleOpenModal = (data) => {
    setProductModal(data);
  };
  const filterCategory = (categories) => {
    setCategories(categories);
    switch (categories) {
      case "chair":
        setProductsData(
          products.filter((item) => item.category === categories)
        );
        break;
      case "sofa":
        setProductsData(
          products.filter((item) => item.category === categories)
        );
        break;
      case "mobile":
        setProductsData(
          products.filter((item) => item.category === categories)
        );
        break;
      case "watch":
        setProductsData(
          products.filter((item) => item.category === categories)
        );
        break;
      case "wireless":
        setProductsData(
          products.filter((item) => item.category === categories)
        );
        break;
      default:
        setProductsData(products);
    }
  };
  return (
    <>
      <div className='home'>
        <div className='homepage-wrapper'>
          <section className='shopping-guide'>
            <div className='shopping-guide-inner'>
              <ShoppingGuide />
            </div>
          </section>
          <div className='homepage-wrapper-content'>
            <HompageContent />
          </div>
          <div className='homepage-goods-waterfall'>
            <div className='goods-waterfall-container'>
              <h2>WHAT'S HOT</h2>
              <div className='fixed-operation'>
                <div>
                  <div className='goods-waterfall-operation'>
                    <ul className='operation-list'>
                      <li
                        className='operation-list_item'
                        onMouseEnter={() => setOpenCategory(true)}
                        onMouseLeave={() => setOpenCategory(false)}>
                        <span>Top Categories</span>
                        <span className='operation-items'>{categories}</span>
                        <i class='ri-arrow-down-s-line'></i>
                        {openCategory && (
                          <ul className='host-class'>
                            {categoryData.map((categories, index) => (
                              <li
                                key={index}
                                onClick={() => filterCategory(categories)}>
                                {categories}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                      <li
                        className='operation-list_item'
                        onMouseEnter={() => setOpenCountry(true)}
                        onMouseLeave={() => setOpenCountry(false)}>
                        <span>Popular Countries</span>
                        <span className='operation-items'>{countries}</span>
                        <i class='ri-arrow-down-s-line'></i>
                        {openCountry && (
                          <ul className='host-class'>
                            {countriesData.map((countrie, index) => (
                              <li
                                key={index}
                                onClick={() => setCountries(countrie)}>
                                {countrie}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                      <li className='operation-list_item'>
                        <label htmlFor='' className='ant-checkbox-wrapper'>
                          <span className='ant-checkbox'>
                            <input
                              type='checkbox'
                              className='ant-checkbox-input'
                            />
                            <span>Only Buying</span>
                          </span>
                        </label>
                      </li>
                      <li className='operation-list_item'>
                        <label htmlFor='' className='ant-checkbox-wrapper'>
                          <span className='ant-checkbox'>
                            <input
                              type='checkbox'
                              className='ant-checkbox-input'
                            />
                            <span>Only Shipping</span>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <section className='waterfall-list-content'>
                <ProductList
                  products={productsData}
                  setOpenModal={setOpenModal}
                  handleOpenModal={handleOpenModal}
                />
              </section>
            </div>
          </div>
        </div>
      </div>
      {openModal &&
        createPortal(
          <CartModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            productModal={productModal}
          />,
          document.body
        )}
    </>
  );
};
export default Home;
