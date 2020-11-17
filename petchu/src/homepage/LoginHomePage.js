import React from "react";
import { withRouter, Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import MyPage from "./MyPage";
import logo from '../images/logo.png';
import Main from "./Main";
import MyPostList from "./MyPostList";
axios.defaults.withCredentials = true;
//수정
class LoginHomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userPostInfo : "",
    };
  };
  render() {
    return (
      <div>
        <header>
        <label>Nick name</label><div>{this.props.userinfo.nickname}</div>
        <Link to="/">
                    <button>
                    <img className="logo" src={logo} width="13" height="14" alt="Home"></img>    
                    </button>
                </Link>
          <Link to="/mypage"><button>MyPage</button></Link>

          <Link to="/mypostlist">
            <button>My Post List</button>
          </Link>

          <Link to="/writenewpost"><button>WriteNewPost</button></Link>

        </header>
        <hr />
        <main>
          <Switch>

            <Route  path="/mypage" 
                render={() => {
                  return <MyPage userinfo={this.props.userinfo}/>
                }}
              />
            <Route 
              path="/mypostlist"
                render={() => {
                  <MyPostList userPostInfo={this.state.userPostInfo} id={this.props.id}/>
                }}
              />
          </Switch>
        </main>
      </div>

    )
  }
}

export default withRouter(LoginHomePage);