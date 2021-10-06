import { Component } from "react";


export default class Comment extends Component {
    constructor(props) {
        super(props);
    }


    translateDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    a = {
        paddingLeft: `${this.props.level * 3}vw`,
        width: `${50-this.props.level * 3}vw`
    }

    render() {
        return (
        <div className="comment-box" style={this.a}>
            <div className="comment-header">
                <div className="comment-author">{this.props.author}</div>
                <div className="comment-date">{this.translateDate(this.props.datePosted)}</div>
                <div className="reply-button">reply</div>
            </div>
            <div className="comment-content">{this.props.content}</div>
        </div>)
        ;
    }
}