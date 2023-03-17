import React from "react";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../../../api/accounts";
import { invalidData } from "../../../helpers/alerts.helpers";
import { ToastContainer } from "react-toastify";

const NewAccount = () => {
  const navigate = useNavigate();
  const capturarDatos = async (e) => {
    e.preventDefault();
    let target = e.target;
    const account = {
      account_name: target.account_name.value,
      client_name: target.client_name.value,
      in_charge_name: target.in_charge_name.value,
    };
    try {
      await createAccount(account);
      navigate("/account?status=created");
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
          <h2 class="text-center text-dark mt-5">Create Account</h2>
          <form class="row g-3" onSubmit={capturarDatos}>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Account Name
              </label>
              <input
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
                type="text"
                className="form-control"
                id="inputName"
                name="client_name"
              />
            </div>
            <div className="col-12">
              <label for="inputMail" className="form-label">
                Person in charge name
              </label>
              <input
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

export default NewAccount;
