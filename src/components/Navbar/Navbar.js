import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="containerNav">
          <div className="nav-elements">
            <ul>
              <li>
                <Link to="/user">Users</Link>
              </li>
              <li>
                <Link to="/account">Accounts</Link>
              </li>
              <li>
                <Link to="/team">Teams</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
