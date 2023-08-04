import React from "react";
import { Link } from "react-router-dom";

const ProductRecom = ({ item }) => {
  console.log(item);
  return (
    <>
      <li>
        <Link to={`/shop/${item.id}`}>
          <div class='img-container'>
            <img src={item.imgUrl} alt={item.productName} />
          </div>
          <p class='title' title={item.description}>
            {item.description}
          </p>
          <p class='price'>CN ￥ {item.price}</p>
        </Link>
      </li>
    </>
  );
};

export default ProductRecom;
