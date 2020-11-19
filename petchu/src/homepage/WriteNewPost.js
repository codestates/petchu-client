import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "fontsource-roboto";
import TextField from "@material-ui/core/TextField";
import "./button.css";
import { BASEURL } from "../helpurl";

axios.defaults.withCredentials = true;
class WriteNewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      errorMessage: "",
    };
    this.handleInputcontent = this.handleInputcontent.bind(this);
    this.handleWriteNewPost = this.handleWriteNewPost.bind(this);
  }

  handleInputcontent = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleWriteNewPost = async () => {
    const { title, content } = this.state;
    if (!title & !content) {
      return this.setState({
        errorMessage: "title 과 content 를 입력해주세요",
      });
    } else if (!title) {
      return this.setState({
        errorMessage: "title 를 입력해주세요",
      });
    } else if (!content) {
      return this.setState({
        errorMessage: "content 를 입력해주세요",
      });
    }
    axios
      .post(`${BASEURL}/post/writeup`, {
        title: title,
        content: content,
      })
      .then((res) => {
        console.log(res);
        window.location = "/mypostlist";
      })
      .catch((err) => console.error(err.statusText));
  };

  render() {
    return (
      <div>
        <h1 style={{ margin: 20 }}>WriteNewPost</h1>
        <p>
          <TextField
            id="outlined-full-width"
            label="title"
            style={{ margin: 8 }}
            placeholder="제목을 입력하세요"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={this.handleInputcontent("title")}
          />
        </p>
        <p>
          <TextField
            id="outlined-full-width"
            label="content"
            style={{ margin: 8 }}
            placeholder="내용을 입력하세요"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            multiline
            rows={20}
            variant="outlined"
            onChange={this.handleInputcontent("content")}
          />
        </p>
        <center>
          <div>
            <button className="click" onClick={this.handleWriteNewPost}>
              Write
            </button>
          </div>
          <div className="alert-box">{this.state.errorMessage}</div>
        </center>
      </div>
    );
  }
}

export default withRouter(WriteNewPost);
