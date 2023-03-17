import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { invalidData } from "../../../helpers/alerts.helpers";
import { getTeamById, updateTeam } from "../../../api/teams";
const UpdateTeam = () => {
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");

  const [account_id, setAccountId] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    getTeam();
  }, []);

  const getTeam = async () => {
    const { data } = await getTeamById(id);
    setAccountId(data.account_id);
    setName(data.name);
    setDescription(data.description);
  };

  const capturarDatos = async (e) => {
    e.preventDefault();
    let target = e.target;
    const team = {
      account_id: parseInt(target.account_id.value),
      name: target.name.value,
      description: target.description.value,
    };
    try {
      await updateTeam(id, team);
      navigate("/team?status=updated");
    } catch (error) {
      invalidData("Error al ingresar los datos");
      console.log(error);
    }
  };

  return (
    <div class="container">
      <ToastContainer
        closeButton={true}
        position="bottom-right"
        autoClose="3000"
        hideProgressBar="true"
      />
      <div class="row">
        <div class="offset-lg-3 col-lg-6">
          <h2 class="text-center text-dark mt-5">Update Team</h2>
          <form class="row g-3" onSubmit={capturarDatos}>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Account ID
              </label>
              <input
                value={account_id}
                onChange={(e) => setAccountId(e.target.value)}
                type="number"
                className="form-control"
                id="inputEmail4"
                name="account_id"
              />
            </div>
            <div className="col-md-6">
              <label for="inputName" className="form-label">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="inputName"
                name="name"
              />
            </div>
            <div className="col-12">
              <label for="inputMail" className="form-label">
                Description
              </label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
                id="inputMail"
                name="description"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTeam;
