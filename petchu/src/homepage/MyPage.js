import React from "react";
import { withRouter, Route } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
class MyPage extends React.Component {
    constructor(props) {
        super(props);
        const { userInfo, finishediting } = props;
    }
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };
    render() {
        return (
            <div>
                <div>
                    <img src="images/user icon.jpg" />
                </div>
                <div>
                    <form>
                        닉네임: <input type='text'></input>
                        소셜 정보: <input type='text'></input>
                        이메일 주소:<input type='email'></input>
                        펫 정보:<input type='checkbox'></input>
                        <input type='text'></input>
                        비밀번호 변경:<input type='password'></input>
                        비밀번호 확인:<input type='password'></input>
                    </form>
                    <button className="finishediting">수정완료</button>
                    
                </div>
            </div>
        )
    }
}
export default withRouter(MyPage);