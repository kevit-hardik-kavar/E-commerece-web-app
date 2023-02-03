import "./App.css";
import Layout from "./Components/Layout/Layout";
import Auth from "./Components/Login/Auth";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const loggedInsuccess = isLoggedIn || localStorage.getItem("isLoggedIn")
  return (
    <div className="App">
      {!loggedInsuccess && <Auth />}
      {loggedInsuccess && <Layout />}
    </div>
  );
}

export default App;
