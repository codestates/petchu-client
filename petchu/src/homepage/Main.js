import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import axios from "axios";
import GridPost from "./GridPost";
import { Switch } from "@material-ui/core";
axios.defaults.withCredentials = true;

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            totalPostinfo:this.props.totalPostinfo,
        }
    }
    render(){
        
        return(
            <div>
                {this.props.totalPostinfo.length === 0 ?
                "POST IS NULL 😜!"
            : <GridPost totalPostinfo={this.props.totalPostinfo}/>
                }
            </div>
            
        )
    }
}
export default withRouter(Main);