import React, { useRef, useState } from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { ToastContainer, toast } from "react-toastify";
// import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';


const Auth = () => {
  const usernameData = useRef()
  const emailData = useRef()
  const passwordData = useRef()
  // const { register,submitHandler,error} = useForm()
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false)
  const username = ""
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  console.log(username);
  console.log(email);
  console.log(password);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("email") === email && localStorage.getItem("password") === password) {

      dispatch(authActions.login());
    } else {
      toast.error("Invalid Email OR Password")
    }
  };

  const handleSignUp = () => {
    setDisplay(true)

  }
  const handleSave = () => {
    setDisplay(false)
    localStorage.setItem("username", usernameData.current.value)
    localStorage.setItem("email", emailData.current.value)
    localStorage.setItem("password", passwordData.current.value)
    toast.success("signup successfully !")
  }

  return (
    <React.Fragment>

      {!display && <div className="form-controls">
        <h1>Login </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            id="email"
            required
            value={email}
            autoComplete="off"
            onChange={e => setEmail(e.target.value)} />
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)} />
          <input type="submit" value="Login" id="submit" />
        </form>
        <p>New User ? <button onClick={handleSignUp}>Click Here</button></p>
        <ToastContainer position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
      </div>}
      {display &&
        <div className="sign-up-form">
          <h2>SignUp</h2>
          <form className="sign-up-form-detail">
              <label htmlFor="username">UserName : </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                required
                autoFocus="on"
                ref={usernameData}
                onChange={e => e.target.value} 
                pattern="[a-zA-Z]"/>
              <label htmlFor="email">Email : </label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                required
                ref={emailData}
                onChange={e => e.target.value}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
              <label htmlFor="password">Password : </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                minLength={8}
                maxLength={12}
                ref={passwordData}
                onChange={e => e.target.value} />
          <button onClick={handleSave}>SignUp</button>

          </form>
        </div>}

    </React.Fragment>
  );
};

export default Auth;
