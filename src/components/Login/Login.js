import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import * as yup from "yup";
import { login } from "../../api/login";
import { setLocalStorageItem } from "../../helpers/localStorage.helpers";
import { ToastContainer } from "react-toastify";
import { invalidData } from "../../helpers/alerts.helpers";

const Login = () => {
  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    mail: yup.string().email().required(),
    password: yup.string().min(8).max(50).required(),
  });

  const capturarDatos = async (e) => {
    e.preventDefault();
    let target = e.target;
    let datos = {
      mail: target.mail.value,
      password: target.password.value,
    };
    const validarCampos = await loginSchema.isValid(datos);
    if (validarCampos === true) {
      try {
        const {
          data: { accessToken = {} },
        } = await login(datos.mail, datos.password);
        setLocalStorageItem("accessToken", accessToken);
        navigate("/home");
      } catch (error) {
        invalidData("Credenciales invalidas");
      }
    } else {
      console.log("invalido");
    }
  };

  return (
    <>
      <div class="container">
      <ToastContainer
        closeButton={true}
        position="bottom-right"
        autoClose="3000"
        hideProgressBar="true"
      />
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="text-center text-dark mt-5">Login</h2>
            <div class="card my-5">
              <form
                class="card-body cardbody-color p-lg-5"
                onSubmit={capturarDatos}
              >
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="mail"
                    aria-describedby="emailHelp"
                    placeholder="Mail"
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-color px-5 mb-5 w-100">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
