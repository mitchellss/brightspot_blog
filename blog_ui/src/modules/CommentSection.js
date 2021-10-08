import { Component } from "react";
import axios from "axios";
import Comment from "./Comment";

export default class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allComments: [],
            level: 0,
            replyToString: "Comment:",
            replyToId: null,
            loading: true
        }
        this.postComment = this.postComment.bind(this);
        this.changeReplyTo = this.changeReplyTo.bind(this);
        this.cancelComment = this.cancelComment.bind(this);
    }
    

    componentDidMount() {
        axios.get(`http://localhost:8080/api/blog_comment/article/${this.props.articleId}`).then((res) => {
            this.setState({
                allComments: res.data,
                loading: false
            });
        });
    }

    changeReplyTo(replyToString2, replyToId2, level2) {
        this.setState({
            replyToString: replyToString2,
            replyToId: replyToId2,
            level: level2
        });
    }

    generateComments(parentId) {
        var childComments = this.state.allComments.filter(comment => comment.parentId === parentId);
        if (childComments === undefined || childComments.length === 0) {
            return [];
        } else {
            var a = []
            for (var i = 0; i < childComments.length; i++) {
                a.push(<Comment 
                    author={childComments[i].author} 
                    content={childComments[i].content} 
                    datePosted={childComments[i].datePosted} 
                    level={childComments[i].level} 
                    changeReplyTo={this.changeReplyTo} 
                    id={childComments[i].id}
                />);
                a.push(...this.generateComments(childComments[i].id));
            }
            return a;
        }
    }

    postComment(e) {
        if (this.content.value && this.author.value) {
            const dateNow = Date.now();
            const requestData = {
                "author":this.author.value,
                "content":this.content.value,
                "datePosted": dateNow,
                "level": this.state.level,
                "postId": this.props.articleId,
                "parentId": this.state.replyToId
            };

            axios.post("http://localhost:8080/api/blog_comment", requestData).then(() => {
                this.setState({
                    loading: true
                });
                axios.get(`http://localhost:8080/api/blog_comment/article/${this.props.articleId}`).then((res) => {
                    this.setState({
                        allComments: res.data,
                        loading: false
                    });
                });
            });



        } else {
            console.log("Forms not filled");
        }
    }

    cancelComment() {
        this.setState({
            replyToString: "Comment:",
            replyToId: null,
            level: 0
        });
    }

    render() {
        if (this.state.loading) {
            return (
            <div>
                <div className="comments-header">Comments:</div>
                <div>Loading...</div>
            </div>)
        } else {
            return (
                <div>
                    <div className="comments-header">Comments:</div>
                    <div className="create-comment-container">
                        <div className="create-comment-name-container">
                            <div className="arial">Name:</div>
                            <input className="name-text-imput" type="text" ref={el => this.author = el}/>
                        </div>
                        <div className="create-comment-content-container">
                            <div className="arial">{this.state.replyToString}</div>
                            <input className="content-text-input" type="text" ref={el => this.content = el}/>
                        </div>
                        <div className="post-comment-button custom-button disable-select" onClick={this.postComment}>Comment</div>
                        <div className="cancel-reply-button custom-button disable-select" onClick={this.cancelComment}>Cancel</div>
                    </div>
                    {this.generateComments(null)}
                </div>
            );
        }
    }
}