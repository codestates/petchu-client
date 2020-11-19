import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;
class MyPostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
    };
    return (
      <div style={style}>
        <div>
    <b>{this.props.post.title}</b>
        </div>
        <div>{this.props.post.content}</div>
        <hr></hr>
        <span>{this.props.post.createdAt}</span>
      </div>
    );
  }
}
export default withRouter(MyPostList);
