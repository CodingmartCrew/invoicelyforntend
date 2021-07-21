import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./Views/Login/Login"
import Signup from './Views/Signup/Signup';
import Home from "./Views/Home/Home";
import Navbar from "./Components/Navbar/Navbar"
import Default from "./Views/Default"
import "./App.css"
function App() {
  const [signedIn, setSignedIn] = useState(localStorage.getItem("invoice_use_data")?true:false);
  return (
   <React.Fragment>
     <Router>
       <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
       <Switch>
         <Route path="/" exact component={()=><Home signedIn={signedIn}/>}/>
         <Route path="/login"  exact component={()=><Login signedIn={signedIn} setSignedIn={setSignedIn} />}/>
         <Route path="/signup" exact component={()=><Signup signedIn={signedIn} setSignedIn={setSignedIn} />}/>
         <Route component={Default}/>
       </Switch>
     </Router>
   </React.Fragment>
  );
}

export default App;
