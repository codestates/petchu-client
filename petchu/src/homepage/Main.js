import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;
class Main extends React.Component {
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
          <b>{this.props.posts.title}</b>
        </div>
        <div>{this.props.posts.content}</div>
      </div>
    );
  }
}
export default withRouter(Main);
