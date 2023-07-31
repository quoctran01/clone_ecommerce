import React, { useState, useEffect } from "react";
import "../style/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import DialogMask from "../components/UI/DialogMask";
import { createPortal } from "react-dom";
import ProductRecomList from "../components/ProductRecom/ProductRecomList";
import products from "../assets/data/product";

const Shoppingcart = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [product, setProduct] = useState(cartItems);
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
  const handleChangeInput = (e) => {
    const { checked, name } = e.target;
    if (name === "allSelect") {
      const tempProduct = product.map((item) => {
        return { ...item, isChecked: checked };
      });
      setProduct(tempProduct);
    } else {
      const tempProduct = product.map((item) =>
        item.productName === name ? { ...item, isChecked: checked } : item
      );
      setProduct(tempProduct);
    }
  };
  const handleDeleteItems = () => {
    const productIds = product
      .filter((item) => item.isChecked === true)
      .map((item) => item.id);
    setSelectedProductId(productIds);
  };
  useEffect(() => {
    setProduct(cartItems);
  }, [cartItems]);
  return (
    <>
      <div className='shopping-cart'>
        <div className='tab'>
          <span class='tab-active'>Cart({product?.length})</span>
          <p class='tab-border tab-border-en'></p>
        </div>
        <div>
          {product.length === 0 ? (
            <div class='empty'>
              <p>
                Shopping cart is empty.
                <Link to='/shoppingagent'>Shop now! </Link>
              </p>
            </div>
          ) : (
            <div className='daigou'>
              <div class='all-select-top'>
                <input
                  type='checkbox'
                  name='allSelect'
                  onChange={handleChangeInput}
                  checked={!product.some((item) => item?.isChecked !== true)}
                />
                <span>Select all</span>
                <span>Item Name </span>
                <span>Remark</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Amount</span>
                <span>Edit</span>
              </div>
              {product.map((item, index) => (
                <div className='shop-item' key={index}>
                  <div className='shop-msg'>
                    {/* <input type='checkbox' /> */}
                    <img
                      class='shop-img'
                      src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/shoppingcart/icon-default.png'
                    />
                    <a href='#'>{item.shortDesc}</a>
                  </div>
                  <div className='shop-goods'>
                    <div>
                      <div className='goods-item'>
                        <input
                          type='checkbox'
                          name={item.productName}
                          checked={item?.isChecked || false}
                          onChange={handleChangeInput}
                        />
                        <div class='goods-img-box'>
                          <div>
                            <img src={item.imgUrl} />
                          </div>
                        </div>
                        <div class='goods-name'>
                          <a href='//www.superbuy.com/en/page/buy/?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D704085956017&amp;nTag=Cart-product'>
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
                <input
                  type='checkbox'
                  name='allSelect'
                  onChange={handleChangeInput}
                  checked={!product.some((item) => item?.isChecked !== true)}
                />
                <span style={{ color: "#0083ef" }}>Select All</span>
                <span
                  class={`gray-color ${
                    product?.filter((item) => item.isChecked === true).length >
                    0
                      ? "isActive"
                      : ""
                  }`}
                  onClick={handleDeleteItems}>
                  Delete Selected Item(s)
                </span>
                <span class='gray-color'>Remove Invalid Item(s) </span>
                <div class='shops-total-price'>
                  <p>
                    Selected
                    <b>
                      {
                        product?.filter((item) => item.isChecked === true)
                          .length
                      }
                    </b>
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
        <section className='recommend-goods-container'>
          <h2>
            <a class='title' href='/en/page/subject/?id=21683'>
              <span>Popular Products Recommendation</span>
            </a>
            <a href='/en/page/subject/?id=21683'>More &gt;</a>
          </h2>
          <ProductRecomList data={products.slice(0, 12)} />
        </section>
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
