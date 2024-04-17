import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LayoutStatic from "./LayoutStatic";
import Home from "./Home";
import LightSideNav from "./LightSideNav";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import ForgotPassword from "./Authentication/ForgotPassword";
import Error401 from "./Error/401";
import Error404 from "./Error/404";
import Error500 from "./Error/500";
import Navbar from "./Components/Navbar";
import SideNav from "./Components/SideNav";
import Charts from "./Charts";
import Tables from "./Tables";

const App = () => {
  const [navtoggled, setNavtoggled] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const handleNavToggling = () => {
    setNavtoggled(!navtoggled);
  };

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/forgot-password" ||
      location.pathname === "/401" ||
      location.pathname === "/404" ||
      location.pathname === "/500"
    ) {
      setShowMenu(false);
    }
  }, []);

  return (
    <>
      <div
        className={`sb-nav-fixed ${navtoggled ? " sb-sidenav-toggled" : ""}`}
      >
        {showMenu && <Navbar handleNavToggling={handleNavToggling} />}
        <div id="layoutSidenav">
          {showMenu && <SideNav />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layout-static" element={<LayoutStatic />} />
            <Route path="/light-sidenav" element={<LightSideNav />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/401" element={<Error401 />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/500" element={<Error500 />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
