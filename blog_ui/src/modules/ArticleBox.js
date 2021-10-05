import { Component } from "react";

export default class ArticleBox extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="article">
                <img className="cropped-image" src={this.props.url}/>
                <div>{this.props.title}</div>
                <div>{this.props.subtitle}</div>
            </div>
        );
    }
}