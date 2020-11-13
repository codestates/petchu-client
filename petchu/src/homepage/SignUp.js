//회원가입 
//완료 완료
import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

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
            alertpassword: ""
        };
        this.clickSignUp = this.clickSignUp.bind(this);
        this.handleInputvalue = this.handleInputvalue.bind(this);
    }
    handleInputvalue = (key) => (e) => {
        this.setState({ [key]: e.target.value }, this.checkPasswordAndPassword) //
    };

    checkEmail = () => {
        const { email } = this.state;
        axios.post('http://localhost:3000/signup', {
            email: email
        }).then(res => {
            if (res.status === 200) {
                return this.setState({
                    alertemail: "사용 가능한 이메일 입니다."
                })
            } else {
                return this.setState({
                    alertemail: "이미 사용중인 이메일 입니다."
                })
            }
        })
    }
    //어떻게 같은지 다른지 확인할 것인가
    checkPasswordAndPassword = () => {
        const { password, passwordcheck } = this.state
        if (password !== passwordcheck) {
            this.setState({
                alertpassword: "비밀번호가 일치하지 않습니다."
            })
        } else if (password === passwordcheck) {
            this.setState({
                alertpassword: "사용가능한 비밀번호 입니다."
            })
        }
    }

    clickSignUp = () => {
        //회원가입 요청 -> 로그인 페이지 이동

        //끝
    }

    render() {
        return (
            <div>
                <center>
                    <h1>회원가입</h1>
                </center>
                <Link to="signup"></Link>
                <div>
                    <label for="input-text">email</label><input type="email" onChange={this.handleInputvalue("email")} placeholder="이메일을 입력하세요"></input>
                    <div>
                        <label for="password">password</label><input type="password" onChange={this.handleInputvalue("password")} placeholder="비밀번호를 입력하세요"></input>
                    </div>
                </div>

                <label for="password">check password</label><input type="password" onChange={this.handleInputvalue("passwordcheck")} placeholder="비밀번호를 입력하세요"></input>
                <div>
                    {this.state.alertpassword}
                </div>
                <button onClick={this.clickSignUp} > 회원가입 완료</button>
                <Link to="/login">로그인을 하세요</Link>
            </div >
        )
    }
}


export default withRouter(SignUp);
