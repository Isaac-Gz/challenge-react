import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import AccountsList from "../Accounts/AccountsList";
import NewAccount from "../Accounts/NewAccount/NewAccount";
import UpdateAccount from "../Accounts/UpdateAccount/UpdateAccount";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import NormalUser from "../NormalUser/NormalUser";
import NewRecord from "../Records/NewRecord/NewRecord";
import RecordsList from "../Records/RecordsList";
import NewTeam from "../Teams/NewTeam/NewTeam";
import TeamsList from "../Teams/TeamsList";
import UpdateTeam from "../Teams/UpdateTeam/UpdateTeam";
import NewUser from "../Users/NewUser/NewUser";
import UpdateUser from "../Users/UpdateUser/UpdateUser";
import UsersList from "../Users/UsersList";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="/" element={<Navbar />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.USER_LIST} element={<UsersList />} />
          <Route path={ROUTES.CREATE_USER} element={<NewUser />} />
          <Route path={ROUTES.UPDATE_USER} element={<UpdateUser />} />
          <Route path={ROUTES.ACCOUNT_LIST} element={<AccountsList />} />
          <Route path={ROUTES.CREATE_ACCOUNT} element={<NewAccount />} />
          <Route path={ROUTES.UPDATE_ACCOUNT} element={<UpdateAccount />} />
          <Route path={ROUTES.TEAM_LIST} element={<TeamsList />} />
          <Route path={ROUTES.CREATE_TEAM} element={<NewTeam />} />
          <Route path={ROUTES.UPDATE_TEAM} element={<UpdateTeam />} />
          <Route path={ROUTES.RECORD_LIST} element={<RecordsList />} />
          <Route path={ROUTES.CREATE_RECORD} element={<NewRecord />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.UPDATE} element={<NormalUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
