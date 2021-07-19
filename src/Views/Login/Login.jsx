import React from "react";
import { ReactComponent as Invoicelogo } from "../../assests/invoicely.svg";
import "./Login.scss";
import {useHistory} from "react-router-dom"

function Login() {
    let history =useHistory();
  return (
    <React.Fragment>
      <div className="login-container">
        <div className="container">
          <div className="row invoice-logo">
            <Invoicelogo className="invoicelylogo" />
          </div>
          <div className="card login-card" style={{ width: "350px" }}>
          <div className="card-title">Login in to your account</div>
          <form className="login-form">
          <div class="mb-3 login-email">
                <label class="form-label">
                  Email address <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email address"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="form-label">
                  Password <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  class="form-control"
                  required
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn  login-btn">
                Log in
              </button>
          </form>
          </div>
          <div className="login-not">
          Not a member yet?
          </div>
          <div className="signup-login-btn">
          <button type="submit" class="btn  register-btn" onClick={()=>{
              history.push('/signup')
          }}>
                Start Invoicing Now
              </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
