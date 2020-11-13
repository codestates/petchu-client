import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import axios from "axios";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";

axios.defaults.withCredentials = true;


//커밋좀 하자 
class HomePageTop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: true,
        };

    }

    moveToLogin = () => {

    }

    // <!--30. 링크넣어서 경로지정 후 이벤트 추가 -->
    render() {
        return (
            <div>

                <div>
                    <label>
                        <Link to="login">

                            <Link to="signup"></Link>
                        </Link>
                    </label>
                </div>
                <button onClick={this.moveToLogin}>로그인</button>
                <Route path="/login" component={LoginPage}></Route>
                <Route path="/signup" component={SignUp}></Route>
            </div>
        );
    };
}

export default withRouter(HomePageTop);