import { Component } from "react";
import { Link } from "react-router-dom";

export default class ArticleBox extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="article-box">
                <Link to={`/${this.props.urlName}`}>
                    <div className="linkbox">
                        <img className="cropped-image" src={this.props.url}/>
                        <div>{this.props.title}</div>
                        <div>{this.props.subtitle}</div>
                    </div>
                </Link>
            </div>
        );
    }
}