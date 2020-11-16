import React from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";

class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: ""
        }

        this.handleChange = this.handleChange.bind(this)

    }
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
        //썸네일 파일을 어떻게가져오게 하지? post요청??
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleChange} />
                <img src={this.state.file} />

            </div>
        )
    }
}
export default withRouter(Upload);