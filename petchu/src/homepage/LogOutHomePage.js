import React from "react";
import { Link, Switch,Route, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import logo from '../images/logo.png';
import Main from "./Main";

axios.defaults.withCredentials = true;

class LogOutHomePage extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return( 
            <div>
                <header>
                <Link to="/main">
                    <button>
                    <img className="logo" src={logo} width="13" height="14" alt="Home"></img>    
                    </button>
                </Link>
                
                <Link to="/signin"><button>Sign In</button></Link>
                <Link to="/signup"><button>Sign Up</button></Link>
                </header>
                <hr />
                <main>
                    <Switch>
                        <Route exact path="/main"
                            render={() => {
                                return <Main totalPostinfo={this.props.totalPostinfo}></Main>
                            }}
                        ></Route>
                        <Route path="/signin"
                            render={() => {
                              return <SignIn handleResponseSuccess={this.props.handleResponseSuccess}/>
                            }}
                        ></Route>
                        <Route path="/signup"
                            render={() => {
                                return <SignUp/>
                            }}
                        ></Route>
                    </Switch>
                </main>
            </div>
                
            
        );
    };
}

export default withRouter(LogOutHomePage);