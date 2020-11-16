import React from "react";
import { withRouter, Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import MyPage from "./MyPage";


axios.defaults.withCredentials = true;

class LoginHomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userPostInfo = null,
    };
  };
  async LoadToUserPost (id){
    await axios.get(`http://localhost:3000/writelist/${this.id}`)
    .then(res => {
      this.setState({userPostInfo:res.data})
    })
  }
  render() {
    return (
      <div>
        <header>
        <Link to="/main">
                    <button>
                    <img className="logo" src={logo} width="13" height="14" alt="Home"></img>    
                    </button>
                </Link>
          <Link to="/mypage"><button>MyPage</button></Link>

          <Link to="/mypostlist">
            <button onClick={this.LoadToUserPost(this.props.id).bind(this)}>My Post List</button>
          </Link>

          <Link to="/writenewpost"><button>WriteNewPost</button></Link>

        </header>
        <hr />
        <main>
          <Switch>
          <Route  path="/main"
                            render={() => {
                                return <Main totalPostinfo={this.props.totalPostinfo}></Main>
                            }}
                        ></Route>
            <Route  path="/mypage" 
                render={() => {
                  return <MyPage/>
                }}
              />
            <Route 
              path="/mypostlist"
                render={() => {
                  return <MyPostList userPostInfo={this.state.userPostInfo} id={this.props.id}/>
                }}
              />
          </Switch>
        </main>
      </div>

    )
  }
}

export default withRouter(LoginHomePage);