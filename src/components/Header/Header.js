import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../hook/hook";
import "./Header.css";

const Header = () => {
  const { user, handelSignOut } = useFirebase();
  return (
    <nav className="navbar">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to="/products"
      >
        Products
      </NavLink>
      {user?.uid ? (
        <button
          onClick={handelSignOut}
          style={{ marginLeft: "20px", fontSize: "14px", cursor: "pointer" }}
        >
          Sign Out
        </button>
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/login"
        >
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Header;
