import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAccounts, deleteAccount } from "../../api/accounts";
import { ToastContainer } from "react-toastify";
import { validData } from "../../helpers/alerts.helpers";

const AccountsList = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const status = queryParameters.get("status");

  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
    toastMessage();
  }, []);

  const getData = async () => {
    const { data } = await getAccounts();
    setAccount(data);
  };

  const toastMessage = () => {
    if (status) {
      if (status === "updated") {
        validData("Cuenta modificada correctamente");
      } else if (status === "created") {
        validData("Cuenta creada correctamente");
      } else if (status === "deleted") {
        validData("Cuenta eliminada");
      }
    }
  };

  const removeUser = async (id) => {
    const result = await deleteAccount(id);
    console.log(result);
    navigate("/account?status=deleted");
    window.location.reload();
  };

  const updateUser = (id) => {
    navigate("/account/update?id=" + id);
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
          <h2>Accounts</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/account/create" className="btn btn-info">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Client Name</td>
                <td>Person In Charge</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {account &&
                account.map((account) => (
                  <tr key={account.id}>
                    <td>{account.id}</td>
                    <td>{account.account_name}</td>
                    <td>{account.client_name}</td>
                    <td>{account.in_charge_name}</td>
                    <td>
                      <button
                        onClick={() => updateUser(account.id)}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeUser(account.id)}
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

export default AccountsList;
