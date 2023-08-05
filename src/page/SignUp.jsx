import React from "react";
import { Link } from "react-router-dom";
import "../style/signin.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField/TextField";

const SignUp = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the Terms of Service"
    ),
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
                      <h6 class='title'>Sign Up </h6>
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
                        <div className='loginMsg'>
                          <input
                            type='text'
                            class='inputS verCode-input'
                            placeholder='Verification Code'
                          />
                          <div class='verCode'>
                            <img src='//login.superbuy.com/api/site/captcha' />
                          </div>
                        </div>
                        <div class='protocol'>
                          <label class='ant-checkbox-wrapper'>
                            <span class='ant-checkbox'>
                              <input
                                type='checkbox'
                                class='ant-checkbox-input'
                                name='acceptTerms'
                                checked={formik.values.acceptTerms}
                                onChange={formik.handleChange}
                              />
                            </span>
                            <span>
                              <div class='protocol-content'>
                                <span>
                                  I have already read and accept Superbuy's
                                </span>
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
                          {formik.touched.acceptTerms &&
                          formik.errors.acceptTerms ? (
                            <div className='error'>
                              {formik.errors.acceptTerms}
                            </div>
                          ) : null}
                        </div>
                        <div className='loading-box'>
                          <input type='submit' class='btnS' value='Sign Up' />
                        </div>
                      </Form>
                    </>
                  )}
                </Formik>
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
