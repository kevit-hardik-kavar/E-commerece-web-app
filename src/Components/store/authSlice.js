import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { 
    isLoggedIn: false,
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    MobileNumber:"",

   },
 
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true")
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn")
      window.location.reload()
    },
    signUp(state){
      state.isLoggedIn = true;
      
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice;
