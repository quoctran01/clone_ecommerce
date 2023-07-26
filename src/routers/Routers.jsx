import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../page/Home";
import Shoppingagent from "../page/Shoppingagent";
import Shoppingcart from "../page/Shoppingcart";
import ProductDetail from "../page/ProductDetail";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shoppingagent' element={<Shoppingagent />} />
        <Route path='/shoppingcart' element={<Shoppingcart />} />
        <Route path='/shoppingcart' element={<Shoppingcart />} />
        <Route path='/shop/:id' element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default Routers;
