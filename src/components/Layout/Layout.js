import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import Home from "../Home/Home";
import Login from "../Login/Login";
import CreateUser from "../Users/CreateUser/CreateUser";
import UsersList from "../Users/UsersList";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.USER_LIST} element={<UsersList />} />
        <Route path={ROUTES.CREATE_USER} element={<CreateUser />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
