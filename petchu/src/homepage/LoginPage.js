import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        };
        this.pagemove = this.pagemove.bind(this);
    }

    pagemove = () => {
        
    } 
    render() {
        return(
            <div>
                <button onClick= {this.pagemove} > 나 버튼</button>
            </div>
        )
    }
}


export default withRouter(LoginPage);