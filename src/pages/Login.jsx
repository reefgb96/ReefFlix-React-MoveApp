import React from "react";
import "./style/Login.css";

const LoginPage = () => {
  return (
    <div className="container-fluid login-wrapper d-flex align-items-center justify-content-center">
      <div className="login-bg d-flex align-items-center justify-content-center"></div>
      <div className="card login-card-wrapper bg-opacity-75">
        <div className="card-body login-card-body d-flex flex-column align-items-center justify-content-center ">
          <h5 className="card-title login-title my-4 text-white">Log in</h5>
          <div className="login-inputs d-flex flex-column align-items-center justify-content-around">
            <div className="email-wrapper my-2 d-flex flex-column">
              <label htmlFor="login-email">Email:</label>
              <input type="email" name="login-email" id="login-email-id" />
            </div>
            <div className="pass-wrapper my-2 d-flex flex-column">
              <label htmlFor="login-pass">Password:</label>
              <input type="pass" name="login-pass" id="login-pass-id" />
            </div>
            <input
              className="btn btn-danger text-white w-75"
              type="submit"
              value="log in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
