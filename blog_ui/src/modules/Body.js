import { Component } from "react";
import axios from "axios";

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latest_title: "Loading...",
            latest_subtitle: "Loading..."
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/blog_post/latest').then((res) => {
            this.setState({latest_title: res.data.title});
            this.setState({latest_subtitle: res.data.subtitle});
        });
    }

    render() {
        return (
            <div className="container body">
                <div>{this.state.latest_title}</div>
                <div>{this.state.latest_subtitle}</div>
            </div>
        )
    }
}