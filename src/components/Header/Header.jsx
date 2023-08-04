import React, { useEffect, useState } from "react";
import "./header.css";
import { populate } from "../../assets/data/populate";
import PopulateList from "../PopulateList/PopulateList";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment-timezone";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/shoppingcart");
  };
  const [beijingTime, setBeijingTime] = useState(null);

  useEffect(() => {
    const getBeijingTime = () => {
      const beijingTimezone = "Asia/Shanghai";
      const nowInBeijing = moment().tz(beijingTimezone);
      setBeijingTime(nowInBeijing);
    };
    getBeijingTime();
    const interval = setInterval(() => {
      getBeijingTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <header className='header'>
        <div className='header-top'>
          <div className='header-wrapper'>
            <div className='fl'>
              <div className='beijing-time'>
                <span>Beijing Time</span>
                <span>
                  {beijingTime
                    ? `${beijingTime.format("YYYY")}/${beijingTime.format(
                        "MM"
                      )}/${beijingTime.format("DD")}`
                    : ""}
                </span>
                <span>{beijingTime ? beijingTime.format("HH:mm:ss") : ""}</span>
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
                    <span className='icon-dropdown'>
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
                      <div className='notice-header-text'>
                        <ul className='notice-list m-0 p-0 d-flex flex-column position-relative'>
                          <li className='waring-notice d-flex align-items-center'>
                            <span>
                              WOW! SUPERBUY Shopping Guide Mall Live NOW!
                            </span>
                          </li>
                          <li className='d-flex align-items-center'>
                            <span>
                              【Superbuy X Bilibili】Exclusive 10% discount on
                              popular items!
                            </span>
                          </li>
                        </ul>
                      </div>
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
                <i class='ri-arrow-down-s-line'></i>
              </li>
              <li className='nav-item'>
                <NavLink to='forward'>FORWARDING</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='logistic'>LOGISTICS</NavLink>
                <i class='ri-arrow-down-s-line'></i>
                <ul class='sub-nav-logistics m-0 p-0'>
                  <li class='sub-nav-item'>
                    <Link to='logistic/freight' class='nav-text'>
                      Shipping Calculator
                    </Link>
                  </li>
                  <li class='sub-nav-item'>
                    <Link to='logistic/tracking' class='nav-text'>
                      Parcel Tracking
                    </Link>
                  </li>
                  <li class='sub-nav-item'>
                    <Link to='logistic/customization' class='nav-text'>
                      Customized Logistics
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a href='https://bbs.superbuy.com/forum.php'>BBS</a>
              </li>
              <li className='nav-item'>
                <NavLink to='business'>BUSINESS</NavLink>
                <i class='ri-arrow-down-s-line'></i>
                <ul class='sub-nav-business m-0 p-0'>
                  <li class='sub-nav-item'>
                    <a href='https://www.buckydrop.com/cn/' class='nav-text'>
                      Buckydrop
                    </a>
                  </li>
                  <li class='sub-nav-item'>
                    <Link class='nav-text' to='/business/channel'>
                      Channel Cooperation
                    </Link>
                  </li>
                  <li class='sub-nav-item'>
                    <Link class='nav-text'>Business Cooperation</Link>
                  </li>
                  <li class='sub-nav-item'>
                    <Link to='business/buckydrop' class='nav-text'>
                      Shopping Agent
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <NavLink to='affilates'>AFFILIATES</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='customservice'>CUSTOMER SERVICE</NavLink>
                <i class='ri-arrow-down-s-line'></i>
                <ul class='sub-nav-customer p-0 m-0'>
                  <li class='sub-nav-item'>
                    <Link
                      rel='noreferrer'
                      href='/en/page/help/'
                      target='_self'
                      class='nav-text'>
                      Help Center
                    </Link>
                  </li>
                  <li class='sub-nav-item'>
                    <Link
                      rel='noreferrer'
                      href='/en/page/customservice/'
                      target='_self'
                      class='nav-text'>
                      Customer Service
                    </Link>
                  </li>
                  <li class='sub-nav-item'>
                    <Link
                      rel='noreferrer'
                      href='/en/page/shippinghacks/'
                      target='_self'
                      class='nav-text'>
                      Shipping Hacks
                    </Link>
                  </li>
                  <li class='sub-nav-item'>
                    <Link
                      rel='noreferrer'
                      href='/en/page/noviceguide/'
                      target='_self'
                      class='nav-text'>
                      User Guidance
                    </Link>
                  </li>
                  <li class='sub-nav-item'>
                    <Link
                      rel='noreferrer'
                      href='/en/page/about/contactus/'
                      target='_self'
                      class='nav-text'>
                      Contact Us
                    </Link>
                  </li>
                  <li class='sub-nav-item'>
                    <Link
                      rel='noreferrer'
                      href='/en/page/about/aboutus/'
                      target='_self'
                      class='nav-text'>
                      About Us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
