import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

class MyPostList extends React.Component {
    constructor(props) {
        super(props);

       
    }
    render(){
        return(
            <div>
               {this.props.userPostInfo.length === 0 ? 
               "게시글이 없습니다 게시글을 작성해주세요! 😀!"
            : this.props.userPostInfo.map( (data) => {
                return(
                   <div>으으으으</div> 
                )
            })}
            </div>
        )
    }
}
export default withRouter(MyPostList);