import React from "react";
import { createUser } from "../../../api/users";

const NewUser = () => {
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
      const result = await createUser(user);
      console.log(result);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div class="container">
      <div class="row">
        <div class="offset-lg-3 col-lg-6">
          <h2 class="text-center text-dark mt-5">Create User</h2>
          <form class="row g-3" onSubmit={capturarDatos}>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                User type
              </label>
              <input
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
    </div>
  );
};

export default NewUser;
