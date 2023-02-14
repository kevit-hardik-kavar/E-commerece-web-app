import "./App.css";
import Layout from "./Components/Layout/Layout";
import Auth from "./Components/Login/Auth";
import { useSelector } from "react-redux";


function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loggedInSuccess = isLoggedIn || localStorage.getItem("isLoggedIn")
  return (
    <div className="App">
      
      {!loggedInSuccess && <Auth />}
      {loggedInSuccess && <Layout />}

      
      
    </div>
  );
}

export default App;
