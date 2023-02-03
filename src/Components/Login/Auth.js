import React from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <div className="form-controls">
      <h1>Please Login to Continue Shopping</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username :</label>
        <input type="text" id="username" required autoComplete="off" />
        <label htmlFor="password">Password :</label>
        <input type="password" id="password" required />
        <input type="submit" value="Login" id="submit" />
      </form>
    </div>
  );
};

export default Auth;
