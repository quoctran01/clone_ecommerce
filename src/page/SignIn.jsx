import React from "react";
import { Link } from "react-router-dom";
import "../style/signin.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField/TextField";

const SignIn = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });
  return (
    <>
      <div className='login-layout'>
        <header class='logo'>
          <div class='logo-cont'>
            <Link to='/home'>
              <img
                src='https://cdn.superbuy.com/starit-superbuy/dist/cn/source/img/login/logo.png'
                alt=''
              />
            </Link>
            <p>Global Leading Cross-border Integrated Service Platform</p>
          </div>
        </header>
        <div className='loginContent'>
          <div className='center-cont'>
            <a class='login-adhref' href='#'></a>
            <div className='mainBox'>
              <div className='login-page loginBox-active'>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={validate}
                  onSubmit={(values) => {
                    console.log(values);
                  }}>
                  {(formik) => (
                    <>
                      <h6 class='title'>Sign In </h6>
                      <Form>
                        <TextField
                          placeholder='Email'
                          name='email'
                          type='email'
                        />
                        <TextField
                          placeholder='Password'
                          name='password'
                          type='password'
                        />
                        <div className='loading-box'>
                          <input type='submit' class='btnS' value='Sign In' />
                        </div>
                      </Form>
                    </>
                  )}
                </Formik>
                <section class='otherWay'>
                  <span>You can sign in with third-party accounts</span>
                  <div class='list'>
                    <a class='weibo' href='hihi.com'></a>
                    <a class='qq' href='hah.com'></a>
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
                <div class='fotgetPsw'>
                  <a href='/en/page/login/forgotpassword/?origin=login&amp;forgotEmail='>
                    Forgot password?
                  </a>
                </div>
                <div class='go-register'>
                  Need an account ?
                  <Link to='/signup'>Sign up for free &gt;</Link>
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

export default SignIn;
