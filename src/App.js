import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./Views/Login/Login"
import Signup from './Views/Signup/Signup';
import Home from "./Views/Home/Home";
import Navbar from "./Components/Navbar/Navbar"
import Default from "./Default"
import "./App.css"
function App() {
  return (
   <React.Fragment>
     <Router>
       <Navbar/>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/login" exact component={Login}/>
         <Route path="/signup" exact component={Signup}/>
         <Route component={Default}/>
       </Switch>
     </Router>
   </React.Fragment>
  );
}

export default App;
