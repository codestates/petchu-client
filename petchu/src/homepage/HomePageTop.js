import React from "react";
import {  withRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

class HomePageTop extends React.Component {
    constructor(props) {
        super(props);

        this.state ={

        };


    }
    render() {
        return( 
            <div>상단 고정 css 필요 fix </div>
        );
    };
}

export default withRouter(HomePageTop);