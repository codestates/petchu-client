import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "fontsource-roboto";
import TextField from "@material-ui/core/TextField";
import "./button.css";
import { BASEURL } from "../helpurl";

axios.defaults.withCredentials = true;
class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.userinfo.email,
      username: this.props.userinfo.username,
      nickname: "",
      petinfo: "",
      socialinfo: "",
      password: "",
      errorMessage: "",
    };
    this.editUserInfo = this.editUserInfo.bind(this);
    this.handleInputedit = this.handleInputedit.bind(this);
  }
  handleInputedit = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  editUserInfo = async () => {
    const { password } = this.state;
    if (!password) {
      return this.setState({ errorMessage: "Password 를 입력해주세요" });
    }
    await axios
      .put(`${BASEURL}/user/useredit`, {
        email: this.state.email,
        password: this.state.password,
        nickname: this.state.nickname,
        petinfo: this.state.petinfo,
        socialinfo: this.state.socialinfo,
      })
      .then((res) => {
        if (res.status === 200) {
          window.location = "/";
        }
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 404") {
          this.setState({
            errorMessage: "Password 가 올바르지 않습니다.",
          });
        }
      });
  };
  render() {
    return (
      <div>
        <center>
          <h1>My Page</h1>
          <p>
            <label>email :</label>
            <span>{this.state.email}</span>
          </p>
          <p>
            <label>username :</label>
            <span>{this.state.username}</span>
          </p>
          <p>
            <TextField
              id="standard-basic"
              label="nickname"
              input
              placeholder={
                this.props.userinfo.nickname
                  ? this.props.userinfo.nickname
                  : "닉네임을 입력하세요"
              }
              onChange={this.handleInputedit("nickname")}
            />
          </p>
          <p>
            <TextField
              id="standard-basic"
              label="petInfo"
              input
              placeholder={
                this.props.userinfo.petinfo
                  ? this.props.userinfo.petinfo
                  : "반려동물 정보를 입력하세요"
              }
              onChange={this.handleInputedit("petinfo")}
            />
          </p>
          <p>
            <TextField
              id="standard-basic"
              label="socialInfo"
              input
              placeholder={
                this.props.userinfo.socialinfo
                  ? this.props.userinfo.socialinfo
                  : "소셜 정보를 입력하세요"
              }
              onChange={this.handleInputedit("socialinfo")}
            />
          </p>
          <p>
            <TextField
              id="standard-basic"
              label="Password"
              input
              type="password"
              onChange={this.handleInputedit("password")}
              placeholder="비밀번호를 입력하세요"
            />
          </p>
          <button className="click" onClick={this.editUserInfo}>
            Edit
          </button>
          <div className="alert-box">{this.state.errorMessage}</div>
        </center>
      </div>
    );
  }
}
export default withRouter(MyPage);
