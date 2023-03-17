import React, { useState, useEffect } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "../../helpers/localStorage.helpers";
import { useNavigate } from "react-router-dom";
import { getType } from "../../helpers/getUserType";
import './Home.css'

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
    const data = await getType();
    setName(data.name);
    setType(data.type_id);
    setLocalStorageItem("type", type_id);
    setLocalStorageItem("id", data.id);
    if(type_id === 3){
      navigate(`/update?id=${data.id}`);
    }
  };

  return (
    <div className="container divHome">
      <div className="card">
        <div className="card-title">
          <div className="asd">
            <h2>Mind Teams Challenge</h2>
            <h4>Welcome: {name}</h4>
          </div>
        </div>
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default Home;
