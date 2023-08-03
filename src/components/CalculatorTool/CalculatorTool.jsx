import React, { useState } from "react";

const listCountry = [
  "All",
  "USA",
  "Canada",
  "UK",
  "Germany",
  "Australia",
  "France",
  "Japan",
  "Other",
];
const commontItems = [
  {
    title: "Textiles/Leather Items",
    subtitle: ["World-Wide Famous Brand", "Common Brand", "No Brand"],
  },
  {
    title: "Liquid/Powder",
    subtitle: [
      "Liquid below 10ML",
      "Paste, cosmetic powder, 10ML ≥ liquid ≤ 50ML",
      "Non-cosmetic powder, 50ML＞liquid ≤ 500ML",
    ],
  },
  {
    title: "Digital/Electrical",
    subtitle: ["Appliances", "Built-in battery", "Battery", "Battery(1 piece)"],
  },
  {
    title: "Foods/Medicine",
    subtitle: [
      "Meat products",
      "Foodstuff",
      "Medicine",
      "Liquid below 10ML",
      "Paste, cosmetic powder, 10ML ≥ liquid ≤ 50ML",
      "Non-cosmetic powder, 50ML＞liquid ≤ 500ML",
    ],
  },
  {
    title: "Others",
    subtitle: [
      "Medical Consumable",
      "Personal Protective Equipment",
      "Other restrictions",
      "Special commodity",
      "artifical wooden products",
      "Glasses",
      "Adult products",
    ],
  },
  {
    title: "Common Items",
    subtitle: ["Common Items"],
  },
];
const CalculatorTool = () => {
  const [openCountry, setOpenCountry] = useState(false);
  const [openCommon, setOpenCommon] = useState(false);
  const [option, setOption] = useState("USA");
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);
  const onSelecOption = (item) => {
    setOption(item);
    setOpenCountry(false);
  };
  const handleItemToggle = (index) => {
    if (expandedItemIndex === index) {
      setExpandedItemIndex(null);
    } else {
      setExpandedItemIndex(index);
    }
  };
  return (
    <>
      <div className='main-tools_container'>
        <div className='tools-express'>
          <h2>Shipping Calculator</h2>
          <div className='form-item'>
            <div className='input-wrap country-select active'>
              <input
                type='text'
                placeholder=''
                readonly=''
                value={option}
                onClick={() => setOpenCountry(!openCountry)}
              />
              <span onClick={() => setOpenCountry(!openCountry)}>
                <i class='ri-arrow-drop-down-line'></i>
              </span>
              <section
                class={`pick-container country-pick ${
                  openCountry && "active"
                }`}>
                <ul class='country-list d-flex flex-wrap position-relative'>
                  {listCountry.map((item, index) => (
                    <li key={index} onClick={() => onSelecOption(item)}>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
              <div class='input-wrap weight-input'>
                <input
                  type='text'
                  placeholder=''
                  value='1000'
                  style={{ marginLeft: "10px" }}
                />
                <span>g</span>
              </div>
            </div>
          </div>
          <div className='form-item product-type-select'>
            <input
              type='text'
              title='Common Items...'
              onClick={() => setOpenCommon(!openCommon)}
            />
            <span class='input-des' title='Common Items...'>
              Common Items...
            </span>
            <button>Search</button>
            <section
              class={`pick-container goods-type-pick ${
                openCommon && "active"
              }`}>
              <ul class='goods-type-list p-0 m-0'>
                {commontItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleItemToggle(index)}
                    className='goods-type-list--item'>
                    {item.title}
                    {expandedItemIndex === index && (
                      <ul className='p-0 mb-0 mt-2 goods-type-list__children'>
                        {item.subtitle.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className='express-list mb-2'>
            <p class='express-tips d-flex justify-content-between'>
              <p className='m-0 d-block'>
                <em>10</em>lines available
              </p>
              <a href=''>More</a>
            </p>
            <ul className='m-0 p-0'>
              <li class='header d-flex text-center'>
                <span>Name</span>
                <span>Speed</span>
                <span>Fee</span>
              </li>
              <li className='d-flex'>
                <span title='Duty-Free Air Express'>Duty-Free Air Express</span>
                <span title='8-15 days'>8-15 days</span>
                <span>$28.62</span>
              </li>
              <li className='d-flex'>
                <span title='Superbuy Air Mail'>Superbuy Air Mail</span>
                <span title='8-13 days'>8-13 days</span>
                <span>$20.09</span>
              </li>
              <li className='d-flex'>
                <span title='EUB Preferential Line-XN'>
                  EUB Preferential Line-XN
                </span>
                <span title='10-20 days'>10-20 days</span>
                <span>$23.6</span>
              </li>
              <li className='d-flex'>
                <span title='SF Ecommerce Express-CD'>
                  SF Ecommerce Express-CD
                </span>
                <span title='12-15 days'>12-15 days</span>
                <span>$23.41</span>
              </li>
              <li className='d-flex'>
                <span title='EMS'>EMS</span>
                <span title='10-20 days'>10-20 days</span>
                <span>$39.43</span>
              </li>
              <li className='d-flex'>
                <span title='US Packet by Sea'>US Packet by Sea</span>
                <span title='20-25 days'>20-25 days</span>
                <span>$13.7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default CalculatorTool;
