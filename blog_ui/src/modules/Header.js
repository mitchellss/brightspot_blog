import { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Link to={"/"}>
                <div className="container header">Totally Real Blog</div>
            </Link>
        )
    }
}