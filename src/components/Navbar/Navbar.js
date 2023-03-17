import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { removeLocalStorageItem, getLocalStorageItem } from "../../helpers/localStorage.helpers";
import "./Navbar.css";

const Navbar = () => {

  const navigate = useNavigate();

  const logout = () => {
    removeLocalStorageItem("accessToken");
    removeLocalStorageItem("type");
    removeLocalStorageItem("id");
    navigate('/login');
  }

  useEffect(() => {
    const token = getLocalStorageItem("accessToken");
    if (!token) {
      navigate("/login");
    }
    const type_id = getLocalStorageItem("type");
    const id = getLocalStorageItem("id");
    if(type_id === "3"){
      navigate(`/update?id=${id}`);
    }
  }, []);

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
                <Link to="/record">Records</Link>
              </li>
              <li>
                <button className="but1" onClick={logout}>Logout</button>
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
