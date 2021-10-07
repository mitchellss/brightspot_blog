import { Component } from "react";
import axios from "axios";
import Comment from "./Comment";

export default class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allComments: [],
            loading: true
        }
    }
    

    componentDidMount() {
        axios.get(`http://localhost:8080/api/blog_comment/article/${this.props.articleId}`).then((res) => {
            this.setState({
                allComments: res.data,
                loading: false
            });
        });
    }

    generateComments(parentId) {
        var childComments = this.state.allComments.filter(comment => comment.parentId == parentId);
        console.log(childComments);
        if (childComments === undefined || childComments.length == 0) {
            return [];
        } else {
            var a = []
            for (var i = 0; i < childComments.length; i++) {
                a.push(<Comment author={childComments[i].author} content={childComments[i].content} datePosted={childComments[i].datePosted} level={childComments[i].level}/>);
                a.push(...this.generateComments(childComments[i].id));
            }
            return a;
        }
    }

    render() {
        if (this.state.loading) {
            return (<div>Loading...</div>)
        } else {
            return (
                <div>
                    {this.generateComments(null)}
                </div>
            );
        }
    }
}