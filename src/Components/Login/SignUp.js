import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"
// import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
    const Navigate = useNavigate()
    const usernameData = useRef()
    const emailData = useRef()
    const passwordData = useRef()

    const handleSave = () => {
        localStorage.setItem("username", usernameData.current.value)
        localStorage.setItem("email", emailData.current.value)
        localStorage.setItem("password", passwordData.current.value)
        // toast.success("signup successfully !")
        Navigate("/signin")
    }
    return (
        <div className="sign-up-form">
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
                     />
                <label htmlFor="email">Email : </label>
                <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    required
                    ref={emailData}
                    onChange={e => e.target.value} />
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
        </div>
    )
}

export default SignUp
