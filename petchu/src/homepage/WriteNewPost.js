import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Upload from "./Upload";

axios.defaults.withCredentials = true;

// 보내야 하는 정보: 제목, 글내용, 썸네일, 닉네임, 아이디로 유저 판별
class WriteNewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            nickname: "",
            id: "",
            thumbnail: ""
        }
        axios.post('https://localhost:3000/post.writeup', {
            title: this.state.title,
            content: this.state.content
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleInputcontent = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.content });
    };

    handleChange(event) {
        this.setState({ content: event.target.content, title: event.target.title });
    }

    //제목, 태그 태그 / 썸네일을 위한 사진 버튼 / 게시글 bootstrap으로 랜더링
    // 나가기/게시완료 버튼 누르면 -> 특정게시물 redirect 
    render() {
        return (
            <div>
                <div>
                    <label>
                        제목: <input type='content' name='title' content={this.state.title} onChange={this.handleInputcontent} placeholder='제목을 입력하세요'></input>
                    </label>
                </div>

                <div><label>무슨 생각을 하고 계신가요?</label></div>
                <textarea content={this.state.content} onChange={this.handleChange} />
                <Upload></Upload>
                <span>
                    <a href="/mypostlist">
                        <button>나가기</button>
                    </a>
                    <a href='https://localhost:3000/post/writeinfo/${this.id}'>
                        <button>게시완료</button>
                    </a>
                </span>
            </div >
        )
    }
}

export default withRouter(WriteNewPost);