import React,{ useState } from 'react'
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
// import { ToastContainer, toast } from "react-toastify";
import {Link,useNavigate} from "react-router-dom"
import "./SignIn.css"

const SignIn = () => {
    // const { register,submitHandler,error} = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [username] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(username);
    console.log(email);
    console.log(password);
    const handleSubmit = (e) => {
      e.preventDefault();
      if (localStorage.getItem("email") === email && localStorage.getItem("password") === password) {
  
        dispatch(authActions.login());
        navigate("/header")
      } else {
        alert("Invalid Email OR Password")
      }
    };
  return (
    <div className="form-controls">     
        <form>
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
         <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        </form>
        <div className="button">

        <p>New User ? <Link to="/signup"><button className='signup-btn'>Click Here</button></Link></p>
        </div>
        </div>
  )
}

export default SignIn
