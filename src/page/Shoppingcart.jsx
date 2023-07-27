import React, { useState } from "react";
import "../style/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import DialogMask from "../components/UI/DialogMask";
import { createPortal } from "react-dom";

const Shoppingcart = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const handleIncreaseQuantity = (id) => {
    dispatch(cartActions.increaseQuantity({ id }));
  };
  const handleDecreaseQuantity = (id) => {
    dispatch(cartActions.decreaseQuantity({ id }));
  };
  const openDialog = (id) => {
    setSelectedProductId(id);
  };
  const handlecloseDialog = () => {
    setSelectedProductId(null);
  };
  return (
    <>
      <div className='shopping-cart'>
        <div className='tab'>
          <span class='tab-active'>Cart({cartItems.length})</span>
          <p class='tab-border tab-border-en'></p>
        </div>
        <div>
          {cartItems.length === 0 ? (
            <div class='empty'>
              <p>
                Shopping cart is empty.
                <Link to='/shoppingagent'>Shop now! </Link>
              </p>
            </div>
          ) : (
            <div className='daigou'>
              <div class='all-select-top'>
                <span class='select-input-false'></span>
                <span>Select All</span>
                <span>Item Name </span>
                <span>Remark</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Amount</span>
                <span>Edit</span>
              </div>
              {cartItems.map((item, index) => (
                <div className='shop-item' key={index}>
                  <div className='shop-msg'>
                    <span className='select-input-false'></span>
                    <img
                      class='shop-img'
                      src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/shoppingcart/icon-default.png'
                    />
                    <a href=''>
                      ND's original wig shop where I don't need a trim
                    </a>
                  </div>
                  <div className='shop-goods'>
                    <div>
                      <div className='goods-item'>
                        <span class='select-input-false'></span>
                        <div class='goods-img-box'>
                          <div>
                            <img src={item.imgUrl} />
                          </div>
                        </div>
                        <div class='goods-name'>
                          <a
                            href='//www.superbuy.com/en/page/buy/?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D704085956017&amp;nTag=Cart-product'
                            target='_blank'>
                            <p class='title'>{item.productName}</p>
                          </a>
                        </div>
                        <div class='remark'></div>
                        <div class='unit-price-box'>
                          <p class='price hide'>US ${item.price}</p>
                        </div>
                        <div className='number'>
                          <span onClick={() => handleDecreaseQuantity(item.id)}>
                            -
                          </span>
                          <input type='text' value={item.quantity}></input>
                          <span
                            class='add'
                            onClick={() => handleIncreaseQuantity(item.id)}>
                            +
                          </span>
                        </div>
                        <div class='total-price' id='goodsPricedaigou0Goods0'>
                          US ${item.totalPrice}
                        </div>
                        <div class='remove' onClick={() => openDialog(item.id)}>
                          Delete
                        </div>
                      </div>
                    </div>
                    <div class='goods-total'>
                      <div className='coupon-title'>
                        <span class='hide'></span>
                      </div>
                      <div class='goods-total-price'>
                        <span class='price'>
                          Total Price：US ${item.totalPrice}
                          {/* <i class='hide'>(Discount amount:US $0.00)</i> */}
                        </span>
                        <span>Local Delivery：US $0.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className='all-select-bottom'>
                <span class='select-input-false'></span>
                <span style={{ color: "#0083ef" }}>Select All</span>
                <span class='gray-color'>Delete Selected Item(s)</span>
                <span class='gray-color'>Remove Invalid Item(s) </span>
                <div class='shops-total-price'>
                  <p>
                    Selected<b>0</b>
                    <i>Item(s)</i>
                  </p>
                  <p>
                    Total
                    <i style={{ color: "#999", fontStyle: "normal" }}>
                      （Excl. International Delivery Fee&nbsp;
                      <i
                        aria-label='icon: question-circle'
                        class='anticon anticon-question-circle'></i>
                      &nbsp;）
                    </i>
                  </p>
                  <p
                    class='account-price'
                    id='accountPrice'
                    style={{
                      fontSize: "20px",
                      color: "#e6505f",
                      fontWeight: "600",
                    }}>
                    US ${totalAmount}
                  </p>
                  <i
                    class='priceRMB'
                    style={{
                      fontSize: "14px",
                      color: "#999",
                      fontStyle: "normal",
                      margin: "0 10px",
                    }}>
                    (￥0.00)
                  </i>

                  <div class='account-btn-gray'>Submit</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {selectedProductId &&
        createPortal(
          <DialogMask
            productId={selectedProductId}
            onClose={handlecloseDialog}
          />,
          document.body
        )}
    </>
  );
};

export default Shoppingcart;
