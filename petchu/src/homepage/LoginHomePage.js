import React from "react";
import { withRouter, Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import MyPage from "./MyPage";


axios.defaults.withCredentials = true;

class LoginHomePage extends React.Component {
  constructor(props) {
    super(props);


  };

  render() {
    return (
      <div>
        <header>
          <Link to="/"><button>Home</button></Link>
          <Link to="/mypage"><button>MyPage</button></Link>
          <Link to="/writenewpost"><button>WriteNewPost</button></Link>
        </header>
        <hr />
        <main>
          <Switch>
            <Route exact path="/mypage"
              render={() => {
                return <MyPage />
              }}
            />
          </Switch>
        </main>
      </div>

    )
  }
}

export default withRouter(LoginHomePage);