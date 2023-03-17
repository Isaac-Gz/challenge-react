import React from "react";
import { useNavigate } from "react-router-dom";
import { createRecord } from "../../../api/records";
import { getTeamById } from "../../../api/teams";
import { getUserById, updateUserTeam } from "../../../api/users";
import { invalidData } from "../../../helpers/alerts.helpers";
import { ToastContainer } from "react-toastify";

const NewRecord = () => {
  const navigate = useNavigate();
  const capturarDatos = async (e) => {
    e.preventDefault();
    let target = e.target;
    const record = {
      user_id: parseInt(target.user_id.value),
      old_team_id: parseInt(target.old_team_id.value),
      new_team_id: parseInt(target.new_team_id.value),
      start_date: target.start_date.value,
      end_date: target.end_date.value,
    };
    try {
        await getUserById(record.user_id);
    } catch (error) {
        invalidData("Usuario inexistente");
        console.log(error);
    }
    try {
        await getTeamById(record.old_team_id);
        await getTeamById(record.new_team_id);
    } catch (error) {
        invalidData("Equipo inexistente");
        console.log(error);
    }

    try {
      await updateUserTeam(record.user_id, record.new_team_id);
      await createRecord(record);
      navigate("/record?status=created");
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
          <h2 class="text-center text-dark mt-5">Create Record</h2>
          <form class="row g-3" onSubmit={capturarDatos}>
            <div className="col-md-4">
              <label for="inputEmail4" className="form-label">
                User ID
              </label>
              <input
                type="number"
                className="form-control"
                id="inputEmail4"
                name="user_id"
              />
            </div>
            <div className="col-md-4">
              <label for="inputName" className="form-label">
                Old Team ID
              </label>
              <input
                type="number"
                className="form-control"
                id="inputName"
                name="old_team_id"
              />
            </div>
            <div className="col-md-4">
              <label for="inputMail" className="form-label">
                New Team ID
              </label>
              <input
                type="number"
                className="form-control"
                id="inputMail"
                name="new_team_id"
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                id="inputPassword"
                name="start_date"
              />
            </div>
            <div className="col-md-6">
              <label for="inputEnglish" className="form-label">
                End Date
              </label>
              <input
                type="date"
                className="form-control"
                id="inputEnglish"
                name="end_date"
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

export default NewRecord;
