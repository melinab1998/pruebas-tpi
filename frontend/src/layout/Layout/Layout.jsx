import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";

const Layout = () => {
  
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {<NavBar showLogin={showLogin} setShowLogin={setShowLogin} />}

      <Outlet />

      {/*<Footer />*/}

      <Login showLogin={showLogin} />
    </>
  );
};

export default Layout;
