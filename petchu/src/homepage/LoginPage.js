import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import logo from '../images/logo.png';
axios.defaults.withCredentials = true;

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            email:"",
            password:"",
            errorMessage:"",
        };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    }
    handleInputValue = (key) => (e) => 
        {
        this.setState({ [key]: e.target.value });
        };

    handleSignin = async () => {
        const {email,password} = this.state;
        if(!email){
            return this.setState({errorMessage:'Email 을 확인해주세요'});
        }else if(!password){
            return this.setState({errorMessage:'password 을 확인해주세요'});
        }
        await axios.post('http://localhost:3000/signin',{
            email: email,
            password: password
        }).then(res => {
            if(res.status === 200) {
                this.props.history.push("/");
            }else{
                this.props.history.go(0);
             
            }
           
        })

    }
    render() {
        return(
            <div>
                <div>
                <img className="logo" src={logo} width="13" height="14" alt="띠용"></img>
                </div>

                <center>
                    <h1>Sing In!</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div>
                        <label>Email:    </label> <input type="email" onChange={this.handleInputValue("email")}></input>
                        <br/>
                        <label>password: </label> <input type="password" onChange={this.handleInputValue("email")}></input>
                        </div>
                        <div>
                            <button type='submit' onClick={this.handleSignin}>Sing In</button>
                        </div>
                        <div className="alert-box">{this.state.errorMessage}</div>
                    </form>
                    <hr></hr>
                    <div>
                            <h3>소셜 로그인</h3>
                            <div>
                                소셜 로그인 예정
                            </div>
                            <div>
                                <button>
                                    <Link to='/signup'>회원가입</Link>
                                </button>           
                            </div>
                    </div>
                </center>
            </div>
        )
    }
}


export default withRouter(LoginPage);