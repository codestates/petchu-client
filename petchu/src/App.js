
import './App.css';
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import LoginHomePage from './homepage/LoginHomePage';
import LogOutHomePage from './homepage/LogOutHomePage';
import axios from "axios";
import { withRouter } from "react-router-dom";

axios.defaults.withCredentials = true;
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin: false,
      userinfo: null,
      totalPostinfo: null,
      
    };
  }
 
  async handleResponseSuccess() {
    await axios.get("http://localhost:8001/")
    .then(res => {
      this.setState({isLogin: true, userinfo: res})
      console.log("asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      console.dir(res);
      console.log(this.state.isLogin)
      this.props.history.push("/");
    })
  }
  render() {
    
    const { isLogin, userinfo } = this.state;
    return (
      <div>
        <Switch>
          <Route path='/' render={ () => {
            if(isLogin){
            return  <LoginHomePage 
             totalPostinfo={this.state.totalPostinfo} userinfo={this.state.userinfo}
             handleResponseSuccess={this.handleResponseSuccess.bind(this)}
             ></LoginHomePage>
            }else if(!isLogin) {
             return <LogOutHomePage 
              totalPostinfo={this.state.totalPostinfo}
             handleResponseSuccess={this.handleResponseSuccess.bind(this)}>            
             </LogOutHomePage>
            }
          }} />
        </Switch>
      </div>
      
    )
  }
}

export default withRouter(App);
