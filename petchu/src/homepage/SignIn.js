import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import gitlogo from "../images/github.png";
import TextField from "@material-ui/core/TextField";
import "./button.css";
import { BASEURL } from "../helpurl";

axios.defaults.withCredentials = true;
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
    if (!email && !password) {
      return this.setState({
        errorMessage: "Email 과  Password 를 입력해주세요",
      });
    } else if (!email) {
      return this.setState({ errorMessage: "Email 을 입력해주세요" });
    } else if (!password) {
      return this.setState({ errorMessage: "Password 를 입력해주세요" });
    } else {
      this.setState({ errorMessage: "" });
    }
    await axios
      .post(
        `${BASEURL}/user/signin`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          this.props.handleResponseSuccess();
        } else {
          this.props.history.go(0);
        }
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 404") {
          this.setState({
            errorMessage:
              "회원 정보를 찾을 수 없습니다. Email 과  Password 를 확인해주세요.",
          });
        }
      });
  };

  render() {
    return (
      <div>
        <center>
          <h1>Sign In!</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <TextField
                id="standard-basic"
                label="Email"
                input
                type="email"
                onChange={this.handleInputValue("email")}
                placeholder="이메일을 입력하세요"
              />
              <br />
              <TextField
                id="standard-basic"
                label="Password"
                input
                type="password"
                onChange={this.handleInputValue("password")}
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <div>
              <button className="click" onClick={this.handleSignin}>
                Login
              </button>
            </div>
            <div className="alert-box">{this.state.errorMessage}</div>
          </form>
          <hr></hr>
          <div>
            <h1>Social Login!</h1>
            <div>
              <button className="click">
                <a href="https://github.com/login/oauth/authorize?client_id=9a27c45004303e2ce020">
                  <img className="gitlogo" src={gitlogo}></img>
                </a>
              </button>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
export default withRouter(SignIn);
