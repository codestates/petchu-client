import React from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import logo from "../images/logo.png";
import './button.css'



axios.defaults.withCredentials = true;
class LogOutHomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <button className="click" >
              <img
                className="logo"
                src={logo}
                width="33"
                height="29"
                alt="홈"
              ></img>
            </button>
          </Link>
          <Link to="/signin">
            <button className="click" >Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="click" >Sign Up</button>
          </Link>
        </header>
        <hr />
        <main>
          <Switch>
            <Route
              path="/signin"
              render={() => {
                return (
                  <SignIn
                    handleResponseSuccess={this.props.handleResponseSuccess}
                  />
                );
              }}
            ></Route>
            <Route
              path="/signup"
              render={() => {
                return <SignUp />;
              }}
            ></Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(LogOutHomePage)

