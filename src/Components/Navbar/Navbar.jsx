import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assests/logo.png";
import Button from "@material-ui/core/Button";
import "./Navbar.scss";
function Navbar({ signedIn, setSignedIn }) {
  let history = useHistory();
  return (
    <React.Fragment>
      <div className="navcomponent">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <Link to="/">
            <img src={logo} alt="logo" className="logo-img" />
          </Link>
          <div className="navtext text-uppercase">
            FREE, UNLIMITED ONLINE INVOICES for your needs
          </div>
          <div className="nav-button">
            <ul className="nav navbar-nav navbar-right">
              {
                signedIn ? <>
                
                <li>
                    <Button
                      variant="contained"
                      className="nav-signup"
                      onClick={() => {
                        setSignedIn(false);
                        localStorage.removeItem("invoice_use_data");
                        history.push("/login");
                      }}
                    >
                      Logout
                    </Button>
                  </li>
                </>
                 :<>
                  <li>
                    <Button
                      variant="contained"
                      className="nav-signup"
                      onClick={() => {
                        history.push("/login");
                      }}
                    >
                      Sign In
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="contained"
                      className="nav-signup"
                      onClick={() => {
                        history.push("/signup");
                      }}
                    >
                      Sign up Free
                    </Button>
                  </li>
                </>
              }
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
