import React, { useEffect, useState } from "react";
import "../style/customization.css";
import "../style/custom-scrollbar.css";

const Customization = () => {
  const [inputCount, setInputCount] = useState(1);
  const [listCountry, setListCountry] = useState([]);
  const [filterCountry, setFilterCountry] = useState([]);
  const [country, setCountry] = useState("");
  const [isActive, setActive] = useState();
  const [focusInput, setFocusInput] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setListCountry(data);
        setFilterCountry(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSetCountry = (id, country) => {
    setActive(id);
    setCountry(country);
    setSelectedValue("");
    setFocusInput(false);
  };
  const handleChangeInput = (e) => {
    const inputValue = e.target.value;
    setSelectedValue(inputValue);
    if (!focusInput) {
      setFocusInput(true);
      setFilterCountry(listCountry);
    } else {
      const filteredCountries = listCountry?.filter((data) =>
        data.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilterCountry(filteredCountries);
    }
    setCountry("");
  };
  const handleAddInputs = () => {
    setInputCount(inputCount + 1);
  };
  return (
    <>
      <section className='customization-fill-container'>
        <div className='page-content'>
          <div class='declaration'>
            <h1 class='title'>
              Customized Services Application Form（* Required）
            </h1>
            <p>warm reminded</p>
            <p>
              ● In order to provide high-quality service, please truthfully,
              detailed fill in the form. Our staff will contact you within three
              business days of submitting your application.
            </p>
            <p>
              ● Less than 30KG package we suggested that customers choose online
              large cargo shipping method.
            </p>
            <p>
              ● Customized services only involve logistics and transportation,
              only examine the goods appearance, do not provide goods of the
              quality of inspection.
            </p>
          </div>
          <form className='ant-form ant-form-horizontal login-form'>
            <div className='section-content underline'>
              <div class='title'>Contact Info</div>
              <div class='ant-form-item d-flex align-items-center'>
                <div class='ant-col-3'>
                  <label
                    for='normal_login_contacts'
                    class='ant-form-item-required ant-form-item-no-colon'
                    title='Contact'>
                    Contact
                  </label>
                </div>
                <div class='ant-col-14'>
                  <div>
                    <span class='ant-form-item-children'>
                      <input
                        maxlength='28'
                        placeholder='Please enter the name of the contact(2-28 characters)'
                        type='text'
                        id='normal_login_contacts'
                        class='ant-input'
                        value=''
                        style={{ width: "460px", height: "46px" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div class='ant-form-item d-flex align-items-center'>
                <div class='ant-col-3'>
                  <label
                    for='normal_login_contacts'
                    class='ant-form-item-required ant-form-item-no-colon'
                    title='Contact'>
                    Contact No.
                  </label>
                </div>
                <div class='ant-col-14'>
                  <div class='d-flex'>
                    <span class='ant-form-item-children'>
                      <input
                        maxlength='28'
                        placeholder='Country Code'
                        type='text'
                        id='normal_login_contacts'
                        class='ant-input'
                        value=''
                        style={{ width: "100px", height: "46px" }}
                      />
                      <span>-</span>
                      <input
                        maxlength='28'
                        placeholder='Phone no'
                        type='text'
                        id='normal_login_contacts'
                        class='ant-input'
                        value=''
                        style={{ width: "313px", height: "46px" }}
                      />
                    </span>
                    <p class='message-tips'>Example: +86 13800000000</p>
                  </div>
                </div>
              </div>
              <div class='ant-form-item d-flex align-items-center'>
                <div class='ant-col-3'>
                  <label
                    for='normal_login_contacts'
                    class='ant-form-item-required ant-form-item-no-colon'
                    title='Contact'>
                    Email
                  </label>
                </div>
                <div class='ant-col-14 d-flex  align-items-center justify-content-between'>
                  <div class='has-success'>
                    <span class='ant-form-item-children'>
                      <input
                        maxlength='28'
                        placeholder='Please enter a valid email address'
                        type='text'
                        id='normal_login_contacts'
                        class='ant-input'
                        value=''
                        style={{ width: "460px", height: "46px" }}
                      />
                    </span>
                  </div>
                  <label class='ant-checkbox-wrapper'>
                    <span class='ant-checkbox'>
                      <input
                        id='normal_login_isSuperbuyEmail'
                        type='checkbox'
                        class='ant-checkbox-input'
                        value=''
                        checked=''
                      />
                      <span class='ant-checkbox-inner'></span>
                    </span>
                    <span>It's registered with Superbuy.</span>
                  </label>
                </div>
              </div>
            </div>
            <div className='section-content underline address-content'>
              <div class='title'>Delivery Address</div>
              <section className='address-select'>
                <div className='contactAddress formItem operationInputAddress'>
                  <div class='form-item-container'>
                    <label class='autoRequired ant-form-item-required'>
                      Contact
                    </label>
                    <div class='form-item'>
                      <input
                        placeholder='Last name'
                        type='text'
                        class='ant-input'
                        value=''
                        style={{ width: "305px", maxWidth: "305px" }}
                      />
                      <input
                        placeholder='First name'
                        type='text'
                        class='ant-input'
                        value=''
                        style={{ width: "305px", maxWidth: "305px" }}
                      />
                    </div>
                  </div>
                  <div class='form-item-container'>
                    <label class='autoRequired ant-form-item-required'>
                      Contact No.
                    </label>
                    <div class='form-item'>
                      <input
                        placeholder=''
                        type='text'
                        class='ant-input'
                        value=''
                        style={{ width: "620px", maxWidth: "620px" }}
                      />
                      <label
                        style={{
                          marginLeft: "15px",
                          lineHeight: "46px",
                          color: "rgb(153, 153, 153)",
                        }}>
                        Example: +86 13800000000
                      </label>
                    </div>
                  </div>
                  <div className='form-item-container'>
                    <label class='autoRequired ant-form-item-required'>
                      Address
                    </label>
                    <div className='form-item'>
                      <div
                        class='ant-select-lg ant-select ant-select-enabled'
                        style={{ width: "200px" }}>
                        <div
                          class='ant-select-selection
            ant-select-selection--single'
                          role='combobox'
                          aria-autocomplete='list'
                          aria-haspopup='true'
                          aria-controls='d0e3ca25-1211-4fcd-d375-19f1e54dab90'
                          aria-expanded='false'
                          tabindex='0'>
                          <div class='ant-select-selection__rendered'>
                            {country || selectedValue ? (
                              " "
                            ) : (
                              <div
                                unselectable='on'
                                class='ant-select-selection__placeholder'>
                                Country
                              </div>
                            )}
                            {focusInput && (
                              <ul className='p-0 select-country custom-scrollbar'>
                                {filterCountry?.map((data, index) => (
                                  <li
                                    className={`select-country__item ${
                                      isActive === index ? "active" : ""
                                    }`}
                                    key={index}
                                    onClick={() =>
                                      handleSetCountry(index, data.name)
                                    }>
                                    {data.name}
                                  </li>
                                ))}
                              </ul>
                            )}
                            <div class='ant-select-search ant-select-search--inline'>
                              <div class='ant-select-search__field__wrap'>
                                <input
                                  autocomplete='off'
                                  class='ant-select-search__field'
                                  value={country || selectedValue}
                                  onClick={() => setFocusInput(!focusInput)}
                                  onChange={handleChangeInput}
                                />
                                <span class='ant-select-search__field__mirror'>
                                  &nbsp;
                                </span>
                              </div>
                            </div>
                          </div>
                          <span
                            class='ant-select-arrow'
                            unselectable='on'
                            onClick={() => setFocusInput(!focusInput)}>
                            <i
                              aria-label='icon: down'
                              class='anticon anticon-down ant-select-arrow-icon'>
                              <svg
                                viewBox='64 64 896 896'
                                focusable='false'
                                class=''
                                data-icon='down'
                                width='1em'
                                height='1em'
                                fill='currentColor'
                                aria-hidden='true'>
                                <path d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'></path>
                              </svg>
                            </i>
                          </span>
                        </div>
                      </div>
                      <div
                        class='ant-select-lg ant-select ant-select-disabled'
                        style={{ width: "200px" }}>
                        <div
                          class='ant-select-selection
            ant-select-selection--single'
                          role='combobox'
                          aria-autocomplete='list'
                          aria-haspopup='true'
                          aria-controls='ca1c55bd-283b-4a8c-ba24-a999f7f84dcf'
                          aria-expanded='false'
                          tabindex='-1'>
                          <div class='ant-select-selection__rendered'>
                            <div
                              unselectable='on'
                              class='ant-select-selection__placeholder'
                              style={{ display: "block", userSelect: "none" }}>
                              Province/State
                            </div>
                            <div
                              class='ant-select-search ant-select-search--inline'
                              style={{ display: "none" }}>
                              <div class='ant-select-search__field__wrap'>
                                <input
                                  autocomplete='off'
                                  disabled=''
                                  class='ant-select-search__field'
                                  value=''
                                />
                                <span class='ant-select-search__field__mirror'>
                                  &nbsp;
                                </span>
                              </div>
                            </div>
                          </div>
                          <span
                            class='ant-select-arrow'
                            unselectable='on'
                            style={{ userSelect: "none" }}>
                            <i
                              aria-label='icon: down'
                              class='anticon anticon-down ant-select-arrow-icon'>
                              <svg
                                viewBox='64 64 896 896'
                                focusable='false'
                                class=''
                                data-icon='down'
                                width='1em'
                                height='1em'
                                fill='currentColor'
                                aria-hidden='true'>
                                <path d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'></path>
                              </svg>
                            </i>
                          </span>
                        </div>
                      </div>
                      <input
                        placeholder='City'
                        type='text'
                        class='ant-input'
                        value=''
                        style={{ width: "200px", height: "42px" }}></input>
                    </div>
                  </div>
                  <div class='form-item-container'>
                    <label class='autoRequired ant-form-item-required'>
                      Zipcode
                    </label>
                    <div class='form-item'>
                      <input
                        maxlength='28'
                        placeholder='Please enter Post/ZIP code'
                        type='text'
                        class='ant-input'
                        value=''
                        style={{ width: "620px", height: "42px" }}
                      />
                    </div>
                  </div>
                  <div class='form-item-container'>
                    <label class='autoRequired ant-form-item-required'>
                      Full Address
                    </label>
                    <div class='form-item'>
                      <textarea
                        maxlength='300'
                        placeholder='Example: Street No., Block No./Room No.'
                        class='ant-input'
                        style={{ width: "620px", height: "100px" }}></textarea>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class='section-content'>
              <div class='title'>
                Product Info（You can submit product info manually entered
                together with products selected from the warehouse）
              </div>
              <div class='sub-title'>Select produtcs from my warehouse</div>
              <div class='product-table-wrapper show'>
                <span>
                  <span>
                    <div style={{ paddingLeft: "20px" }}>
                      <button
                        type='button'
                        class='ant-btn warehouse-btn ant-btn-dashed ant-btn-lg'>
                        <i aria-label='icon: plus' class='anticon anticon-plus'>
                          <svg
                            viewBox='64 64 896 896'
                            focusable='false'
                            class=''
                            data-icon='plus'
                            width='1em'
                            height='1em'
                            fill='currentColor'
                            aria-hidden='true'>
                            <path d='M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z'></path>
                            <path d='M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z'></path>
                          </svg>
                        </i>
                        <span>Select</span>
                      </button>
                    </div>
                  </span>
                </span>
              </div>
            </div>
            <div className='section-content underline cargo-content'>
              <div className='sub-title'>Enter cargo info manually</div>
              <div className='cargo-container show'>
                <div className='labels'>
                  <span>
                    <label>Cargo name</label>
                  </span>
                  <span>
                    <label>Quantity</label>
                  </span>
                  <span>
                    <label>Material</label>
                    <i class='ri-question-fill'></i>
                  </span>
                  <span>
                    <label>Total Weight (g)</label>
                  </span>
                  <span>
                    <label>
                      Volume (cm)
                      <em>
                        Please fill the packed dimension and weight of the item
                        in this blank
                      </em>
                    </label>
                  </span>
                </div>
                {Array.from({ length: inputCount }).map((_, index) => (
                  <div className='cargo-list-container' key={index}>
                    <div className='cargo-item-container'>
                      <input
                        placeholder='Please fill in product name or URL, or Superbuy order ID'
                        type='text'
                        className='ant-input'
                        style={{ width: "270px", height: "46px" }}
                      />
                      <input
                        maxLength='10'
                        type='text'
                        className='ant-input'
                        style={{ width: "50px", height: "46px" }}
                      />
                      <input
                        maxLength='100'
                        type='text'
                        className='ant-input'
                        style={{ width: "170px", height: "46px" }}
                      />
                      <input
                        maxLength='16'
                        type='text'
                        className='ant-input'
                        style={{ width: "120px", height: "46px" }}
                      />
                      <div
                        className='ant-input-group ant-input-group-compact'
                        style={{ width: "300px", height: "46px" }}>
                        <input
                          maxLength='10'
                          placeholder='Length'
                          type='text'
                          className='ant-input'
                          style={{ width: "33%", height: "46px" }}
                        />
                        <input
                          maxLength='10'
                          placeholder='Width'
                          type='text'
                          className='ant-input'
                          style={{ width: "33%", height: "46px" }}
                        />
                        <input
                          maxLength='10'
                          placeholder='Height'
                          type='text'
                          className='ant-input'
                          style={{ width: "33%", height: "46px" }}
                        />
                      </div>
                      <div className='operation-btn'>
                        <button
                          type='button'
                          className='add'
                          onClick={handleAddInputs}></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class='section-content'>
              <div class='title'>Remark</div>
              <div class='ant-row ant-form-item'>
                <span class='ant-form-item-children'>
                  <textarea
                    maxlength='150'
                    placeholder='Can fill in the special requirements, such as: time, freight etc.'
                    id='normal_login_remark'
                    data-__meta='[object Object]'
                    data-__field='[object Object]'
                    class='ant-input'
                    style={{ height: "100px" }}></textarea>
                </span>
              </div>
            </div>
            <div class='ant-row ant-form-item submit-form-item'>
              <div class='ant-form-item-control-wrapper'>
                <span class='ant-form-item-children'>
                  <button
                    type='submit'
                    class='ant-btn submit-btn ant-btn-primary'>
                    <span>Submit</span>
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Customization;
