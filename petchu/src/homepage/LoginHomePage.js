import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

class LoginHomePage extends React.Component {
  constructor(props){
    super(props);


  };

  render() {
    return(
      <div> 로그인 되어있는 상태</div>
    )
  }
}

export default withRouter(LoginHomePage);