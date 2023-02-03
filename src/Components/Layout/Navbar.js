import React from "react";
import "./Navbar.css";
import Logo from "./Kevit White Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice"
import { cartActions } from '../store/cartSlice'




const Navbar = () => {
  const quantity = useSelector(state => state.cart.totalQuantity)

  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart())
    
  }

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <div className="navigation">
      <div className="company-logo">
        <img src={Logo} alt="" width="50px" />
      </div>
      <div className="navbar">
        <input type="text" placeholder="Search Here..." />
        <button onClick={showCart}>
          <span>
            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
          </span>
          <span>{quantity} </span>
          <span>{quantity <= 1 ? "Item" : "Items"}</span>
        </button>
        <p>Welcome username</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
