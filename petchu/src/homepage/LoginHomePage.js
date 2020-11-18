import React from "react";
import { withRouter, Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import MyPage from "./MyPage";
import logo from "../images/logo.png";
import MyPostList from "./MyPostList";
import './button.css'

axios.defaults.withCredentials = true;
//수정
class LoginHomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userPostInfo: "",
    };
  }

  handleSignOut = async () => {
    await axios
      .post("http://localhost:8001/user/signout")
      .then((res) => {
        window.location = "/signin";
      })
      .catch((err) => console.error(err.statusText));
  };

  render() {
    return (
      <div>
        <header>

          <label>{this.props.userinfo.nickname}</label>
          <Link to="/">
            <button className="click">
              <img
                className="logo"
                src={logo}
                width="33"
                height="29"
                alt="Home"
              ></img>
            </button>
          </Link>
          <Link to="/mypage">
            <button className="click">MyPage</button>
          </Link>

          <Link to="/mypostlist">
            <button className="click">My Post List</button>
          </Link>

          <Link to="/writenewpost">
            <button className="click"> WriteNewPost</button>
          </Link>

          <button className="click" onClick={this.handleSignOut}>Log Out</button>
        </header>
        <hr />
        <main>
          <Switch>
            <Route
              path="/mypage"
              render={() => {
                return <MyPage userinfo={this.props.userinfo} />;
              }}
            />
            <Route
              path="/mypostlist"
              render={() => {
                <MyPostList
                  userPostInfo={this.state.userPostInfo}
                  id={this.props.id}
                />;
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(LoginHomePage);
