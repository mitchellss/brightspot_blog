import { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container header">
                <Link to={"/"}>
                    <div className="header-title disable-select">Totally Real Blog</div>
                </Link>
                <div className="right-aligned-header-options-container">
                    <div className="new-post-button disable-select">New Post</div>
                </div>
            </div>
        )
    }
}