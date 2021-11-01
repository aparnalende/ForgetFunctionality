import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSignInComponent from "./pages/UserSignInComponent";
import UserSignupComponent from "./pages/UserSignupComponent";
import Topbar from './pages/topbar'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Topbar/>
        <Router>
          <Switch>
            <Route exact path="/" component={UserSignInComponent} />
            <Route path='/register' component={UserSignupComponent} />
            <Route path='/forgetpassword' component={ForgetPassword} />
            <Route path='/resetpassword' component={ResetPassword} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
