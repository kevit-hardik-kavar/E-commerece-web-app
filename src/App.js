import "./App.css";
import Layout from "./Components/Layout/Layout";
// import Auth from "./Components/Login/Auth";
import Home from "./Components/Home/Home"
import { useSelector } from "react-redux";
// import { Route, Routes } from "react-router-dom";


function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loggedInSuccess = isLoggedIn || localStorage.getItem("isLoggedIn")
  return (
    <div className="App"> 
      {!loggedInSuccess && 
        <Home />
      }
      {loggedInSuccess && <Layout loggedInSuccess={true} />}
    </div>
  );
}

export default App;
