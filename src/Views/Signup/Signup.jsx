import React from "react";
import { ReactComponent as Invoicelogo } from "../../assests/invoicely.svg";
import {useHistory} from "react-router-dom"
import "./Signup.scss";
function Signup() {
    let history =useHistory();
  return (
    <React.Fragment>
      <div className="signupcom">
        <div className="container">
          <div className="row invoice-logo">
            <Invoicelogo className="invoicelylogo" />
          </div>
          <div className="row invoice-text">Free, Unlimited Invoicing</div>
          <div className="row invoice-thank">
            Thank you for choosing invoicely. You're just a few steps <br />
            away from unlimited invoicing.
          </div>
          <div className="card signup-card" style={{ width: "350px" }}>
            <div className="card-title">Sign Up</div>
            <form className="signup-form">
              <div class="mb-3 signup-email">
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
              <div class="mb-3">
                <label class="form-label">
                  Password (Confirm) <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  class="form-control"
                  required
                  placeholder="Password must match"
                />
              </div>

              <div className="signup-terms">
                By proceeding you agree to the{" "}
                <a href="https://invoicely.com/legal/terms">Terms of Use</a> and{" "}
                <a href="https://invoicely.com/legal/privacy">Privacy Policy</a>
              </div>
              <button type="submit" class="btn  signup-btn">
                Proceed
              </button>
            </form>
          </div>
          <div className="signup-already">
          Already a member?
          </div>
          <div className="signup-login-btn">
          <button type="submit" class="btn  Login-btn" onClick={()=>{
              history.push('/login')
          }}>
                Login
              </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Signup;
