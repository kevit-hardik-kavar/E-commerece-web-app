import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "../Footer/Footer"
import CartItems from "./CartItems";
import {  Routes , Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import UserDetail from "./UserDetail";


const Layout = () => {

  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/header" element= {<Header />} />
      <Route path="/cart" element={<CartItems/>} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />}/>
      <Route path="/userDetail" element={<UserDetail />} />
      </Routes>
      <Footer />


    </div>
  );
};

export default Layout;
