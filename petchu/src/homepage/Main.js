import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import jee from "../images/jee.png";
import jhee from "../images/jhee.png";
import jy from "../images/jy.png";
import me from "../images/me.png";

axios.defaults.withCredentials = true;
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
      width: "420px",
      height: "150px",
    };
    const img = {
      width: "70px",
      height: "59px",
    };
    const intro = {
      color: "#dedede",
    };
    return (
      <div>
        <center>
          <h1>Team Petchu 의 할 말</h1>
          <div style={style}>
            <img style={img} src={jhee}></img>
            <div>
              <b>윤지희 </b>
              <span>Position: Front-end</span>
            </div>
            <div>
              <p>
                Hi guys! I am a team leader of Petchu and my position was
                front-end. Have fun :)
              </p>
            </div>
          </div>
          <div style={style}>
            <img style={img} src={jee}></img>
            <div>
              <b>유지은 </b>
              <span>Position: Back-end</span>
            </div>
            <div>
              <p>
                Нельзя смотреть! Я не думаю? Не делайте, как видите. Я хочу
                слишком много вырастить щенка.
              </p>
            </div>
          </div>
          <div style={style}>
            <img style={img} src={jy}></img>
            <div>
              <b>이주연 </b>
              <span>Position: Back-end</span>
            </div>
            <div>
              <p>
                안녕하세요 이주연입니다. 반려동물의 추억을 펫츄에서
                공유하세요!!! 그럼 모두 건강하세요.
              </p>
            </div>
          </div>
          <div style={style}>
            <img style={img} src={me}></img>
            <div>
              <b>임희찬 </b>
              <span>Position: Front-end</span>
            </div>
            <div>
              <p>
                こんにちは。私はイム·ヒチャンです。 嬉しいです
                私と目が合えば死です。 ^^ 皆さん、気をつけてください。
              </p>
            </div>
          </div>
        </center>
        <hr></hr>
        <footer>
          <center style={intro}>
            <p>
              Petchu는 반려동물과의 추억을 저장하는 공간입니다. 오늘 하루
              반려동물과 있었던 일들을 글로 남기고 일상을 기록해보세요..
            </p>
            About us We designed Petchu services to help our users save memories
            with their pets. Record your daily life with your pet in Petchu.
            Thanks for visiting our website and have fun!
          </center>
        </footer>
      </div>
    );
  }
}
export default withRouter(Main);
