import React, { useState } from 'react'
import Header from '../Layout/Header'
import SignIn from '../Login/SignIn'
import SignUp from '../Login/SignUp'
import Footer from "../Footer/Footer"
import { Routes, Route, useNavigate } from "react-router-dom"
import Logo from "../Layout/Kevit White Logo.svg";
import BG from "../Layout/bgImage.jpg";
import "./Home.css"

const Home = () => {
  const [display, setDisplay] = useState(false)
  const navigate = useNavigate()
  const handleLogIn = () => {

    navigate("/signin")
    setDisplay(true)
    // window.location.reload()
  }
  return (
    <>
      <div>
        {!display && <div>
          <div className="nav">
            <img src={Logo} alt="Company Logo" />
            <button onClick={handleLogIn}>Login</button>
          </div>
          <div className="bg-image">
           
            <img src={BG} alt="background " />
          </div>
         <Footer />
        </div>}
      </div>
      {display && <div>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>}
    </>
  )
}

export default Home
