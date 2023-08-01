import React from "react";
import { Link } from "react-router-dom";
import "../style/signin.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .required("You must fill in this section!"),
      password: Yup.string().min(
        8,
        "Your password must be at least 8 characters"
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
              href='https://www.superbuy.com/en/page/marketing/share/?htag=log&amp;nTag=en_login_banner'></a>
            <div className='mainBox'>
              <div className='login-page loginBox-active'>
                <form onSubmit={formik.handleSubmit}>
                  <h6 class='title'>Sign In </h6>
                  <div class='loginMsg emailAuto'>
                    <input
                      type='text'
                      id='email'
                      class='inputS'
                      placeholder={
                        formik.errors.email && formik.touched.email
                          ? formik.errors.email
                          : "E-mail"
                      }
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      style={{
                        border:
                          formik.errors.email && formik.touched.email
                            ? "1px solid red"
                            : "",
                      }}
                    />
                  </div>
                  <div class='loginMsg forgotPsw'>
                    <input
                      name='password'
                      type='password'
                      class='inputS'
                      placeholder={
                        formik.errors.password && formik.touched.password
                          ? formik.errors.password
                          : "Password"
                      }
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      style={{
                        border:
                          formik.errors.password && formik.touched.password
                            ? "1px solid red"
                            : "",
                      }}
                    />
                  </div>
                  <div className='loading-box'>
                    <input type='submit' class='btnS' value='Sign In' />
                  </div>
                </form>
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
