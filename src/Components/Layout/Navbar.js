import React from "react";
import "./Navbar.css";
import Logo from "./Kevit White Logo.svg";
import {useDispatch , useSelector } from "react-redux";
import { authActions } from "../store/authSlice"
// import { cartActions } from '../store/cartSlice'
import { Link,useNavigate } from "react-router-dom"




const Navbar = () => {
  const quantity = useSelector(state => state.cart.totalQuantity)
  const navigate = useNavigate()
  const dispatch = useDispatch();
 

  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/home")
    dispatch(authActions.logout());
    
    // localStorage.setItem("email","")
    // localStorage.setItem("username","")
    // localStorage.setItem("password","")
  };


  return (
    <div className="navigation">
      <div className="company-logo">
        <Link to="/header">
          <img src={Logo} alt="" width="50px" />
        </Link>
      </div>
      <div className="navbar">
        <input type="text" placeholder="Search Here..." />
        <div className="product">
          <Link to="/products">
            <p>Products</p>
          </Link>
        </div>
        <Link to='/cart' >
          <button >
            <span>
              <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
            </span>
            <span>{quantity}</span>
            <span>{quantity <= 1 ? "Item" : "Items"}</span>
          </button>
        </Link>
        <Link to="/userDetail" >
          <span><i className="fa fa-user-circle fa-2x" ></i></span>
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
