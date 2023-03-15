import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUsers } from "../../api/users";

const UsersList = () => {
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await getUsers();
    setUsers(data);
  }

  const deleteUser = (id) => {
    return 'asdf';
  }

  const updateUser = (id) => {

  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Users</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/user/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>type_id</td>
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
                    <td>{user.name}</td>
                    <td>{user.mail}</td>
                    <td>{user.english_level}</td>
                    <td>{user.tec_knowledge}</td>
                    <td>{user.cv}</td>
                    <td>
                      <button
                        onClick={updateUser(user.id)}
                        className="btn btn-success"
                      >
                        Edit
                      </button>
                      <button
                        onClick={deleteUser(user.id)}
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
