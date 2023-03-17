import React from "react";
import { useNavigate } from "react-router-dom";
import { createTeam } from "../../../api/teams";
import { invalidData } from "../../../helpers/alerts.helpers";
import { ToastContainer } from "react-toastify";
const NewTeam = () => {
  const navigate = useNavigate();
  const capturarDatos = async (e) => {
    e.preventDefault();
    let target = e.target;
    const user = {
      account_id: parseInt(target.account_id.value),
      name: target.name.value,
      description: target.description.value,
    };
    try {
      await createTeam(user);
      navigate("/team?status=created");
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
          <h2 class="text-center text-dark mt-5">Create Team </h2>
          <form class="row g-3" onSubmit={capturarDatos}>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Account ID
              </label>
              <input
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

export default NewTeam;
