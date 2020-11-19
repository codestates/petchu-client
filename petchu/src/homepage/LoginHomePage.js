import React from "react";
import { withRouter, Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import MyPage from "./MyPage";
import logo from "../images/logo.png";
import MyPostList from "./MyPostList";
import WriteNewPost from "./WriteNewPost";
import "./button.css";
import Main from "./Main";
axios.defaults.withCredentials = true;
//수정
class LoginHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPostInfo: null,
    };
    this.handleUserPost = this.handleUserPost.bind(this);
  }

  handleSignOut = async () => {
    await axios
      .post("http://localhost:8001/user/signout")
      .then((res) => {
        window.location = "/signin";
      })
      .catch((err) => console.error(err.statusText));
  };

  handleUserPost = async () => {
    await axios
      .get("http://localhost:8001/post/writelist")
      .then((res) => {
        this.setState({ userPostInfo: res.data });
        console.log("여기는 유저의 개인공간");
        console.table(this.state.userPostInfo);
      })
      .catch((err) => console.error(err.statusText));
  };

  render() {
    // const data = this.state.userPostInfo;
    // console.log("가시가시");
    // console.table(data);
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
            <button className="click" onClick={this.handleUserPost}>
              My Post List
            </button>
          </Link>

          <Link to="/writenewpost">
            <button className="click"> WriteNewPost</button>
          </Link>

          <button className="click" onClick={this.handleSignOut}>
            Log Out
          </button>
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
                const data = this.state.userPostInfo;
                const list =
                  data &&
                  data.map((post) => <MyPostList post={post} key={post.id} />);
                return (
                  <div>
                    <h1 style={{ margin: 20 }}>My Post List</h1>
                    {list}
                  </div>
                );
              }}
            />
            <Route
              path="/writenewpost"
              render={() => {
                return <WriteNewPost />;
              }}
            />
            <Route
             exact path="/"
              render={() => {
                return <Main />;
              }}
            ></Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(LoginHomePage);
