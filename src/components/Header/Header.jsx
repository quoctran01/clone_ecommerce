import React from "react";
import "./header.css";
import { populate } from "../../assets/data/populate";
import PopulateList from "../PopulateList/PopulateList";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/shoppingcart");
  };
  return (
    <>
      <header className='header'>
        <div className='header-top'>
          <div className='header-wrapper'>
            <div className='fl'>
              <div className='beijing-time'>
                <span>Beijing Time</span>
                <span>{new Date().toLocaleDateString("en-GB")}</span>
                <span></span>
                <span>PM</span>
              </div>
              <div className='translate'>
                <div>English/ USD</div>
                <div className='translate-drop-down drop-down-bottom'>
                  <div className='translate-drop-down-wrapper'>
                    <dl>
                      <dt>Language</dt>
                      <dd> 中文（简体）</dd>
                      <dd className='active'> English</dd>
                    </dl>
                    <dl>
                      <dt>Currency</dt>
                      <dd className='active'> CN ￥）</dd>
                      <dd> US $</dd>
                    </dl>
                    <button>OK</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='fr'>
              <div className='register'>
                <Link to='signup' className='car-drop-down'>
                  <span className='new-gift'>New User Gifts</span>
                  Sign Up
                </Link>
              </div>
              <div className='login'>
                <Link to='login'>Sign In</Link>
              </div>
              <div className='header-icon'>
                <span onClick={handleRedirect}>
                  <i class='ri-shopping-cart-line'></i>
                </span>
                {cartItems.length > 0 && <span className='dotred'></span>}
              </div>
              <div className='header-special-wrapper'>
                <div className='header-special'>
                  <div className='header-icon'>
                    <span>
                      <i class='ri-fire-line'></i>
                    </span>
                  </div>
                  <div className='header-special-text'>Popular</div>
                  <div className='header-icon'>
                    <span>
                      <i class='ri-arrow-drop-up-line'></i>
                    </span>
                  </div>
                  <div className='special-drop-down'>
                    <section>
                      <PopulateList populate={populate} />
                    </section>
                    <div className='notice-wrap'>
                      <div className='notice-header'>
                        <div className='notice-header--left'>Announcement</div>
                        <div className='notice-header--right'>More</div>
                      </div>
                      {/* <div className='notice-header-text'>
                        <ul className='notice-list'>
                          <li className='waring-notice'>
                            <a>WOW! SUPERBUY Shopping Guide Mall Live NOW!</a>
                          </li>
                          <li>
                            <a>
                              【Superbuy X Bilibili】Exclusive 10% discount on
                              popular items!
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='header-middle'>
          <div className='header-middle-main'>
            <Link to='home'>
              <div className='header-logo'>
                <img
                  src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/wrapper/header/logo.png'
                  alt=''
                />
              </div>
            </Link>
            <ul className='header-nav'>
              <li className='nav-item'>
                <NavLink to='home'>Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='shoppingagent'>SHOPPING AGENT</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='forward'>FORWARDING</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='freight'>LOGISTICS</NavLink>
                <i class='ri-arrow-down-s-line'></i>
                <ul class='sub-nav-logistics m-0 p-0'>
                  <li class='sub-nav-item'>
                    <Link to='freight' class='nav-text'>
                      Shipping Calculator
                    </Link>
                  </li>
                  <li class='sub-nav-item'>
                    <Link to='tracking' class='nav-text'>
                      Parcel Tracking
                    </Link>
                  </li>
                  <li class='sub-nav-item'>
                    <Link to='customization' class='nav-text'>
                      Customized Logistics
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <NavLink to='bbs'>BBS</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='busniess'>BUSINESS</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='afiliates'>AFFILIATES</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='customer'>CUSTOMER SERVICE</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
