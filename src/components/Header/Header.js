import React from "react";
import "./Header.css";
import logo from "../../images/run.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <img className="logo" src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
