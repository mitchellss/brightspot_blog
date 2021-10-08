import { Component } from "react";


export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.changeReplyTo = this.changeReplyTo.bind(this);
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

    changeReplyTo() {
        console.log(this.props.level);
        this.props.changeReplyTo(`Reply To ${this.props.author}:`, this.props.id, this.props.level + 1);
    }

    render() {
        return (
        <div className="comment-box" style={this.a}>
            <div className="comment-header arial">
                <div className="comment-author arial bold">{this.props.author}</div>
                <div className="comment-date arial">{this.translateDate(this.props.datePosted)}</div>
                <div className="reply-button custom-button disable-select" onClick={this.changeReplyTo}>Reply</div>
            </div>
            <div className="comment-content arial">{this.props.content}</div>
        </div>)
        ;
    }
}