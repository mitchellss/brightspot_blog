import { Component } from "react";
import { Link } from "react-router-dom";

export default class ArticleBox extends Component {
    constructor(props) {
        super(props);
    }

    translateDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    render() {
        return (
            <div className="article-box">
                <Link to={`/article/${this.props.urlName}`}>
                    <div className="linkbox">
                        <img className="cropped-image" src={this.props.imageUrl}/>
                        <div className="article-box-title">{this.props.title}</div>
                        <div className="article-box-subtitle">{this.props.subtitle}</div>
                        <div className="article-box-date">{this.translateDate(this.props.datePosted)}</div>
                    </div>
                </Link>
            </div>
        );
    }
}