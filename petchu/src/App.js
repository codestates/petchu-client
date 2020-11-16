
import './App.css';
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import LoginHomePage from './homepage/LoginHomePage';
import LogOutHomePage from './homepage/LogOutHomePage';
import axios from "axios";
axios.defaults.withCredentials = true;
class App extends React.Component {
  state = {
    isLogin: false,
    userinfo: null,
  };

  async handleResponseSuccess() {
    await axios.get("http://localhost:3000/user")
      .then(res => {
        this.setState({ isLogin: true, userinfo: res.data })
        this.props.history.push("/");
      })
  }
  render() {
    const { isLogin, userinfo } = this.state;
    return (
      <div>
        <Switch>
          <Route path='/' render={() => {
            if (isLogin) {
              return <LoginHomePage></LoginHomePage>
            } else if (!isLogin) {
              return <LogOutHomePage handleResponseSuccess={this.handleResponseSuccess.bind(this)}></LogOutHomePage>
            }
          }} />
        </Switch>
      </div>
    )
  }
}

export default App;
