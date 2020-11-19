import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
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
    };
  }

  componentDidMount() {
    this.handleResponseSuccess();
  }

  async handleMainpost() {
    await axios.get("http://localhost:8001/post/writeall").then((res) => {
      this.setState({ totalPostinfo: res.data });
      console.log("여기는 모두의 게시물공간");
      console.table(this.state.totalPostinfo);
      this.props.history.push("/");
    });
  }
  async handleResponseSuccess() {
    await axios.get("http://localhost:8001/user/userinfo").then((res) => {
      this.setState({ isLogin: true, userinfo: res.data });
      console.log(this.state.userinfo);
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
