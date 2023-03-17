import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  getRecords,
  deleteRecord,
  getRecordsByOldTeam,
  getRecordById,
  getRecordsByUser,
  getRecordsByStartDate,
  getRecordsByEndDate,
} from "../../api/records";
import { ToastContainer } from "react-toastify";
import { validData } from "../../helpers/alerts.helpers";
import { getUserByName } from "../../api/users";

const RecordsList = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const status = queryParameters.get("status");

  const [records, setRecords] = useState(null);
  const [find, setFind] = useState("");
  const [selec, setSelec] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    getData();
    toastMessage();
  }, []);

  const getData = async () => {
    const { data } = await getRecords();
    setRecords(data);
  };

  const toastMessage = () => {
    if (status) {
      if (status === "created") {
        validData("Registro creado correctamente");
      } else if (status === "deleted") {
        validData("Registro eliminado");
      }
    }
  };

  const removeRecord = async (id) => {
    const result = await deleteRecord(id);
    console.log(result);
    navigate("/record?status=deleted");
    window.location.reload();
  };

  const setSearch = (e) => {
    setFind(e.target.value);
  };

  const search = async () => {
    if (find === "0") {
      getData();
    } else if (find === "1") {
      const { data } = await getRecordsByOldTeam(selec);
      setRecords(data);
    } else if (find === "2"){
        const { data: user } = await getUserByName(selec);
        const { data } = await getRecordsByUser(user.id);
        setRecords(data);
    } else if (find === "3"){
        const { data } = await getRecordsByStartDate(selec);
        setRecords(data);
    } else if (find === "4"){
        const { data } = await getRecordsByEndDate(selec);
        setRecords(data);
    }
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
          <h2>Records</h2>
        </div>
        <div className="card-body">
          <br />
          <select
            className="form-select from-select-sm"
            name="opcion"
            onChange={setSearch}
          >
            <option value="0">Sleccione busqueda</option>
            <option value="1">Por equipo</option>
            <option value="2">Por nombre</option>
            <option value="3">Por fecha inicio</option>
            <option value="4">Por fecha fin</option>
          </select>
          <br />
          <input
            type="text"
            className="form-control col-md-3"
            id="inputMail"
            name="inputOpcion"
            onChange={(e) => setSelec(e.target.value)}
          />
          <br />
          <div className="divbtn">
            <button onClick={() => search()} className="btn btn-success">
              Find
            </button>
          </div>
          <br />
          <br />
          <div className="divbtn">
            <Link to="/record/create" className="btn btn-info">
              Add New (+)
            </Link>
          </div>
          <br />
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>User ID</td>
                <td>Old Team ID</td>
                <td>New Team ID</td>
                <td>Start Date</td>
                <td>End Date</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {records &&
                records.map((record) => (
                  <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{record.user_id}</td>
                    <td>{record.old_team_id}</td>
                    <td>{record.new_team_id}</td>
                    <td>{record.start_date}</td>
                    <td>{record.end_date}</td>
                    <td>
                      <button
                        onClick={() => removeRecord(record.id)}
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

export default RecordsList;
