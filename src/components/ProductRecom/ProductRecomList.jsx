import React from "react";
import ProductRecom from "./ProductRecom";
import "./product-recomend.css";
import "../../style/custom-scrollbar.css";

const ProductRecomList = ({ data }) => {
  return (
    <>
      <ul className='goods-list p-0 custom-scrollbar'>
        {data.map((item, index) => (
          <ProductRecom key={index} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ProductRecomList;
