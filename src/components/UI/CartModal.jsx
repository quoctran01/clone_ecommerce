import React from "react";
import "../../style/cartModal.css";
import useHandleQuantity from "../../const/handleQuantity";

const CartModal = ({ setOpenModal, productModal }) => {
  const { quantity, handleDecrease, handleIncrease, addToCart } =
    useHandleQuantity(productModal, setOpenModal);
  return (
    <>
      <div className='good-to-cart-pick'>
        <div className='good-modal-content'>
          <div className='good-modal-content__title'>
            <h3>ADD TO CART</h3>
            <span className='close-btn'>
              <i class='ri-close-line' onClick={() => setOpenModal(false)}></i>
            </span>
          </div>
          <section className='good-detail-content'>
            <section className='steps-list_container'>
              <ul className='list-content'>
                <li>
                  <span>01</span>
                  <p>
                    <span>FIRST PAYMENT</span>
                    <span>Submit order</span>
                  </p>
                </li>
                <li>
                  <span>02</span>
                  <p>
                    <span>SUPERBUY FOLLOW UP</span>
                    <span>Purchase, inspect & store</span>
                  </p>
                </li>
                <li>
                  <span>03</span>
                  <p>
                    <span>SECOND PAYMENT</span>
                    <span>Pay international freight</span>
                  </p>
                </li>
                <li>
                  <span>04</span>
                  <p>
                    <span>SIGN FOR PARCEL</span>
                    <span>Pack & ship the parcel</span>
                  </p>
                </li>
              </ul>
            </section>
            <div className='good-url'>
              <span>Link</span>
              <span>https://detail.tmall.com/item.htm?id=692563988764</span>
              <span>View Details</span>
            </div>
            <div className='good-info'>
              <div className='img-preview'>
                <div className='common-img-wrap'>
                  <img
                    src={productModal.imgUrl}
                    alt='common-img'
                    draggable='false'
                    class='common-img'
                  />
                </div>
              </div>
              <div className='good-info-content'>
                <p class='title'>{productModal.productName}</p>
                <p class='price'>
                  <em>US $</em>
                  {productModal.price}
                </p>
                <section class='sku-list-container'>
                  <p class='props-list'>
                    <span class='props-name'>Fineness</span>
                    <div class='props-select'>Not new</div>
                  </p>
                </section>
                <p className='props-list number-pick'>
                  <span class='props-name'>Quantity</span>
                  <div className='number-input-wrap'>
                    <input type='text' value={quantity} />
                    <div class='goods-count-button'>
                      <i
                        class='ri-arrow-drop-up-line'
                        onClick={handleDecrease}></i>
                      <i
                        class='ri-arrow-drop-down-line'
                        onClick={handleIncrease}></i>
                    </div>
                  </div>
                </p>
                <p class='operation-button'>
                  <button
                    type='button'
                    class='ant-btn add-cart button'
                    onClick={addToCart}>
                    <span>Add to cart</span>
                  </button>
                  <button class='buy-now'>Buy Now</button>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default CartModal;
