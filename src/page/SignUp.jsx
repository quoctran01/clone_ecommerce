import React from "react";
import { Link } from "react-router-dom";
import "../style/signin.css";

const SignUp = () => {
  return (
    <>
      <div className='login-layout'>
        <header class='logo'>
          <div class='logo-cont'>
            <Link to='/home'>
              <img src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/login/logo.png' />
            </Link>
            <p>Global Leading Cross-border Integrated Service Platform</p>
          </div>
        </header>
        <div className='loginContent'>
          <div className='center-cont'>
            <a
              class='login-adhref'
              href='https://www.superbuy.com/en/page/marketing/share/?htag=log&amp;nTag=en_login_banner'
              target='_blank'></a>
            <div className='mainBox'>
              <div className='login-page loginBox-active'>
                <h6 class='title'>Sign Up </h6>
                <div class='loginMsg emailAuto'>
                  <input
                    type='email'
                    id='email'
                    list='loginList'
                    class='inputS'
                    placeholder='E-mail(Make sure it is available)'
                    value=''
                  />
                </div>
                <div class='loginMsg forgotPsw'>
                  <input
                    name='password'
                    type='password'
                    class='inputS'
                    placeholder='Password'
                    value=''
                  />
                </div>
                <div className='loginMsg'>
                  <input
                    type='text'
                    maxlength='4'
                    class='inputS verCode-input'
                    placeholder='Verification Code'
                  />
                  <div class='verCode'>
                    <img
                      title='Not clear? Click to change'
                      src='//login.superbuy.com/api/site/captcha'
                    />
                  </div>
                </div>
                <div class='protocol'>
                  <label class='ant-checkbox-wrapper'>
                    <span class='ant-checkbox'>
                      <input
                        type='checkbox'
                        class='ant-checkbox-input'
                        value=''
                      />
                    </span>
                    <span>
                      <div class='protocol-content'>
                        <span>I have already read and accept Superbuy's </span>
                        <a
                          href='/en/page/about/statementagreement/'
                          rel='noreferrer'
                          target='_blank'>
                          Terms of Service
                        </a>
                        <span> and </span>
                        <a
                          href='/en/page/about/privacy/'
                          rel='noreferrer'
                          target='_blank'>
                          Privacy Policy
                        </a>
                      </div>
                    </span>
                  </label>
                </div>
                <div className='loading-box'>
                  <input type='button' class='btnS' value='Sign Up' />
                </div>
                <section class='otherWay'>
                  <div class='list'>
                    <a
                      class='weibo'
                      href='//www.superbuy.com/connect/weibo'></a>
                    <a class='qq' href='//www.superbuy.com/connect/qq'></a>
                    <a
                      class='weixin'
                      href='//www.superbuy.com/connect/wechat'></a>
                    <a
                      class='login-paypal'
                      href='//www.superbuy.com/connect/paypal'>
                      <span></span>
                    </a>
                  </div>
                </section>
                <div class='register-bottom'>
                  Already have an account?
                  <Link to='/login'> Sign in now &gt;</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <ul>
            <li>
              <a href='/en/page/about/aboutus/'>About Us</a>
              <i>|</i>
            </li>
            <li>
              <a href='/en/page/about/contactus/'>Contact Us</a>
              <i>|</i>
            </li>
            <li>
              <a href='/en/page/about/agreement/'>Terms of Service</a>
              <i>|</i>
            </li>
            <li>
              <a href='/en/page/about/privacy/'>Privacy Policy</a>
              <i>|</i>
            </li>
            <li>
              <a href='/en/page/help/'>Help Center</a>
              <i>|</i>
            </li>
            <li>
              <a href='/en/page/about/registration/'>Merchant registration</a>
              <i>|</i>
            </li>
            <li>
              <a href='/en/page/about/link/'>Useful links</a>
              <i>|</i>
            </li>
            <li>
              <a href='/en/page/about/map/'>Website Map</a>
              <i></i>
            </li>
          </ul>
          <p>
            <span>Copyright©2012-2023 superbuy.com All Rights Reserved </span>
            <a href='http://www.miibeian.gov.cn' target='_blank'>
              粤ICP备2021129378号
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;