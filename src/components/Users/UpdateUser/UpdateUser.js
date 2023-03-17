import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../../../api/users";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { invalidData } from "../../../helpers/alerts.helpers";

const UpdateUser = () => {
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");

  const [type_user, setType_user] = useState();
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [english_level, setEnglish_level] = useState();
  const [tec_knowledge, setTec_knowledge] = useState();
  const [cv, setCv] = useState();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const { data } = await getUserById(id);
    setType_user(data.type_id);
    setName(data.name);
    setMail(data.mail);
    setPassword(data.password);
    setEnglish_level(data.english_level);
    setTec_knowledge(data.tec_knowledge);
    setCv(data.cv);
  };

  const capturarDatos = async (e) => {
    e.preventDefault();
    let target = e.target;
    const user = {
      type_id: parseInt(target.type_user.value),
      name: target.name.value,
      mail: target.mail.value,
      password: target.password.value,
      english_level: target.english_level.value,
      tec_knowledge: target.tec_knowledge.value,
      cv: target.cv.value,
    };
    try {
      await updateUser(id, user);
      navigate("/user?status=updated");
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
          <h2 class="text-center text-dark mt-5">Update User</h2>
          <form class="row g-3" onSubmit={capturarDatos}>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                User type
              </label>
              <input
                value={type_user}
                onChange={(e) => setType_user(e.target.value)}
                type="number"
                className="form-control"
                id="inputEmail4"
                name="type_user"
              />
            </div>
            <div className="col-md-6">
              <label for="inputName" className="form-label">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="inputName"
                name="name"
              />
            </div>
            <div className="col-12">
              <label for="inputMail" className="form-label">
                Mail
              </label>
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                type="text"
                className="form-control"
                id="inputMail"
                name="mail"
              />
            </div>
            <div className="col-12">
              <label for="inputPassword" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
              />
            </div>
            <div className="col-md-6">
              <label for="inputEnglish" className="form-label">
                English Level
              </label>
              <input
                value={english_level}
                onChange={(e) => setEnglish_level(e.target.value)}
                type="text"
                className="form-control"
                id="inputEnglish"
                name="english_level"
              />
            </div>
            <div className="col-md-6">
              <label for="inputTec" className="form-label">
                Tec Knowledge
              </label>
              <input
                value={tec_knowledge}
                onChange={(e) => setTec_knowledge(e.target.value)}
                type="text"
                className="form-control"
                id="inputTec"
                name="tec_knowledge"
              />
            </div>
            <div className="col-md-12">
              <label for="inputCv" className="form-label">
                CV
              </label>
              <input
                value={cv}
                onChange={(e) => setCv(e.target.value)}
                type="text"
                className="form-control"
                id="inputCv"
                name="cv"
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

export default UpdateUser;
