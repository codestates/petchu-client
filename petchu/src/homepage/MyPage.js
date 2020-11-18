import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import 'fontsource-roboto';
import TextField from '@material-ui/core/TextField';

import './button.css'

axios.defaults.withCredentials = true;
class MyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.userinfo.email,
            nickname: "",
            petinfo: "",
            socialinfo: "",
        };
        this.editUserInfo = this.editUserInfo.bind(this);
        this.handleInputedit = this.handleInputedit.bind(this);
    }
    handleInputedit = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };
    editUserInfo = async () => {
        await axios
            .put("http://localhost:8001/user/useredit", {
                email: this.state.email,
                nickname: this.state.nickname,
                petinfo: this.state.petinfo,
                socialinfo: this.state.socialinfo,
            })
            .then((res) => {
                if (res.status === 200) {
                    this.props.history.push("/");
                }
            });
    };
    render() {
        const { classes } = this.props;
        return (
            <div>
                <p>
                    <label>email :</label>
                    <span>{this.state.email}</span>
                </p>
                <p>
                    <TextField id="standard-basic" label="nickname"
                        input placeholder={
                            this.props.userinfo.nickname
                                ? this.props.userinfo.nickname
                                : "닉네임을 입력하세요"
                        }
                        onChange={this.handleInputedit("nickname")}
                    />

                </p>
                <p>
                    <TextField id="standard-basic" label="petInfo"
                        input placeholder={
                            this.props.userinfo.petinfo
                                ? this.props.userinfo.petinfo
                                : "반려동물 정보를 입력하세요"
                        }
                        onChange={this.handleInputedit("petinfo")}
                    />
                </p>
                <p>
                    <TextField id="standard-basic" label="socialInfo"

                        input
                        placeholder={
                            this.props.userinfo.socialinfo
                                ? this.props.userinfo.socialinfo
                                : "소셜 정보를 입력하세요"
                        }
                        onChange={this.handleInputedit("socialinfo")}
                    />
                </p>
                <button className="click" onClick={this.editUserInfo}>Edit </button>


            </div>
        );
    }
}
export default withRouter(MyPage);