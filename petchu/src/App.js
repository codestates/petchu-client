
import './App.css';
import React from "react";
import { Switch, Route,  Link } from "react-router-dom";
import LoginHomePage from './homepage/LoginHomePage';
import LogOutHomePage from './homepage/LogOutHomePage';
import axios from "axios";
axios.defaults.withCredentials = true;
class App extends React.Component {
  state ={
    isLogin : true,
    userinfo: null,
    id:null,
    totalPostinfo: null,
    
  };

  async componentDidMount(){
    await axios.get("http://localhost:3000/post")
    .then(res => {
      this.setState({totalPostinfo: res.data})
    })
  }

  async handleResponseSuccess() {
    await axios.get("http://localhost:3000/user")
    .then(res => {
      this.setState({isLogin: true, userinfo: res.data ,id : res.id})
      this.props.history.push("/");
    })
  }
  render() {
    const {isLogin, userinfo} = this.state;
    return(
      <div>
        <Switch>
          <Route path='/' render={ () => {
            if(isLogin){
             return <LoginHomePage totalPostinfo={this.state.totalPostinfo} id={this.state.id}
             handleResponseSuccess={this.handleResponseSuccess.bind(this)}
             ></LoginHomePage>
            }else if(!isLogin) {
             return <LogOutHomePage 
              totalPostinfo={this.state.totalPostinfo}
             handleResponseSuccess={this.handleResponseSuccess.bind(this)}>            
             </LogOutHomePage>
            }
          }}/>
        </Switch>
      </div>
    )
  }
}

export default App;
