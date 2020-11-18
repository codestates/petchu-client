import React from "react";
import { Link, withRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import logo from "../images/logo.png";
import gitlogo from "../images/github.jpg";
//import ContainedButtons from "./ContainedButtons";
//import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

axios.defaults.withCredentials = true;
//<button type='submit' onClick={this.handleSignin}>Sing In</button>

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSignin = async () => {
    const { email, password } = this.state;
    if (!email) {
      return this.setState({ errorMessage: "Email 을 확인해주세요" });
    } else if (!password) {
      return this.setState({ errorMessage: "password 을 확인해주세요" });
    }
    await axios
      .post("http://localhost:8001/user/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          this.props.handleResponseSuccess();
        } else {
          this.props.history.go(0);
        }
      });
  };

  render() {
    return (
      <div>
        <div>
          <img
            className="logo"
            src={logo}
            width="13"
            height="14"
            alt="띠용"
          ></img>
        </div>
        <center>
          <h1>Sign In!</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>Email: </label>{" "}
              <input
                type="email"
                onChange={this.handleInputValue("email")}
              ></input>
              <br />
              <label>password: </label>{" "}
              <input
                type="password"
                onChange={this.handleInputValue("password")}
              ></input>
            </div>
            <div>
              <Button
                variant="outlined"
                color="secondary"
                type="submit"
                onClick={this.handleSignin}
              >
                Sign in
              </Button>
            </div>
            <div className="alert-box">{this.state.errorMessage}</div>
          </form>
          <hr></hr>
          <div>
            <h3>소셜 로그인</h3>
            <div>
              <a href="https://github.com/login/oauth/authorize?client_id=9a27c45004303e2ce020&redirect_uri=http://localhost:8001/oauth/github">
                <img
                  className="logo"
                  src={gitlogo}
                  width="100"
                  height="40"
                ></img>
              </a>
            </div>

            <div>
              <Button variant="contained" color="primary" disableElevation>
                <Link to="/signup">회원가입</Link>
              </Button>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
export default withRouter(SignIn);
