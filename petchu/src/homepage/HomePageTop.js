import React from "react";
import { Link, Switch,Route, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import LoginPage from "./LoginPage";

axios.defaults.withCredentials = true;

class HomePageTop extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            login:false,
        };
        
    }
    
    moveToLogin = () => {

    }
    render() {
        return( 
          <div>
              <h2>TOP</h2>
              <Link to="login">
                <button onClick={ this.moveToLogin}>버튼이에요</button>
              </Link>
              <Route path="/login" component={LoginPage}></Route>
          </div>
        );
    };
}

export default withRouter(HomePageTop);