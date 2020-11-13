import React from "react";
import { Link, Switch,Route, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import LoginPage from "./LoginPage";
import MyPage from "./MyPage";
axios.defaults.withCredentials = true;

class HomePageTop extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            login:false,
            userinfo:null,
        };
        
    }
    async handleResponseSuccess() {
        // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
        await axios.get("http://localhost:3000/user")
        .then(res => {
          this.setState({isLogin: true,
            userinfo:res.data})
            this.props.history.push("/");   
        })    
      }

    moveToLogin = () => {

    }
    render() {
        return( 
          <div>
              <h2>This Is PetChu!!</h2>
              <Link to="login">
                <button onClick={ this.moveToLogin}> Sign In</button>
              </Link>
              <Link to="mypage">
                  <button onClick={}>My Page</button>
              </Link>
              <Route path="/login" component={LoginPage}></Route>
              <Route path="/mypage" component={MyPage}></Route>
          </div>
        );
    };
}

export default withRouter(HomePageTop);