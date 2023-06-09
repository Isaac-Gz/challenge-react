import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUsers, deleteUser } from "../../api/users";
import { ToastContainer } from "react-toastify";
import { validData } from "../../helpers/alerts.helpers";

const UsersList = () => {

  const queryParameters = new URLSearchParams(window.location.search);
  const status = queryParameters.get("status");

  const [users, setUsers] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
    toastMessage();
  }, []);

  const getData = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  const toastMessage = () => {
    if(status){
      if(status === "updated"){
        validData('Usuario modificado correctamente');
      } else if(status === "created"){
        validData("Usuario creado correctamente");
      } else if(status === "deleted"){
        validData("Usuario eliminado");
      }
    }
  }

  const removeUser = async (id) => {
    const result = await deleteUser(id);
    console.log(result);
    navigate('/user?status=deleted');
    window.location.reload();
  };

  const updateUser = (id) => {
    navigate('/user/update?id=' + id);
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
          <h2>Users</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/user/create" className="btn btn-info">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>type_id</td>
                <td>team_id</td>
                <td>name</td>
                <td>mail</td>
                <td>english_level</td>
                <td>tec_knowledge</td>
                <td>CV</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.type_id}</td>
                    <td>{user.team_id}</td>
                    <td>{user.name}</td>
                    <td>{user.mail}</td>
                    <td>{user.english_level}</td>
                    <td>{user.tec_knowledge}</td>
                    <td>{user.cv}</td>
                    <td>
                      <button
                        onClick={() => updateUser(user.id)}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeUser(user.id)}
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

export default UsersList;
