import React, { useState, useEffect } from "react";
import { getLocalStorageItem } from "../../helpers/localStorage.helpers";
import { useNavigate } from "react-router-dom";
import { getUserByMail } from "../../api/users";
import jwt_decode from "jwt-decode";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  });

  const [name, setName] = useState();
  const [type_id, setType] = useState();

  const getUser = async () => {
    const token = getLocalStorageItem("accessToken");
    if (!token) {
      navigate("/login");
    }
    const { mail } = jwt_decode(token);
    const user = await getUserByMail(mail);
    const { data: { name, type_id } } = user;
    setName(name);
    setType(type_id);
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>User_Type: {type_id}</h1>
    </div>
  );
};

export default Home;
