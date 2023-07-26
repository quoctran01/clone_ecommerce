import React from "react";

const Populate = ({ data, index }) => {
  return (
    <li key={index}>
      <a href=''>
        <i className='icon-outer'>
          <i class={data.icon}></i>
        </i>
        <span> {data.option}</span>
      </a>
    </li>
  );
};
export default Populate;
