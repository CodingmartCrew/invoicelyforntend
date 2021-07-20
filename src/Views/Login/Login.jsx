import React,{ useState } from "react";
import { ReactComponent as Invoicelogo } from "../../assests/invoicely.svg";
import "./Login.scss";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitting");
    console.log(email,password);
  };

  return (
    <React.Fragment>
      <div className="login-container">
        <div className="container">
          <div className="row invoice-logo">
            <Invoicelogo className="invoicelylogo" />
          </div>
          <div className="card login-card" style={{ width: "350px" }}>
            <div className="card-title">Login in to your account</div>
            <form className="login-form" onSubmit={(e) => submitHandler(e)}>
              <div className="mb-3 login-email">
                <label className="form-label">
                  Email address <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  onChange={(e)=>{setEmail(e.target.value)}}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Password <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e)=>{setPassword(e.target.value)}}
                  required
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn  login-btn">
                Log in
              </button>
            </form>
          </div>
          <div className="login-not">Not a member yet?</div>
          <div className="signup-login-btn">
            <button
              type="submit"
              className="btn  register-btn"
              onClick={() => {
                history.push("/signup");
              }}
            >
              Start Invoicing Now
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
