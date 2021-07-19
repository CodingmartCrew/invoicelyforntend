import React from "react";
import { Link ,useHistory} from "react-router-dom";
import logo from "../../assests/logo.png";
import Button from "@material-ui/core/Button"
import "./Navbar.scss";
function Navbar() {
  let history= useHistory();
  return (
    <React.Fragment>
      <div className="navcomponent">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <Link to="/">
            <img src={logo} alt="logo" className="logo-img" />
          </Link>
          <div className="navtext">FREE, UNLIMITED ONLINE INVOICES</div>
          <div className="nav-button">
            <ul className="nav navbar-nav navbar-right">
              <li><Button variant="outlined" className="nav-learn-btn"><a href="https://invoicely.com/" style={{textDecoration:"none",color:"White"}}>Learn more</a></Button></li>
              <li><Button variant="contained" className="nav-signup" onClick={()=>{
                history.push('/signup');
              }}>Sign up Free</Button></li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
