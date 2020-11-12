
import './App.css';
import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import HomePageTop from './homepage/HomePageTop';


class App extends React.Component {
  state ={
    isLogin : false,
    userinfo: null,
  };
  render() {
    return(
       <div>
         <header>
           <HomePageTop></HomePageTop>
         </header>
       </div>
    )
  }
}

export default App;
