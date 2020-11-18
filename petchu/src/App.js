import "./App.css";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import LoginHomePage from "./homepage/LoginHomePage";
import LogOutHomePage from "./homepage/LogOutHomePage";
import axios from "axios";
import { withRouter } from "react-router-dom";

axios.defaults.withCredentials = true;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userinfo: null,
      totalPostinfo: null,
      test: 0,
    };
    this.handleMainpost = this.handleMainpost.bind(this);
  }

  componentDidMount() {
    this.handleResponseSuccess();
  }

  async handleMainpost() {
    await axios.get("http://localhost:8001/post/writeall").then((res) => {
      console.log(res.data);
      this.setState({ totalPostinfo: res.data });
      this.props.history.push("/");
    });
  }
  async handleResponseSuccess() {
    await axios.get("http://localhost:8001/user/userinfo").then((res) => {
      console.log("res:", res);
      console.log("res.data:", res.data);
      this.setState({ isLogin: true, userinfo: res.data });
      console.log(this.state.userinfo);
      //this.props.history.push("/");
      this.handleMainpost();
    });
  }

  render() {
    const { isLogin, userinfo } = this.state;
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                return (
                  <LoginHomePage
                    totalPostinfo={this.state.totalPostinfo}
                    userinfo={userinfo}
                    handleResponseSuccess={this.handleResponseSuccess.bind(
                      this
                    )}
                  ></LoginHomePage>
                );
              } else if (!isLogin) {
                return (
                  <LogOutHomePage
                    totalPostinfo={this.state.totalPostinfo}
                    handleResponseSuccess={this.handleResponseSuccess.bind(
                      this
                    )}
                  ></LogOutHomePage>
                );
              }
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
