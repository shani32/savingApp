import React from "react";
import "./NavBar.styles.css";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("isLogin");
  };

  return (
    <div className="navbar-container">
      <div className="side-one">
        <Link to={"/"}>
          <span className="homepage-icon">Homepage</span>
        </Link>
        <Link to={"/mySpace"}>
          <span className="home-icon">My Space</span>
        </Link>
        <Link to={"/addTransactions"}>
          <span className="transaction-icon">Add Transaction</span>
        </Link>
      </div>
      <div className="side-two">
        <Link to={"/login"}>
          <span onClick={logOut} className="login">
            {location.pathname === "/login" ? "Login" : "Logout"}
          </span>
        </Link>
      </div>
    </div>
  );
};
