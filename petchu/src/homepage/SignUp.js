import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { BASEURL } from "../helpurl";
axios.defaults.withCredentials = true;
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //회원 정보 가져오기
      email: "",
      password: "",
      passwordcheck: "",
      username: "",
      nickname: "",
      errormessage: "",
      alertemail: "",
      alertpassword: "",
    };
    this.clickSignUp = this.clickSignUp.bind(this);
    this.handleInputvalue = this.handleInputvalue.bind(this);
  }

  handleInputvalue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  clickSignUp = async () => {
    const { email, password, passwordcheck, username, nickname } = this.state;
    if (!email) {
      return this.setState({ errorMessage: "Email 을 확인해주세요" });
    } else if (!password) {
      return this.setState({ errorMessage: "password 을 확인해주세요" });
    } else if (!passwordcheck) {
      return this.setState({ errorMessage: "check password 을 확인해주세요" });
    } else if (password !== passwordcheck) {
      return this.setState({ errorMessage: "비밀번호가 일치하지 않습니다." });
    } else if (!username) {
      return this.setState({ errorMessage: "username 을 확인해주세요" });
    } else if (!nickname) {
      return this.setState({ errorMessage: "nickname 을 확인해주세요" });
    } else {
      this.setState({ errorMessage: "" });
    }
    await axios
      .post(
        `${BASEURL}/user/signup`,
        {
          email: this.state.email,
          password: this.state.password,
          username: this.state.username,
          nickname: this.state.nickname,
        },
        { withCredentials: true }
      )
      .then((res) => {
        window.location = "/signin";
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 409") {
          this.setState({
            errorMessage: "이미 사용중인 이메일 입니다.",
          });
        }
      });
  };
  render() {
    return (
      <div>
        <center>
          <h1>Sign Up!</h1>
          <div>
            <TextField
              id="standard-basic"
              label="username"
              input
              type="input-text"
              onChange={this.handleInputvalue("username")}
              placeholder="이름을 입력하세요"
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="nickname"
              input
              type="input-text"
              onChange={this.handleInputvalue("nickname")}
              placeholder="별명을 입력하세요"
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="email"
              input
              type="email"
              onChange={this.handleInputvalue("email")}
              placeholder="이메일을 입력하세요"
            />

            <div>{this.state.alertemail}</div>
            <div>
              <TextField
                id="standard-basic"
                label="password"
                input
                type="password"
                onChange={this.handleInputvalue("password")}
                placeholder="비밀번호를 입력하세요"
              />
            </div>
          </div>
          <TextField
            id="standard-basic"
            label="check password"
            input
            type="password"
            onChange={this.handleInputvalue("passwordcheck")}
            placeholder="비밀번호를 입력하세요"
          />

          <div>{this.state.alertpassword}</div>
          <button className="click" onClick={this.clickSignUp}>
            Completed
          </button>

          <div className="alert-box">{this.state.errorMessage}</div>
        </center>
      </div>
    );
  }
}
export default withRouter(SignUp);
