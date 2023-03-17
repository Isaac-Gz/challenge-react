import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getTeams, deleteTeam } from "../../api/teams";
import { ToastContainer } from "react-toastify";
import { validData } from "../../helpers/alerts.helpers";
const TeamsList = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const status = queryParameters.get("status");

  const [teams, setTeams] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
    toastMessage();
  }, []);

  const getData = async () => {
    const { data } = await getTeams();
    setTeams(data);
  };

  const toastMessage = () => {
    if (status) {
      if (status === "updated") {
        validData("Equipo modificado correctamente");
      } else if (status === "created") {
        validData("Equipo creado correctamente");
      } else if (status === "deleted") {
        validData("Equipo eliminado");
      }
    }
  };

  const removeTeam = async (id) => {
    const result = await deleteTeam(id);
    console.log(result);
    navigate("/team?status=deleted");
    window.location.reload();
  };

  const updateTeam = (id) => {
    navigate("/team/update?id=" + id);
  };

  return (
    <div className="container">
      <ToastContainer
        closeButton={true}
        position="bottom-right"
        autoClose="3000"
        hideProgressBar="true"
      />
      <div className="card">
        <div className="card-title">
          <h2>Teams</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/team/create" className="btn btn-info">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Account_ID</td>
                <td>Name</td>
                <td>Description</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {teams &&
                teams.map((team) => (
                  <tr key={team.id}>
                    <td>{team.id}</td>
                    <td>{team.account_id}</td>
                    <td>{team.name}</td>
                    <td>{team.description}</td>
                    <td>
                      <button
                        onClick={() => updateTeam(team.id)}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeTeam(team.id)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamsList;
