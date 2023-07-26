import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, setOpenModal, handleOpenModal }) => {
  return (
    <>
      {products?.map((item, index) => (
        <ProductCard
          item={item}
          key={index}
          setOpenModal={setOpenModal}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </>
  );
};
export default ProductList;
