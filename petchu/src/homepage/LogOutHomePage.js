import React from "react";
import { Link, Switch, Route, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import logo from '../images/logo.png';
import WriteNewPost from "./WriteNewPost";



import Main from "./Main";

import WriteNewPost from "./WriteNewPost";


axios.defaults.withCredentials = true;

class LogOutHomePage extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <header>
                    <Link to="/">
                        <button>
                            <img className="logo" src={logo} width="13" height="14" alt="띠용"></img>
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
                                return <SignIn handleResponseSuccess={this.props.handleResponseSuccess} />
                            }}
                        ></Route>
                        <Route path="/signup"
                            render={() => {
                                return <SignUp />
                            }}
                        ></Route>
                        <Route path="/writenewpost"
                            render={() => {
                                return <WriteNewPost></WriteNewPost>
                            }}
                        ></Route>
                    </Switch>
                </main>
            </div>


        );
    };
}

export default withRouter(LogOutHomePage);