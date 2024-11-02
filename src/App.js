import { useEffect } from "react";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const navigate = useNavigate();
  const getLocalStorageData = localStorage.getItem("user_credentials");

  // logic
  useEffect(() => {
    if (getLocalStorageData === null) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
