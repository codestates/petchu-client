import React from "react";
import {  Switch,Route, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import LoginPage from "./LoginPage";

axios.defaults.withCredentials = true;

class HomePageTop extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            
        };
        this.goLoginPage = this.goLoginPage.bind(this);
        
    }
    //로그인 페이지로 이동하는 함수
    goLoginPage = () =>{
         
            
    }

    render() {
        return( 
           <Switch>
                <Route
            path='/login'
            render={() => (
              <LoginPage/>
            )}
          />
          
           </Switch>
        );
    };
}

export default withRouter(HomePageTop);