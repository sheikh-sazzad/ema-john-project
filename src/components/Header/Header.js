import React from "react";
import "./Header.css";
import logo from "../../images/run.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="header">
      <div>
        <img className="logo" src={logo} alt="" />
      </div>
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
        <span>{user?.email}</span>
      </div>
    </nav>
  );
};

export default Header;
