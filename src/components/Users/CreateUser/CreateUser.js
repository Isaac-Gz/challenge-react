import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateUser.css";

const CreateUser = () => {
  const navigate = useNavigate();
  const checarDatos = (e) => {
    e.preventDedault();
    let target = e.target;
    const user = {
      type_id: target.type_id.value,
      name: target.name.value,
      mail: target.mail.value,
      password: target.password.value,
      english_level: target.english_level.value,
      tec_knowledge: target.tec_knowledge.value,
      cv: target.cv.value,
    };
    console.log(user);
  };

  return (
    <>
      <div className="divCon">
        <div className="offset-lg-3 col-lg-6">
          <h4>Create User</h4>
          <form className="row g-3" onSubmit={checarDatos}>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                User type
              </label>
              <input
                type="text"
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
    </>
  );
};

export default CreateUser;
