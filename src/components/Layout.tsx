import React from "react";
import Navigation from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
