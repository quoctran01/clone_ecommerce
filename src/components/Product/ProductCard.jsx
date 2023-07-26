import React from "react";
import "./productCard.css";

const ProductCard = ({ item, setOpenModal, handleOpenModal }) => {
  const handleAddToCart = () => {
    setOpenModal(true);
    handleOpenModal({
      id: item.id,
      productName: item.productName,
      imgUrl: item.imgUrl,
      price: item.price,
    });
  };
  return (
    <>
      <div className='product-items common-item'>
        <div className='product-items__wrapper'>
          <div className='good-description'>
            <em>{item.productName}</em>
            <div className='common-img-wrap'>
              <img
                src='https://cdn.superbuy.com/starit-superbuy/dist/img/flag/US.png?x-oss-process=image/resize,limit_0,m_fixed,h_18,w_30/quality,q_90/interlace,1/format,webp'
                alt='common-img'
                draggable='false'
                class='common-img'
                style={{
                  width: "30px",
                  height: "18px",
                  boxShadow: "0px 0px 1px 1px rgb(229, 229, 229)",
                }}
              />
            </div>
          </div>
          <div className='goods-img-content'>
            <div className='common-img-wrap'>
              <img
                src={item.imgUrl}
                alt='common-img'
                draggable='false'
                class='common-img'
              />
            </div>
          </div>
          <div className='goods-title icon-XY icon-common'>
            {item.shortDesc}
          </div>
          <div className='goods-price'>
            <span className='price-content'>
              <span class='discount-price'>{`US $ ${item.price}`}</span>
            </span>
            <span class='price-content-icon' onClick={handleAddToCart}>
              <i class='ri-shopping-cart-line'></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
