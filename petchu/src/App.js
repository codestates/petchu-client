
import './App.css';
import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import HomePageTop from './homepage/HomePageTop';
import SignUp from './homepage/SignUp';


class App extends React.Component {
  state = {
    isLogin: false,
    userinfo: null,
  };
  render() {
    return (
      <div>
        <h1>
          <HomePageTop></HomePageTop>
        </h1>

      </div>
    )
  }
}

export default App;
