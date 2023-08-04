import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../page/Home";
import Shoppingagent from "../page/Shoppingagent";
import Shoppingcart from "../page/Shoppingcart";
import ProductDetail from "../page/ProductDetail";
import Forwarding from "../page/Forwarding";
import Freight from "../page/Freight";
import Tracking from "../page/Tracking";
import Customization from "../page/Customization";
import Affilate from "../page/Affilate";
import Buckydrop from "../page/Buckydrop";
import CustomService from "../page/CustomService";
import Channel from "../page/Channel";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shoppingagent' element={<Shoppingagent />} />
        <Route path='/shoppingcart' element={<Shoppingcart />} />
        <Route path='/forward' element={<Forwarding />} />
        <Route path='/shop/:id' element={<ProductDetail />} />
        <Route path='/logistic/freight' element={<Freight />} />
        <Route path='/logistic/tracking' element={<Tracking />} />
        <Route path='/affilates' element={<Affilate />} />
        <Route path='/logistic/customization' element={<Customization />} />
        <Route path='/business/buckydrop' element={<Buckydrop />} />
        <Route path='/business/channel' element={<Channel />} />
        <Route path='/customservice' element={<CustomService />} />
      </Routes>
    </>
  );
};
export default Routers;
