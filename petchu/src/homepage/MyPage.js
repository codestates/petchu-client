import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import images from '../images/usericon.png';
import Upload from "./Upload";

//변경 완료
axios.defaults.withCredentials = true;
class MyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordCheck: "",
            nickname: "",
            petInfo: "",
            socialInfo: ""
        }
    }
    handleInputValue = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    editUserInfo = () => {
        this.setState({
            email: "",
            password: "",
            passwordCheck: "",
            nickname: "",
            petInfo: "",
            socialInfo: ""
        })
    }
    // 정보가 입력되지 않았을때 경고 -> 정보 전송
    //서버에 요청을 보낸다. 200응답을 받으면 그 포스트
    //content는 프론트 단에서 받아올 이미지를 저장했다가 서버로 보내는 역할
    //uploadedImg는 서버에서 받아온 정보 저장하는 곳 
    //   shareImg = () => {
    //         const [content, setContent] = useState("");
    //         const [uploadedImg, setUploadedImg] = useState({
    //           fileName: "",
    //           fillPath: ""
    //         })
    //     }

    render() {
        
        return (
            <div>
                <span>

                    <button>
                        <Upload>이미지 변경</Upload><img src={images} alt='logo' width='50' height='50' />
                    </button>
                </span>
                <div>
                    <form>
                        <p><label >닉네임: </label><input type='text' name='nickname' value={this.props.userinfo.nickname} onChange={this.handleInputValue} placeholder='닉네임을 입력하세요'></input></p>
                        <p><label >소셜 정보: </label><input type='text' name='socialInfo' value={this.props.userinfo.socialInfo} onChange={this.handleInputValue} placeholder='소셜 정보를 입력하세요'></input></p>
                        <p><label >이메일 주소: </label><input type='text' name='email' value={this.props.userinfo.email} onChange={this.handleInputValue} placeholder='이메일 주소를 입력하세요'></input></p>
                        <p><label >펫 정보(옵션): </label><input type='checkbox'></input><input name='petInfo' type='text' value={this.props.userinfo.petInfo} onChange={this.handleInputValue} placeholder='반려동물 정보를 입력하세요'></input></p>
                        <p><label>비밀번호 변경: </label><input type='password' name='password' onChange={this.handleInputValue} placeholder='비밀번호를 입력하세요'></input></p>
                        <p><label >비밀번호 확인: </label><input type='password' name='passwordCheck'  onChange={this.handleInputValue} placeholder='비밀번호를 다시 입력하세요'></input></p>
                    </form>
                    <button className="finishediting" onClick={this.editUserInfo}>수정완료</button>
                </div>

            </div>
        )
    }//mypage 버튼과 수정완료 버튼을 눌렀을때 input='null' 인풋값이 지워지게 만들기 
}
export default withRouter(MyPage);