import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { invalidData } from "../../../helpers/alerts.helpers";
import { getAccountById, updateAccount } from "../../../api/accounts";

const UpdateAccount = () => {
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");

  const [account_name, setAccountName] = useState();
  const [client_name, setClientName] = useState();
  const [in_charge_name, setInChargeName] = useState();

  useEffect(() => {
    getAccount();
  }, []);

  const getAccount = async () => {
    const { data } = await getAccountById(id);
    setAccountName(data.account_name);
    setClientName(data.client_name);
    setInChargeName(data.in_charge_name);
  };

  const capturarDatos = async (e) => {
    e.preventDefault();
    let target = e.target;
    const account = {
      account_name: target.account_name.value,
      client_name: target.client_name.value,
      in_charge_name: target.in_charge_name.value,
    };
    try {
      await updateAccount(id, account);
      navigate("/account?status=updated");
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
          <h2 class="text-center text-dark mt-5">Update Account</h2>
          <form class="row g-3" onSubmit={capturarDatos}>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Account Name
              </label>
              <input
                value={account_name}
                onChange={(e) => setAccountName(e.target.value)}
                type="text"
                className="form-control"
                id="inputEmail4"
                name="account_name"
              />
            </div>
            <div className="col-md-6">
              <label for="inputName" className="form-label">
                Client Name
              </label>
              <input
                value={client_name}
                onChange={(e) => setClientName(e.target.value)}
                type="text"
                className="form-control"
                id="inputName"
                name="client_name"
              />
            </div>
            <div className="col-12">
              <label for="inputMail" className="form-label">
                Person in charge
              </label>
              <input
                value={in_charge_name}
                onChange={(e) => setInChargeName(e.target.value)}
                type="text"
                className="form-control"
                id="inputMail"
                name="in_charge_name"
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

export default UpdateAccount;
