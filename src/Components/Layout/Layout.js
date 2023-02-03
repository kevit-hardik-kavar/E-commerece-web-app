import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Header from "./Header";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";


const Layout = () => {
  const showCart = useSelector(state=> state.cart.showCart)
  return (
    <div>
      <Navbar />
     {!showCart && <Header /> }
      {showCart && <CartItems />}
      {!showCart && <ProductList />}

    </div>
  );
};

export default Layout;
